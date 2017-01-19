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
        li a {
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
    <div class="charge grayBg"><span class="title">颜色：</span>
                <ul>
                  <li class="active"><a href="#">RED</a></li>
                  <li><a href="#">BLACK</a></li>
                </ul>
    </div>
     <div class="charge grayBg"><span class="title">尺寸：</span>
                <ul>
                  <li class="active"><a href="#">S</a></li>
                  <li><a href="#">M</a></li>
                  <li><a href="#">L</a></li>
                </ul>
    </div>
    <div class="charge grayBg"><span class="title">兑换价格：</span>
                <ul>
                  <li class="active"><a href="#">20000消费积分</a></li>
                  <li><a href="#">5000消费积分+3500元</a></li>
                </ul>
    </div>
    `,
    props: [],
    data: function () {
        return {
            skus: [
                {
                    id: "sku001",
                    dyn: {
                        size: "S",
                        color: "RED",
                        brand: "US",
                        price: "99"
                    }
                },
                {
                    id: "sku002",
                    dyn: {
                        size: "S",
                        color: "BLACK",
                        brand: "CA",
                        price: "100"
                    }
                },
                {
                    id: "sku003",
                    dyn: {
                        size: "M",
                        color: "RED",
                        brand: "MA",
                        price: "99"
                    }
                },
                {
                    id: "sku004",
                    dyn: {
                        size: "M",
                        color: "ANY",
                        brand: "WT",
                        price: "101"
                    }
                },
                {
                    id: "sku005",
                    dyn: {
                        size: "L",
                        color: "BLUE",
                        brand: "WD",
                        price: "103"
                    }
                }
            ]
        }
    },
    methods: {}
});