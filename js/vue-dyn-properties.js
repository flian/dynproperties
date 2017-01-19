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
    </style>
    
    <div class="charge grayBg" v-for="(optionKey,optionValue) in options">
    <span class="title" >{{optionKey}}：</span>
       <ul>
         <li class="" v-for="value in optionValue" @click="choose"><a href="#">{{value}}</a></li>
       </ul>
    </div>
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
            _.each(this.skus, function (sku, index, list) {
                _.each(sku.dyn, function (pValue, pKey, ll) {
                    if (!_.has(result, pKey)) {
                        result[pKey] = [];
                    }
                    if (!_.contains(result[pKey], pValue)) {
                        result[pKey].push(pValue);
                    }
                })
            })
            return result;
        }
    },
    methods: {
        choose:function () {
            
        }
    }
});