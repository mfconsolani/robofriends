(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),l=n(5),i=n(2),s=(n(24),n(3)),u=n(4),h=n(7),m=n(6),d=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},b=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robot",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},E=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(a.Component),v=(n(25),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={robots:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state.robots,t=this.props,n=t.searchField,a=t.onSearchChange,o=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return e.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Robofriends"),r.a.createElement(f,{searchChange:a}),r.a.createElement(p,null,r.a.createElement(E,null,r.a.createElement(b,{robots:o})))):r.a.createElement("h1",null,"Loading")}}]),n}(a.Component)),g=Object(l.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);var w={searchField:""},y=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:y},r.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8564dbb3.chunk.js.map