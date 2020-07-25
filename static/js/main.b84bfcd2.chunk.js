(this["webpackJsonpSorting-Time-Visualizer"]=this["webpackJsonpSorting-Time-Visualizer"]||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/card-flip.2317ec81.mp3"},37:function(e,t,n){e.exports=n(51)},42:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),c=(n(42),n(43),n(16)),s=n.n(c),u=n(10),l=n(25),m=n(18),d=n(19),h=n(13),b=n(24),g=n(22),f=n(66),p=n(69),y=n(68),v=n(70),k=n(71),E=Object(f.a)({root:{width:250,color:"rgba(100%, 100%, 100%, 82.5%)"},input:{width:50,color:"rgba(100%, 100%, 100%, 82.5%)",backgroundColor:"rgba(100%, 100%, 100%, 20%)",borderRadius:"10px"}});function x(e){var t=E(),n=r.a.useState(50),o=Object(u.a)(n,2),i=o[0],c=o[1];Object(a.useEffect)((function(){i<5?e.onSlide(5):i>150?e.onSlide(150):e.onSlide(i)}),[i]);return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{className:"slider-label",id:"input-slider",gutterBottom:!0},"Array Length"),r.a.createElement(p.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(p.a,{item:!0,xs:!0},r.a.createElement(v.a,{min:5,max:150,style:{color:"rgba(100%, 100%, 100%, 82.5%)"},value:"number"===typeof i?i:0,onChange:function(e,t){c(t)},"aria-labelledby":"input-slider"})),r.a.createElement(p.a,{item:!0},r.a.createElement(k.a,{className:t.input,value:i,margin:"dense",onChange:function(e){c(""===e.target.value?"":Number(e.target.value))},onBlur:function(){i<5?c(5):i>150&&c(150)},inputProps:{step:10,min:5,max:150,type:"number","aria-labelledby":"input-slider",style:{textAlign:"center"}}}))))}var S=Object(f.a)({root:{width:200,color:"rgba(100%, 100%, 100%, 82.5%)"}});function C(e){var t=S(),n=r.a.useState(30),o=Object(u.a)(n,2),i=o[0],c=o[1];Object(a.useEffect)((function(){return e.onSlide(i)}),[i]);return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{className:"slider-label",id:"continuous-slider",gutterBottom:!0},"Sorting Speed"),r.a.createElement(p.a,{container:!0,spacing:2},r.a.createElement(p.a,{item:!0}),r.a.createElement(p.a,{item:!0,xs:!0},r.a.createElement(v.a,{value:i,onChange:function(e,t){c(t)},style:{color:"rgba(100%, 100%, 100%, 82.5%)"},"aria-labelledby":"continuous-slider"})),r.a.createElement(p.a,{item:!0})))}n(49);var j=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={algorithm:"selection"},a}return Object(d.a)(n,[{key:"handleSpeedChange",value:function(e){this.props.onSpeedChange(e)}},{key:"handleGenerate",value:function(e){this.props.onGenerate(e)}},{key:"handleExecute",value:function(){var e=document.getElementById("menu-select").value;this.props.onExecute(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"menu-container"},r.a.createElement("div",{className:"menu-item",id:"selection-sort",onClick:function(){return e.handleGenerate()}},"New Array"),r.a.createElement(C,{onSlide:function(t){return e.handleSpeedChange(t)}}),r.a.createElement(x,{onSlide:function(t){return e.handleGenerate(t)}}),r.a.createElement("select",{className:"menu-item",id:"menu-select"},r.a.createElement("option",{value:"selection"},"Selection Sort"),r.a.createElement("option",{value:"insertion"},"Insertion Sort"),r.a.createElement("option",{value:"merge"},"Merge Sort"),r.a.createElement("option",{value:"quick"},"Quicksort")),r.a.createElement("div",{className:"menu-item",id:"execute",onClick:function(){return e.handleExecute()}},"Execute"))}}]),n}(r.a.Component);n(50);function w(e){for(var t,n,a=[],r=0;r<e.length;r++){t=r,a.push([r,"#8a2be2","sorted"]);for(var o=r+1;o<e.length;o++)e[o]<e[t]?(t=o,a.push([o,"#8a2be2"])):a.push([o,"#dc143c"]);t>r&&(n=e[t],e[t]=e[r],e[r]=n,a.push([r,t]))}return a}var O=n(29),N=n.n(O),M=n(30),B=n.n(M),A="#24682d",I=new N.a(B.a,{throttleMs:50}),R=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={array:[]},a.bars=[],a.animationSpeed=0,a.defaultLength=60,a.maxHeight=550,a.isRunning=!1,a.generateArray=a.generateArray.bind(Object(h.a)(a)),a.speedChange=a.speedChange.bind(Object(h.a)(a)),a.handleExecute=a.handleExecute.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.generateArray()}},{key:"generateArray",value:function(e){var t;if(e?(t=e,this.defaultLength=e):t=this.defaultLength,this.isRunning){for(var n=document.getElementsByClassName("array"),a=0;a<t;a++)n[a].style.backgroundColor=A;this.isRunning=!1}var o=window.innerWidth,i=Math.max(o/(10*t),1.5),c=Math.max((o-100)/(1.75*t),7);this.maxHeight=.85*(document.getElementById("bars-container").getBoundingClientRect().bottom-document.getElementById("menu-container").getBoundingClientRect().bottom);for(var s=[],u=0;u<t;u++)s.push(Math.floor(Math.random()*this.maxHeight+15));this.setState({array:s}),this.bars=s.map((function(e,t){return r.a.createElement("div",{className:"array",key:t,index:t,color:A,type:void 0,style:{height:e,width:c,margin:i}})}))}},{key:"speedChange",value:function(e){e=3*(100-e),this.animationSpeed=e}},{key:"animateSelectionSort",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,o,i,c,l,m,d,h,b,g,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.array,n=w(t),(a=document.getElementsByClassName("array"))[0].style.backgroundColor="#8a2be2",e.next=6,T(this.animationSpeed);case 6:r=1;case 7:if(!(r<n.length)){e.next=49;break}if(this.isRunning){e.next=10;break}return e.abrupt("return");case 10:if("number"!==typeof n[r][1]){e.next=29;break}return I.play(),a[n[r-1][0]].style.backgroundColor=A,o=Object(u.a)(n[r],2),i=o[0],c=o[1],a[i].style.backgroundColor="#ffff00",a[c].style.backgroundColor="#ffff00",e.next=18,T(this.animationSpeed);case 18:return l=a[i].style.height,a[i].style.height=a[c].style.height,a[c].style.height=l,e.next=23,T(this.animationSpeed);case 23:return a[i].style.backgroundColor="#8a2be2",a[c].style.backgroundColor=A,e.next=27,T(this.animationSpeed);case 27:e.next=46;break;case 29:if(m=Object(u.a)(n[r],3),d=m[0],h=m[1],b=m[2],a[d].style.backgroundColor=h,a[d].type=b,"#dc143c"===n[r-1][1]&&(a[n[r-1][0]].style.backgroundColor=A),"#8a2be2"!==h){e.next=44;break}g=d-1;case 35:if(!(g>0)){e.next=44;break}if("sorted"!==a[g].type){e.next=38;break}return e.abrupt("break",44);case 38:if("rgb(138, 43, 226)"!==a[g].style.backgroundColor){e.next=41;break}return a[g].style.backgroundColor=A,e.abrupt("break",44);case 41:g--,e.next=35;break;case 44:return e.next=46,T(this.animationSpeed);case 46:r++,e.next=7;break;case 49:return a[a.length-1].style.backgroundColor="#8a2be2",e.next=52,T(this.animationSpeed);case 52:f=0;case 53:if(!(f<a.length)){e.next=61;break}return a[f].style.backgroundColor=A,a[f].type=void 0,e.next=58,T(.33*this.animationSpeed);case 58:f++,e.next=53;break;case 61:this.isRunning=!1;case 62:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"animateInsertionSort",value:function(){console.log("Todo: Insertion sort")}},{key:"animateMergeSort",value:function(){console.log("Todo: Merge sort")}},{key:"animateQuickSort",value:function(){console.log("Todo: Quicksort")}},{key:"testSort",value:function(e){for(var t=0;t<1e3;t++){for(var n=[],a=0;a<1e3;a++)n.push(Math.floor(500*Math.random()+20));var r=[].concat(n);e(n),r.sort((function(e,t){return e-t})),console.log(G(n,r))}}},{key:"handleExecute",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.isRunning=!0,e.t0=t,e.next="selection"===e.t0?4:"insertion"===e.t0?6:"merge"===e.t0?8:"quick"===e.t0?10:12;break;case 4:return this.animateSelectionSort(),e.abrupt("break",14);case 6:return this.animateInsertionSort(),e.abrupt("break",14);case 8:return this.animateMergeSort(),e.abrupt("break",14);case 10:return this.animateQuickSort(),e.abrupt("break",14);case 12:return this.animateSelectionSort(),e.abrupt("break",14);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"color-strip"}),r.a.createElement(j,{onExecute:this.handleExecute,onGenerate:this.generateArray,onSpeedChange:this.speedChange}),r.a.createElement("div",{id:"bars-container"},this.bars))}}]),n}(r.a.Component);function T(e){return new Promise((function(t){return setTimeout(t,e)}))}function G(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b84bfcd2.chunk.js.map