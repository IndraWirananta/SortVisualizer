(this["webpackJsonpsort-visualizer"]=this["webpackJsonpsort-visualizer"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),c=a(9),i=a.n(c),l=(a(15),a(8)),o=a(3),u=a(4),h=a(2),j=a(6),d=a(5),b=0;function m(e){var t=[];if(b=0,e.length<=1)return e;var a=e.slice();return v(e,0,e.length-1,a,t),console.log(b),t}function v(e,t,a,n,r,s){if(t!==a){var c=Math.floor((t+a)/2);v(n,t,c,e,r),v(n,c+1,a,e,r),O(e,t,c,a,n,r)}}function O(e,t,a,n,r,s){for(var c=t,i=t,l=a+1;i<=a&&l<=n;)r[i]<=r[l]?(s.push([c,r[i]]),e[c++]=r[i++]):(s.push([c,r[l]]),e[c++]=r[l++]),b++;for(;i<=a;)s.push([c,r[i]]),e[c++]=r[i++],b++;for(;l<=n;)s.push([c,r[l]]),e[c++]=r[l++],b++}function f(e){var t=[];return e.length<=1?e:(function(e,t){for(var a=e.length,n=1;n<a;n++){for(var r=e[n],s=n-1;s>-1&&r<e[s];)t.push([s+1,e[s]]),e[s+1]=e[s],s--;t.push([s+1,r]),e[s+1]=r,n===a-1&&console.log("end")}console.log(t)}(e,t),t)}a(16);var g="turquoise",y=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={array:[],array2:[],ANIMATION_SPEED_MS:5,NUMBER_OF_ARRAY_BARS:100},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleChange2=n.handleChange2.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState({ANIMATION_SPEED_MS:e.target.value})}},{key:"handleChange2",value:function(e){this.setState({NUMBER_OF_ARRAY_BARS:e.target.value})}},{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e,t,a=[],n=[],r=0;r<this.state.NUMBER_OF_ARRAY_BARS;r++){var s=(e=5,t=500,Math.floor(Math.random()*(t-e+1)+e));a.push(s),n.push(s)}this.setState({array:a}),this.setState({array2:n})}},{key:"Sort",value:function(){for(var e=this,t=m(this.state.array),a=function(a){var n=document.getElementsByClassName("array-bar");1,setTimeout((function(){var e=Object(l.a)(t[a],2),r=e[0],s=e[1];n[r].style.height="".concat(s,"px")}),a*e.state.ANIMATION_SPEED_MS)},n=0;n<t.length;n++)a(n);for(var r=f(this.state.array2),s=function(t){var a=document.getElementsByClassName("array-bar2");setTimeout((function(){var e=Object(l.a)(r[t],2),n=e[0],s=e[1];a[n].style.height="".concat(s,"px")}),t*e.state.ANIMATION_SPEED_MS)},c=0;c<r.length;c++)s(c)}},{key:"test",value:function(){for(var e=document.getElementsByClassName("array-bar2"),t=document.getElementsByClassName("array-bar"),a=!0,n=0;n<e.length;n++)e[n].style.height!==t[n].style.height&&(a=!1);alert("Array 1 and array 2 are equal : "+a),console.log(a)}},{key:"render",value:function(){var e=this,t=this.state.array2,a=this.state.array;return Object(n.jsxs)("div",{className:"array-container",children:[Object(n.jsx)("p",{className:"sort_name",children:"Merge Sort"}),Object(n.jsx)("div",{children:a.map((function(e,t){return Object(n.jsx)("div",{className:"array-bar",style:{backgroundColor:g,height:"".concat(e,"px")}},t)}))}),Object(n.jsx)("p",{className:"sort_name",children:"Insertion Sort"}),Object(n.jsx)("div",{children:t.map((function(e,t){return Object(n.jsx)("div",{className:"array-bar2",style:{backgroundColor:g,height:"".concat(e,"px")}},t)}))}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form_class",children:[Object(n.jsx)("label",{id:"name-label",for:"name",children:"Sort Speed"}),Object(n.jsx)("input",{type:"number",name:"name",id:"name",placeholder:"  Enter your name",value:this.state.ANIMATION_SPEED_MS,onChange:this.handleChange})]}),Object(n.jsxs)("div",{className:"form_class",children:[Object(n.jsx)("label",{id:"name-label",for:"name",children:"Array Size"}),Object(n.jsx)("input",{type:"number",name:"name",id:"name",placeholder:"  Enter your name",value:this.state.NUMBER_OF_ARRAY_BARS,onChange:this.handleChange2,required:!0})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"button",onClick:function(){return e.resetArray()},children:"Generate New Array"}),Object(n.jsx)("button",{className:"button",onClick:function(){return e.Sort()},children:"Sort"}),Object(n.jsx)("button",{className:"button",onClick:function(){return e.test()},children:"Check"})]})]})}}]),a}(s.a.Component);a(17);var x=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("a",{href:"#calculator",id:"logo",children:Object(n.jsx)("big",{children:Object(n.jsx)("bold",{id:"title",children:"Insertion & Merge Sort Visualizer"})})}),Object(n.jsx)("div",{id:"divider"}),Object(n.jsx)("ul",{className:"nav_links",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{children:" By     : Indra Wirananta &  Raka Mahendra"})})}),Object(n.jsxs)("button",{id:"hamburger",children:[Object(n.jsx)("div",{className:"hamburger-line"}),Object(n.jsx)("div",{className:"hamburger-line"}),Object(n.jsx)("div",{className:"hamburger-line"})]})]})}}]),a}(r.Component);a(18);var p=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(x,{}),Object(n.jsx)(y,{})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.630be975.chunk.js.map