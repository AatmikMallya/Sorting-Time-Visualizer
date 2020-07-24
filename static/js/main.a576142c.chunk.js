(this["webpackJsonpSorting-Time-Visualizer"]=this["webpackJsonpSorting-Time-Visualizer"]||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/card-flip.2317ec81.mp3"},33:function(e,t,n){e.exports=n(47)},38:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),c=(n(38),n(39),n(16)),u=n.n(c),l=n(15),s=n(25),m=n(18),d=n(19),h=n(13),b=n(24),f=n(22),g=n(66),p=n(69),y=n(68),v=n(70),k=n(71),x=Object(g.a)({root:{width:250,color:"rgba(100%, 100%, 100%, 82.5%)"},input:{width:50,color:"rgba(100%, 100%, 100%, 82.5%)",backgroundColor:"rgba(100%, 100%, 100%, 20%)",borderRadius:"10px"}});function E(e){var t=x(),n=r.a.useState(50),o=Object(l.a)(n,2),i=o[0],c=o[1];Object(a.useEffect)((function(){return e.onSlide(i)}),[i]);return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{className:"slider-label",id:"input-slider",style:{fontSize:"20px"},gutterBottom:!0},"Array Length"),r.a.createElement(p.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(p.a,{item:!0}),r.a.createElement(p.a,{item:!0,xs:!0},r.a.createElement(v.a,{min:5,max:150,style:{color:"rgba(100%, 100%, 100%, 82.5%)"},value:"number"===typeof i?i:0,onChange:function(e,t){c(t)},"aria-labelledby":"input-slider"})),r.a.createElement(p.a,{item:!0},r.a.createElement(k.a,{className:t.input,value:i,margin:"dense",onChange:function(e){c(""===e.target.value?"":Number(e.target.value))},onBlur:function(){i<5?c(5):i>150&&c(150)},inputProps:{step:10,min:5,max:150,type:"number","aria-labelledby":"input-slider",style:{textAlign:"center"}}}))))}n(45);var S=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={algorithm:"selection"},a}return Object(d.a)(n,[{key:"handleGenerate",value:function(e){this.props.onGenerate(e)}},{key:"handleExecute",value:function(){var e=document.getElementById("menu-select").value;this.props.onExecute(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"menu-container"},r.a.createElement("div",{className:"menu-item",id:"selection-sort",onClick:function(){return e.handleGenerate()}},"New Array"),r.a.createElement(E,{onSlide:function(t){return e.handleGenerate(t)}}),r.a.createElement("select",{className:"menu-item",id:"menu-select"},r.a.createElement("option",{value:"selection"},"Selection Sort"),r.a.createElement("option",{value:"insertion"},"Insertion Sort"),r.a.createElement("option",{value:"merge"},"Merge Sort"),r.a.createElement("option",{value:"quick"},"Quicksort")),r.a.createElement("div",{className:"menu-item",id:"execute",onClick:function(){return e.handleExecute()}},"Execute"))}}]),n}(r.a.Component);n(46);function C(e){for(var t,n,a=[],r=0;r<e.length;r++){t=r,a.push([r,"#8a2be2","sorted"]);for(var o=r+1;o<e.length;o++)e[o]<e[t]?(t=o,a.push([o,"#8a2be2"])):a.push([o,"#dc143c"]);t>r&&(n=e[t],e[t]=e[r],e[r]=n,a.push([r,t]))}return a}var w=n(29),j=n.n(w),O=n(30),M=n.n(O),N="#24682d",B=new j.a(M.a,{throttleMs:50}),A=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={array:[]},a.bars=[],a.animationSpeed=0,a.defaultLength=60,a.maxHeight=550,a.generateArray=a.generateArray.bind(Object(h.a)(a)),a.handleExecute=a.handleExecute.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.generateArray()}},{key:"generateArray",value:function(e){var t;e?(t=e,this.defaultLength=e):t=this.defaultLength;var n=window.innerWidth,a=Math.max(n/(10*e),1.5),o=Math.max((n-100)/(1.75*e),7);this.maxHeight=.85*(document.getElementById("bars-container").getBoundingClientRect().bottom-document.getElementById("menu-container").getBoundingClientRect().bottom);for(var i=[],c=0;c<t;c++)i.push(Math.floor(Math.random()*this.maxHeight+15));this.setState({array:i}),this.bars=i.map((function(e,t){return r.a.createElement("div",{className:"array",key:t,index:t,style:{height:e,width:o,margin:a}})}))}},{key:"animateSelectionSort",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a,r,o,i,c,s,m,d,h,b,f,g;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.array,n=C(t),(a=document.getElementsByClassName("array"))[0].style.backgroundColor="#8a2be2",e.next=6,I(this.animationSpeed);case 6:r=1;case 7:if(!(r<n.length)){e.next=47;break}if("number"!==typeof n[r][1]){e.next=27;break}return B.play(),a[n[r-1][0]].style.backgroundColor=N,o=Object(l.a)(n[r],2),i=o[0],c=o[1],a[i].style.backgroundColor="#ffff00",a[c].style.backgroundColor="#ffff00",e.next=16,I(this.animationSpeed);case 16:return s=a[i].style.height,a[i].style.height=a[c].style.height,a[c].style.height=s,e.next=21,I(this.animationSpeed);case 21:return a[i].style.backgroundColor="#8a2be2",a[c].style.backgroundColor=N,e.next=25,I(this.animationSpeed);case 25:e.next=44;break;case 27:if(m=Object(l.a)(n[r],3),d=m[0],h=m[1],b=m[2],a[d].style.backgroundColor=h,a[d].type=b,"#dc143c"===n[r-1][1]&&(a[n[r-1][0]].style.backgroundColor=N),"#8a2be2"!==h){e.next=42;break}f=d-1;case 33:if(!(f>0)){e.next=42;break}if("sorted"!==a[f].type){e.next=36;break}return e.abrupt("break",42);case 36:if("rgb(138, 43, 226)"!==a[f].style.backgroundColor){e.next=39;break}return a[f].style.backgroundColor=N,e.abrupt("break",42);case 39:f--,e.next=33;break;case 42:return e.next=44,I(this.animationSpeed);case 44:r++,e.next=7;break;case 47:return a[a.length-1].style.backgroundColor="#8a2be2",e.next=50,I(this.animationSpeed);case 50:g=0;case 51:if(!(g<a.length)){e.next=59;break}return a[g].style.backgroundColor=N,a[g].type=void 0,e.next=56,I(.33*this.animationSpeed);case 56:g++,e.next=51;break;case 59:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"animateInsertionSort",value:function(){console.log("Todo: Insertion sort")}},{key:"animateMergeSort",value:function(){console.log("Todo: Merge sort")}},{key:"animateQuickSort",value:function(){console.log("Todo: Quicksort")}},{key:"testSort",value:function(e){for(var t=0;t<1e3;t++){for(var n=[],a=0;a<1e3;a++)n.push(Math.floor(500*Math.random()+20));var r=[].concat(n);e(n),r.sort((function(e,t){return e-t})),console.log(T(n,r))}}},{key:"handleExecute",value:function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="selection"===e.t0?3:"insertion"===e.t0?5:"merge"===e.t0?7:"quick"===e.t0?9:11;break;case 3:return this.animateSelectionSort(),e.abrupt("break",13);case 5:return this.animateInsertionSort(),e.abrupt("break",13);case 7:return this.animateMergeSort(),e.abrupt("break",13);case 9:return this.animateQuickSort(),e.abrupt("break",13);case 11:return this.animateSelectionSort(),e.abrupt("break",13);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"color-strip"}),r.a.createElement(S,{onExecute:this.handleExecute,onGenerate:this.generateArray}),r.a.createElement("div",{id:"bars-container"},this.bars))}}]),n}(r.a.Component);function I(e){return new Promise((function(t){return setTimeout(t,e)}))}function T(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.a576142c.chunk.js.map