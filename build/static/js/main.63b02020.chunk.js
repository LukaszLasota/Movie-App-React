(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(7),i=n.n(s),o=(n(15),n(9)),l=n(6),u=n.n(l),j=n(8),d=n(4),h=function(e){var t=e.favouriteComponent;return Object(c.jsx)(c.Fragment,{children:e.movies.map((function(n,a){return Object(c.jsxs)("div",{className:"image-container d-flex justify-contetnt-start m-3",children:[Object(c.jsx)("img",{src:n.Poster,alt:"movie"}),Object(c.jsx)("div",{onClick:function(){return e.handleFavouritesClick(n)},className:"overlay d-flex align-items-center justify-contetnt-center",children:Object(c.jsx)(t,{})})]},a)}))})},m=function(e){return Object(c.jsx)("div",{className:"row pl-5 p-3",children:Object(c.jsx)("h1",{children:e.heading})})},v=function(e){return Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsx)("input",{className:"form-control",type:"text",placeholder:"Type to search",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)}})})},f=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"mr-1",children:"Add to favourites"}),Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},b=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"mr-1",children:"Remove from favourites"}),Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-square",viewBox:"0 0 16 16",children:[Object(c.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(c.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},x=(n(17),n(18),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),l=i[0],x=i[1],O=Object(a.useState)(""),p=Object(d.a)(O,2),g=p[0],w=p[1],N=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://www.omdbapi.com/?s=".concat(t,"&apikey=8af69c3e"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:(a=e.sent).Search&&r(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){N(g)}),[g]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));x(e)}),[]);var C=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(c.jsxs)("div",{className:"container-fluid movie-app",children:[Object(c.jsxs)("div",{className:"row d-flex align-items-center my-4",children:[Object(c.jsx)(m,{heading:"Movies"}),Object(c.jsx)(v,{searchValue:g,setSearchValue:w})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(h,{movies:n,handleFavouritesClick:function(e){var t=[].concat(Object(o.a)(l),[e]);x(t),C(t)},favouriteComponent:f},n)}),Object(c.jsx)("div",{className:"row d-flex align-items-center my-4",children:Object(c.jsx)(m,{heading:"Favourites"})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(h,{movies:l,handleFavouritesClick:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));x(t),C(t)},favouriteComponent:b},n)})]})}),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.63b02020.chunk.js.map