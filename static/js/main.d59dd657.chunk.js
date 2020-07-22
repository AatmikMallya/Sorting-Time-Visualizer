(this["webpackJsonpSorting-Time-Visualizer"]=this["webpackJsonpSorting-Time-Visualizer"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),c=(n(14),n(15),n(6)),l=n(1),u=n(2),s=n(3),h=n(5),d=n(4),m=(n(16),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={algorithm:"selection"},a}return Object(u.a)(n,[{key:"handleExecute",value:function(){this.props.onClick()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"menu-container"},o.a.createElement("div",{className:"menu-button",id:"selection-sort",onClick:this.handleExecute},"New Array"),o.a.createElement("select",null),o.a.createElement("div",{className:"menu-button",id:"selection-sort",onClick:this.handleExecute},"Selection Sort"),o.a.createElement("div",{className:"menu-button",id:"insertion-sort",onClick:this.handleExecute},"Insertion Sort"),o.a.createElement("div",{className:"menu-button",id:"execute",onClick:function(){return e.handleExecute()}},"Execute"))}}]),n}(o.a.Component));n(17);var f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={array:[]},a.handleExecute=a.handleExecute.bind(Object(s.a)(a)),a.bars=[],a.animationSpeed=100,a.arrayLength=25,a.arrayHeight=400,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.arrayLength;t++)e.push(Math.floor(Math.random()*this.arrayHeight+20));this.setState({array:e}),this.bars=e.map((function(e,t){return o.a.createElement("div",{className:"array",style:{height:e},key:t,index:t})}))}},{key:"animateSort",value:function(){for(var e=this,t=function(e){for(var t,n,a=[],o=0;o<e.length;o++){t=o,a.push([o,"#8a2be2","base"]);for(var r=o+1;r<e.length;r++)e[r]<e[t]?(t=r,a.push([r,"#8a2be2"])):a.push([r,"#dc143c"]);t>o&&(n=e[t],e[t]=e[o],e[o]=n,a.push([o,t]),a.push([null]),a.push([null]))}return a}(this.state.array),n=document.getElementsByClassName("array"),a=0;a<t.length;a++)null===t[a][0]?(setTimeout((function(){}),(a+1)*this.animationSpeed),setTimeout((function(){}),(a+2)*this.animationSpeed)):"number"===typeof t[a][1]?function(){var o=Object(c.a)(t[a],2),r=o[0],i=o[1];setTimeout((function(){n[r].style.backgroundColor="#ffff00",n[i].style.backgroundColor="#ffff00"}),a*e.animationSpeed),setTimeout((function(){var e=n[r].style.height;n[r].style.height=n[i].style.height,n[i].style.height=e}),(a+1)*e.animationSpeed),setTimeout((function(){n[r].style.backgroundColor="#8a2be2",n[i].style.backgroundColor="#24682d"}),(a+2)*e.animationSpeed)}():function(){var o=Object(c.a)(t[a],3),r=o[0],i=o[1],l=o[2];setTimeout((function(){if(n[r].style.backgroundColor=i,n[r].type=l,"#dc143c"===i)setTimeout((function(){n[r].style.backgroundColor="#24682d"}),e.animationSpeed);else if("#8a2be2"===i)for(var t=r-1;t>0&&"base"!==n[t].type;t--)if("rgb(138, 43, 226)"===n[t].style.backgroundColor){n[t].style.backgroundColor="#24682d";break}}),a*e.animationSpeed)}();setTimeout((function(){n[n.length-1].style.backgroundColor="#8a2be2"}),this.animationSpeed*t.length);for(var o=function(a){setTimeout((function(){n[a].style.backgroundColor="#24682d"}),e.animationSpeed*(.25*a+t.length))},r=0;r<n.length;r++)o(r)}},{key:"testSort",value:function(e){for(var t=0;t<1e3;t++){for(var n=[],a=0;a<1e3;a++)n.push(Math.floor(500*Math.random()+20));var o=[].concat(n);e(n),o.sort((function(e,t){return e-t})),console.log(b(n,o))}}},{key:"handleExecute",value:function(e){console.log("SortingTimeVisualizer -> handleExecute -> e",e),this.animateSort()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"color-strip"}),o.a.createElement(m,{onClick:this.handleExecute}),o.a.createElement("div",{id:"bars-container"},this.bars))}}]),n}(o.a.Component);function b(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d59dd657.chunk.js.map