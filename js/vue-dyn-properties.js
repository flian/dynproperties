Vue.component("dyn", {
    template: `
    <style>
         /*.charge ul {
            width: 450px;
            height: auto;
            float: right;
        }*/
        li {
            list-style: none;
        }
        div .title{
         float: left;
         width: 75px;
        }
        li a {
            margin-left: 80px;
            position: relative;
            display: block;
            padding: 1px 21px;
            border: 1px solid #CCC;
            color: #474747;
            background: #FFF;
            size: 10px;
            width: 200px;
            text-decoration: none;
            cursor: auto;
        }
        li a:hover {
            color: #E4393C;
            border-color: #E4393C;
        }
        .active a {
            padding: 0px 20px;
            color: #E4393C;
            border: 2px solid #E4393C;
            background: url(/images/inc-02.png) #FFF no-repeat right bottom;
        }
        .disable a {
          background: gray;  
        }
    </style>
    
    <div class="charge grayBg" v-for="(optionKey,optionValue) in options">
    <span class="title" >{{optionKey}}：</span>
       <ul>
         <li :class="{'active':isActive(optionKey,value),'disable':isDisable(optionKey,value)}" v-for="value in optionValue" @click="choose(optionKey,value)"><a href="#">{{value}}</a></li>
       </ul>
    </div>
    
    <div> selected : <li v-for="(k,v) in selected">{{k}}:{{v}} </li></div>
    
    <div> sku left: <li v-for="sku in ids">{{sku.id}}:{{sku.dyn.price}} </li></div>
    `,
    props: ["skus"],
    data: function () {
        return {
            selected: {}
        }
    },
    computed: {
        options: function () {
            var result = {};
            _.each(this.skus, function (sku) {
                _.each(sku.dyn, function (pValue, pKey) {
                    if (!_.has(result, pKey)) {
                        result[pKey] = [];
                    }
                    if (!_.contains(result[pKey], pValue)) {
                        result[pKey].push(pValue);
                    }
                })
            })
            return result;
        },
        ids: function () {
            //as skus group properties in 'dyn', _.where should use same structure
            //JSON.parse(JSON.stringify(this.selected))
            //JSON.parse(JSON.stringify(sku.dyn)
            var filter = {};
            if (!_.isEmpty(this.selected)) {
                _.each(this.selected, function (value, key) {
                    filter[key] = value;
                })
            }
            return _.filter(this.skus, function (sku) {
                return _.where([JSON.parse(JSON.stringify(sku.dyn))], filter).length > 0;
            })
        }
    },
    methods: {
        choose: function (key, value) {
            if (_.has(this.selected, key) && value == this.selected[key]) {
                Vue.delete(this.selected, key);
            } else {
                if(!this.isDisable(key,value)){
                    Vue.set(this.selected, key, value);
                }else{
                    console.info("according to current selecting, your can't select with given key/value pair " + key +":" + value);
                }
            }
        },
        isActive: function (key, value) {
            if (_.has(this.selected, key) && value == this.selected[key]) {
                return true;
            }
            return false;
        },
        isDisable: function (key, value) {
            var filter = {};
            if (!_.isEmpty(this.selected)) {
                _.each(this.selected, function (pValue, pKey) {
                    filter[pKey] = pValue;
                })
            }
            filter[key] = value;
            if (!_.isEmpty(_.filter(this.skus, function (sku) {
                    return _.where([JSON.parse(JSON.stringify(sku.dyn))], filter).length > 0;
                }))) {
                return false;
            }
            return true;
        },
        kvPair: function (key, value) {
            return key + '_' + value;
        }
    }
});