(this.webpackJsonpcryptotrackerapp=this.webpackJsonpcryptotrackerapp||[]).push([[0],{13:function(e,c,s){},20:function(e,c,s){},21:function(e,c,s){},43:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s.n(t),r=s(14),l=s.n(r),n=(s(20),s(4)),i=(s(21),s(15)),j=s.n(i),o=(s(13),s(0)),m=function(e){var c=e.image,s=e.name,t=e.symbol,a=e.price,r=e.volume,l=e.priceChange,n=e.marketcap;return Object(o.jsx)("div",{className:"container-fluid mr-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-lg-12 col-sm-12",children:Object(o.jsx)("div",{className:"card mt-4 shadow-lg p-3 mb-5 bg-body rounded",children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-lg-1 col-sm-1",children:Object(o.jsx)("img",{src:c,alt:"bitcoin",className:"img-con mt-2 pt-3"})}),Object(o.jsxs)("div",{className:"col-lg-2 pt-3",children:[Object(o.jsx)("p",{className:"ml-5 name",children:"Name"}),Object(o.jsx)("hr",{}),Object(o.jsx)("h4",{className:"name_c",children:Object(o.jsx)("strong",{children:s})})]}),Object(o.jsxs)("div",{className:"col-lg-1 pt-3",children:[Object(o.jsx)("p",{className:"symbol",children:"Symbol"}),Object(o.jsx)("hr",{}),Object(o.jsx)("h5",{className:"font-italic symbol_c",children:Object(o.jsx)("strong",{children:t})})]}),Object(o.jsxs)("div",{className:"col-lg-2 pt-3",children:[Object(o.jsx)("p",{className:"price",children:"Price"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"price_c",children:Object(o.jsxs)("strong",{children:["\u20b1",a.toLocaleString()]})})]}),Object(o.jsxs)("div",{className:"col-lg-2 pt-3",children:[Object(o.jsx)("p",{className:"tvolume",children:"Total Volume"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"tvolume_c",children:Object(o.jsxs)("strong",{children:["\u20b1",r.toLocaleString()]})})]}),Object(o.jsxs)("div",{className:"col-lg-2 pt-3",children:[Object(o.jsx)("p",{className:"pchange",children:"Price Change"}),Object(o.jsx)("hr",{}),l<0?Object(o.jsx)("p",{className:"text-danger pchange_c",children:Object(o.jsxs)("strong",{children:[l.toFixed(2),"%"]})}):Object(o.jsx)("p",{className:"text-success pchange_c",children:Object(o.jsxs)("strong",{children:[l.toFixed(2),"%"]})})]}),Object(o.jsxs)("div",{className:"col-lg-2 pt-3",children:[Object(o.jsx)("p",{className:"mcap",children:"Market Cap"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"mcap_c",children:Object(o.jsxs)("strong",{children:["\u20b1",n.toLocaleString()]})})]})]})})})})})})},d=s.p+"static/media/russlogo.7653d4d3.png";var b=function(){var e=Object(t.useState)([]),c=Object(n.a)(e,2),s=c[0],a=c[1],r=Object(t.useState)(""),l=Object(n.a)(r,2),i=l[0],b=l[1];Object(t.useEffect)((function(){j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))}),[]);var h=s.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(o.jsxs)("div",{className:"container-fluid body",children:[Object(o.jsx)("img",{src:d,alt:"logo",className:"rlg"}),Object(o.jsxs)("h1",{className:"text-center pt-3",children:[Object(o.jsx)("i",{className:"fas fa-coins pr-5 fa-pulse"}),"Crypto Tracker"]}),Object(o.jsx)("div",{className:"cn-search",children:Object(o.jsxs)("form",{className:"text-center",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)},className:"mb-5 mt-4 col-form-label srch",placeholder:"Type here to search "}),Object(o.jsx)("i",{className:"fas fa-search-dollar pl-2 fa-lg"})]})}),h.map((function(e){return Object(o.jsx)(m,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})};s(41),s(42);l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4c2f8d0b.chunk.js.map