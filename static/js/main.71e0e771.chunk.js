(this.webpackJsonpforks=this.webpackJsonpforks||[]).push([[0],{17:function(t,e,n){t.exports={search:"Search_search__3OUtB",label:"Search_label__22ZlC",input:"Search_input__yx45c",input__warn:"Search_input__warn__1zswX",label__hint:"Search_label__hint__2mxOq"}},19:function(t,e,n){t.exports={Table:"Table_Table__1gUAx",caption:"Table_caption__1OHev",thead:"Table_thead__1OMLY",tbody:"Table_tbody__28b1x"}},25:function(t,e,n){},28:function(t,e,n){t.exports={Home:"Home_Home__Hrybx",greeting__h2:"Home_greeting__h2__2ycdL"}},29:function(t,e,n){},39:function(t,e,n){t.exports={Loader:"Loader_Loader__17sQZ",load7:"Loader_load7__1OjZe"}},4:function(t,e,n){t.exports={Pagination:"Pagination_Pagination__13PUG",button:"Pagination_button__2hkWY",arrowButton:"Pagination_arrowButton__3tJVg"}},69:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=(n(29),n(12)),o=n(13),i=n(15),s=n(14),u=n(3),l=n(25),d=n.n(l),j=n(1),b=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={},r}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props.children;return Object(j.jsx)("div",{className:d.a.Layout,children:Object(j.jsx)("main",{className:d.a.main,children:t})})}}]),n}(a.a.Component),h=function(t){return t.children},p=n(10),f="FILL_TABLE",g="CLEAR_TABLE",O="ERR_404",m="ERR_404_GONE",_="VALID_INPUT",x="NOT_VALID_INPUT",v="LOAD_START",y="LOAD_SUCCESS",N="LOAD_FAILS",P="PAGINATION_INIT",k="PAGINATION_UPDATE",T="PAGINATION_RESET",A="INIT_TARGET_REPO_NAME",I="CLEAR_TARGET_REPO_NAME",R=n(38),S=n.n(R).a.create({baseURL:"https://api.github.com/"}),w=function(t){return{type:f,array:t}},L=function(){return{type:O}},C=function(){return{type:m}},V=function(){return{type:y}},E=function(){return{type:N}},M=function(){return{type:T}},B=function(t,e){return function(n){S.get(t).then((function(t){var r;n(V()),n(C()),n((r=t.headers.link,{type:P,strWithLinks:r})),n(function(t){return{type:A,targetRepoName:t,data:"test data"}}(e)),n(w(t.data))})).catch((function(t){n(E()),n(M()),void 0===t.response||404!==t.response.status&&-1===t.message.search("404")?console.log(t):n(L())}))}},H=function(t,e){return function(n){S.get(t).then((function(t){n(V()),n(C()),n(function(t){return{type:k,targetPage:t}}(e)),n(w(t.data))})).catch((function(t){n(E()),n(M()),void 0===t.response||404!==t.response.status&&-1===t.message.search("404")?(n({type:g}),n({type:I}),console.log(t)):n(L())}))}},J=n(17),U=n.n(J),D=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).submitHandler=function(t){t.preventDefault();var e=r.props,n=e.onSubmit,a=e.inputValid,c=e.notValidInput,o=e.loadStart,i=e.history,s=r.state,u=s.isValid,l=s.value;u?(o(),i.push("/results"),a(),n("repos/".concat(l,"/forks"),r.getTargetRepoName(l))):(c(),i.push("/results"))},r.handleChange=function(t){var e=r.checkValidity(t.target.value);r.setState({value:t.target.value,isTouched:!0,isValid:e})},r.checkValidity=function(t){var e=t.match(/^\/|\/.*\/| |[\u0430-\u044f\u0410-\u042f\u0451\u0401]|[:;?@&=+$,]|\/$/gi),n=t.match(/\//g);return!e&&!!n},r.getTargetRepoName=function(t){return t.substr(t.indexOf("/")+1)},r.state={value:"",isValid:!1,isTouched:!1},r}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.value,n=t.isValid,r=t.isTouched,a=[U.a.input];return r&&!n&&a.push(U.a.input__warn),Object(j.jsx)("form",{className:U.a.search,onSubmit:this.submitHandler,children:Object(j.jsxs)("label",{className:U.a.label,htmlFor:"searchRequest",children:[Object(j.jsx)("input",{id:"searchRequest",type:"text",className:a.join(" "),value:e,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u0432\u0438\u0434\u0430 owner/repositoryName",onChange:this.handleChange}),Object(j.jsx)("span",{className:U.a.label__hint,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u0432\u0438\u0434\u0430 owner/repositoryName"})]})})}}]),n}(a.a.Component),G=Object(u.g)(Object(p.b)(null,(function(t){return{onSubmit:function(e,n){return t(B(e,n))},inputValid:function(){return t({type:_})},notValidInput:function(){return t({type:x})},loadStart:function(){return t({type:v})}}}))(D)),F=n(28),q=n.n(F),z=function(){return Object(j.jsxs)(h,{children:[Object(j.jsxs)("div",{className:q.a.Home,children:[Object(j.jsx)("h2",{className:q.a.greeting__h2,children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 React (Forks)"}),Object(j.jsxs)("p",{children:["\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442",Object(j.jsx)("em",{children:" forks "}),"\u0432\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f."]}),Object(j.jsxs)("p",{children:["\u0414\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0438\u043c\u044f \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u0432\u0438\u0434\u0430",Object(j.jsx)("em",{children:" owner/repositoryName"}),"."]})]}),Object(j.jsx)(G,{})]})},W=n(19),Z=n.n(W),Y=Object(p.b)((function(t){return{array:t.table.array,targetRepoName:t.main.targetRepoName}}))((function(t){var e=t.array,n=t.targetRepoName,r=e;return r=Array.isArray(r)?r.map((function(t){var e,n,r,a=t.full_name?t.full_name:"\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",c=void 0!==t.stargazers_count?t.stargazers_count:"\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435";return t.owner?(e=t.owner.login,r=t.owner.login?t.owner.login:Math.random()+Math.random()):(e="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",r=Math.random()+Math.random()),n=t.html_url?t.html_url:"#",Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:e}),Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:n,children:n})})]},r)})):null,console.log(n),console.log(r),Object(j.jsxs)("table",{className:Z.a.Table,children:[Object(j.jsx)("caption",{className:Z.a.caption,children:"Forks \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f ".concat(n)}),Object(j.jsx)("thead",{className:Z.a.thead,children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u044f"}),Object(j.jsx)("th",{children:"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446"}),Object(j.jsx)("th",{children:"\u041a\u043e\u043b-\u0432\u043e \u0437\u0432\u0435\u0437\u0434"}),Object(j.jsx)("th",{children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u0439 \u0444\u043e\u0440\u043a\u0430"})]})}),Object(j.jsx)("tbody",{className:Z.a.tbody,children:r})]})})),$=n(39),Q=n.n($),X=function(){return Object(j.jsx)("div",{className:Q.a.Loader})},K=n(4),tt=n.n(K),et=Object(p.b)((function(t){return{totalPages:t.pagination.totalPages,link:t.pagination.link,currentPage:t.pagination.currentPage}}),(function(t){return{clickHandler:function(e,n){return t(H(e,n))}}}))((function(t){var e,n,r=t.show,a=t.totalPages,c=t.link,o=t.currentPage,i=t.clickHandler,s={fontStyle:"bold",transform:"scale(1.2)"};if(""!==c&&(n=function(t){return t.substring(t.indexOf("repositories"),t.indexOf("?page="))}(c)),r&&1!==a||(e=null),a>1&&a<=9&&(e=Object(j.jsx)("div",{className:tt.a.Pagination,children:Array(a).fill("").map((function(t,e){return Object(j.jsx)("button",{className:tt.a.button,type:"button",style:e===o-1?s:{},onClick:function(){return i("".concat(n,"?page=").concat(e+1),e+1)},children:e+1},Math.random())}))})),a>9&&o<=7&&(e=Object(j.jsxs)("div",{className:tt.a.Pagination,children:[Array(9).fill("").map((function(t,e){var r=e+1,c=function(){return i("".concat(n,"?page=").concat(e+1),e+1)};return 7===e&&(r="..."),8===e&&(r=a,c=function(){return i("".concat(n,"?page=").concat(a),a)}),Object(j.jsx)("button",{className:tt.a.button,type:"button",style:e===o-1?s:{},onClick:c,children:r},Math.random())})),Object(j.jsx)("button",{className:[tt.a.button,tt.a.arrowButton].join(" "),type:"button",onClick:function(){return i("".concat(n,"?page=").concat(o+1),o+1)},children:"Next"},Math.random())]})),a>9&&o>7&&o<=a-7){for(var u=[],l=o-4,d=l;d<l+9;d+=1)u.push(d);e=Object(j.jsxs)("div",{className:tt.a.Pagination,children:[Object(j.jsx)("button",{className:[tt.a.button,tt.a.arrowButton].join(" "),type:"button",onClick:function(){return i("".concat(n,"?page=").concat(o-1),o-1)},children:"Prev"},Math.random()),u.map((function(t,e){var r=t,c=function(){return i("".concat(n,"?page=").concat(t),t)};return 0===e&&(r="1",c=function(){return i("".concat(n,"?page=1"),1)}),1!==e&&7!==e||(r="..."),8===e&&(r=a,c=function(){return i("".concat(n,"?page=").concat(a),a)}),Object(j.jsx)("button",{className:tt.a.button,type:"button",style:t===o?s:{},onClick:c,children:r},Math.random())})),Object(j.jsx)("button",{className:[tt.a.button,tt.a.arrowButton].join(" "),type:"button",onClick:function(){return i("".concat(n,"?page=").concat(o+1),o+1)},children:"Next"},Math.random())]})}if(a>9&&o>7&&o>a-7){for(var b=[],h=a-9+1;h<=a;h+=1)b.push(h);e=Object(j.jsxs)("div",{className:tt.a.Pagination,children:[Object(j.jsx)("button",{className:[tt.a.button,tt.a.arrowButton].join(" "),type:"button",onClick:function(){return i("".concat(n,"?page=").concat(o-1),o-1)},children:"Prev"},Math.random()),b.map((function(t,e){var r=t,c=function(){return i("".concat(n,"?page=").concat(t),t)};return 0===e&&(r="1",c=function(){return i("".concat(n,"?page=1"),1)}),1===e&&(r="..."),8===e&&(r=a),Object(j.jsx)("button",{className:tt.a.button,type:"button",style:t===o?s:{},onClick:c,children:r},Math.random())}))]})}return e})),nt=Object(p.b)((function(t){return{error404:t.remoteIterations.error404,isInputValid:t.main.isInputValid,loading:t.main.loading}}))((function(t){var e,n=t.error404,r=t.isInputValid,a=t.loading,c=Object(j.jsxs)("div",{style:{margin:"auto",width:"50%",textAlign:"center"},children:[Object(j.jsx)("p",{style:{marginBottom:".5rem"},children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043d\u0430\u0439\u0442\u0438."}),Object(j.jsx)("p",{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f(\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f) \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u0434\u043e\u043f\u0443\u0449\u0435\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f(\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f)."})]}),o=Object(j.jsx)("p",{children:"\u041d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u0432\u0432\u043e\u0434"});return n&&r&&(e=Object(j.jsxs)(h,{children:[Object(j.jsx)(G,{}),c,Object(j.jsx)(et,{})]})),!n&&r&&(e=Object(j.jsxs)(h,{children:[Object(j.jsx)(G,{}),Object(j.jsx)(Y,{}),Object(j.jsx)(et,{})]})),r||(e=Object(j.jsxs)(h,{children:[Object(j.jsx)(G,{}),o,Object(j.jsx)(et,{})]})),a&&(e=Object(j.jsx)(X,{})),e})),rt=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={},r}return Object(o.a)(n,[{key:"render",value:function(){var t=Object(j.jsxs)(u.d,{children:[Object(j.jsx)(u.b,{exact:!0,path:"/",component:z}),Object(j.jsx)(u.b,{path:"/results",component:nt}),Object(j.jsx)(u.a,{to:"/"})]});return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{children:t})})}}]),n}(a.a.Component),at=n(21),ct=n.n(at),ot=n(22),it=n(16),st=n(40),ut=function(t){return JSON.parse(JSON.stringify(t))},lt={array:[]},dt=function(t,e){var n=ut(t);return n.array=e.array,n},jt=function(t){var e=ut(t);return e.array=[],e},bt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return dt(t,e);case g:return jt(t);default:return t}},ht={error404:!1},pt=function(t){return JSON.parse(JSON.stringify(t))},ft=function(t){var e=pt(t);return e.error404=!0,e},gt=function(t){var e=pt(t);return e.error404=!1,e},Ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return ft(t);case m:return gt(t);default:return t}},mt=function(t){return JSON.parse(JSON.stringify(t))},_t={isInputValid:!0,loading:!1,targetRepoName:""},xt=function(t){var e=mt(t);return e.isInputValid=!0,e},vt=function(t){var e=mt(t);return e.isInputValid=!1,e},yt=function(t){var e=mt(t);return e.loading=!0,e},Nt=function(t){var e=mt(t);return e.loading=!1,e},Pt=function(t){var e=mt(t);return e.loading=!1,e},kt=function(t,e){var n=mt(t),r=e.targetRepoName;return n.targetRepoName=r,n},Tt=function(t){var e=mt(t);return e.targetRepoName="",e},At=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return xt(t);case x:return vt(t);case v:return yt(t);case y:return Nt(t);case N:return Pt(t);case A:return kt(t,e);case I:return Tt(t);default:return t}},It={totalPages:1,link:"",currentPage:1},Rt=function(t){return JSON.parse(JSON.stringify(t))},St=function(t,e){var n=e.strWithLinks,r=Rt(t);if(n){var a=n.match(/http[^<>]*/gi)[1],c=Number(a.substring(a.indexOf("?page=")+6));r.link=a,r.totalPages=c}else r.totalPages=1,r.link="";return r.currentPage=1,r},wt=function(t,e){var n=Rt(t);return n.currentPage=e.targetPage,n},Lt=function(t){var e=Rt(t);return e.totalPages=1,e.link="",e.targetPage=1,e},Ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P:return St(t,e);case k:return wt(t,e);case T:return Lt(t);default:return t}},Vt=Object(it.b)({table:bt,remoteIterations:Ot,main:At,pagination:Ct}),Et=Object(it.d)(Vt,Object(it.c)(Object(it.a)(st.a))),Mt=Object(j.jsx)(p.a,{store:Et,children:Object(j.jsx)(ot.a,{children:Object(j.jsx)(rt,{})})});ct.a.render(Mt,document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.71e0e771.chunk.js.map