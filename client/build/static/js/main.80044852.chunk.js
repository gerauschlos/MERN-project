(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),l=a.n(o),s=a(84),c=a(3),i=a(14),u=a(36),m=a.n(u),p=a(37),d=a(86),h=a(85),v=a(4),E=a(5),f=a(7),b=a(6),g=a(8),y=a(17),O=a.n(y),k=a(83),_=a(38),w=a.n(_);var j=Object(c.b)(function(e){return{user:e.user}})(function(e){var t=e.user,a=[{type:"navItem",icon:"home",text:"Home",link:"/",restricted:!1},{type:"navItem",icon:"file-text-o",text:"My Profile",link:"/user",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Add Admins",link:"/user/register",restricted:!0},{type:"navItem",icon:"sign-in",text:"Login",link:"/login",restricted:!1,exclude:!0},{type:"navItem",icon:"file-text-o",text:"My reviews",link:"/user/user-reviews",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Add reviews",link:"/user/add",restricted:!0},{type:"navItem",icon:"sign-out",text:"Logout",link:"/user/logout",restricted:!0}],n=function(e,t){return r.a.createElement("div",{key:t,className:e.type},r.a.createElement(k.a,{to:e.link},r.a.createElement(O.a,{name:e.icon}),e.text))};return r.a.createElement("div",null,t.login?a.map(function(e,a){return t.login.isAuth?e.exclude?null:n(e,a):e.restricted?null:n(e,a)}):null)}),N=function(e){return r.a.createElement(w.a,{showNav:e.showNav,onHideNav:e.onHideNav,navStyle:{background:"#242424",maxWidth:"220px"}},r.a.createElement(j,null))},I=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={showNav:!1},a.onHideNav=function(){a.setState({showNav:!1})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("header",null,r.a.createElement("div",{className:"open_nav"},r.a.createElement(O.a,{name:"bars",onClick:function(){return e.setState({showNav:!0})},style:{color:"#fff",padding:"10px",cursor:"pointer"}})),r.a.createElement(N,{showNav:this.state.showNav,onHideNav:function(){return e.onHideNav()}}),r.a.createElement(k.a,{to:"/",className:"logo"},"The Book Shelf"))}}]),t}(n.Component),S=function(e){return r.a.createElement("div",null,r.a.createElement(I,null),e.children)},R=a(16),x=a(11),C=a.n(x);function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return{type:"GET_BOOKS",payload:C.a.get("http://localhost:3001/api/books?limit=".concat(e,"\n  &skip=").concat(t,"&order=").concat(a)).then(function(e){return n?Object(R.a)(n).concat(Object(R.a)(e.data)):Object(R.a)(e.data)})}}var B=function(e,t){var a=function(a){function n(){var e,t;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0},t}return Object(g.a)(n,a),Object(E.a)(n,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"USER_AUTH",payload:C.a.get("/api/auth").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.user.login.isAuth?!1===t&&this.props.history.push("/user"):t&&this.props.history.push("/login")}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"loader"},"Loading..."):r.a.createElement(e,Object.assign({},this.props,{user:this.props.user}))}}]),n}(n.Component);return Object(c.b)(function(e){return{user:e.user}})(a)},P=function(e){return r.a.createElement(k.a,{to:"/books/".concat(e._id),className:"book_item"},r.a.createElement("div",{className:"book_header"},r.a.createElement("h2",null,e.name)),r.a.createElement("div",{className:"book_items"},r.a.createElement("div",{className:"book_author"},e.author),r.a.createElement("div",{className:"book_bubble"},r.a.createElement("strong",null,"Price:")," ",e.price,"\u20ac"),r.a.createElement("div",{className:"book_bubble"},r.a.createElement("strong",null,"Pages: "),e.pages),r.a.createElement("div",{className:"book_bubble rating"},r.a.createElement("strong",null,"Rating : "),e.rating)))},W=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).renderItems=function(e){return e.list?e.list.map(function(e){return r.a.createElement(P,Object.assign({},e,{key:e._id}))}):null},a.loadmore=function(){var e=a.props.books.list.length;a.props.dispatch(A(1,e,"desc",a.props.books.list))},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(A(1,0,"desc"))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderItems(this.props.books),r.a.createElement("div",{className:"loadmore",onClick:this.loadmore},"Load More"))}}]),t}(n.Component);var D=Object(c.b)(function(e){return{books:e.books}})(W),T=function(){return r.a.createElement("div",null,r.a.createElement(D,null))},U=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).renderBook=function(e){return e.book?r.a.createElement("div",{className:"br_container"},r.a.createElement("div",{className:"br_header"},r.a.createElement("h2",null,e.book.name),r.a.createElement("h5",null,e.book.author),r.a.createElement("div",{className:"br_reviewer"},r.a.createElement("span",null,"Review by:")," ",e.reviewer.name," ",e.reviewer.lastname)),r.a.createElement("div",{className:"br_review"},e.book.review),r.a.createElement("div",{className:"br_box"},r.a.createElement("div",{className:"left"},r.a.createElement("div",null,r.a.createElement("span",null,"Pages: "),e.book.pages),r.a.createElement("div",null,r.a.createElement("span",null,"Price: "),e.book.price,"\u20ac")),r.a.createElement("div",{className:"right"},r.a.createElement("div",null,r.a.createElement("span",null,"Rating: "),e.book.rating,"/5")))):null},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(function(e){var t=C.a.get("/api/getBook?id=".concat(e));return function(e){t.then(function(t){var a=t.data;C.a.get("/api/getReviewer?id=".concat(a.OwnerID)).then(function(t){var n=t.data;e({type:"GET_BOOK_W_REVIEWER",payload:{book:a,reviewer:n}})})})}}(this.props.match.params.id))}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK_W_REVIEWER",payload:{book:{},reviewer:{}}})}},{key:"render",value:function(){var e=this.props.books;return r.a.createElement("div",null,this.renderBook(e))}}]),t}(n.Component);var L=Object(c.b)(function(e){return{books:e.books}})(U),K=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:"",success:!1},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputpassword=function(e){a.setState({password:e.target.value})},a.submitForm=function(e){e.preventDefault(),a.props.dispatch(function(e){var t=e.email,a=e.password;return{type:"USER_LOGIN",payload:C.a.post("/api/login",{email:t,password:a}).then(function(e){return e.data})}}(a.state))},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.user.login.isAuth&&this.props.history.push("/user")}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"rl_container"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Log in here"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"email",placeholder:"Enter your mail",value:this.state.email,onChange:this.handleInputEmail})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"Enter your password",value:this.state.password,onChange:this.handleInputpassword})),r.a.createElement("button",{type:"submit"},"Log in"),r.a.createElement("div",{className:"error"},e.login?r.a.createElement("div",null,e.login.message):null)))}}]),t}(n.Component);var G=Object(c.b)(function(e){return{user:e.user}})(K),M=function(e){var t=e.user.login;return r.a.createElement("div",{className:"user_container"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{alt:"avatar",src:"/images/avatar.png"})),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,r.a.createElement("span",null,"Name: ")," ",t.name),r.a.createElement("div",null,r.a.createElement("span",null,"Lastname: ")," ",t.lastname),r.a.createElement("div",null,r.a.createElement("span",null,"Email: ")," ",t.email)))},F=a(2),H=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={formdata:{name:"",author:"",review:"",pages:"",rating:"",price:""}},a.handleInput=function(e,t){var n=Object(F.a)({},a.state.formdata);n[t]=e.target.value,a.setState({formdata:n})},a.submitForm=function(e){var t;e.preventDefault(),a.props.dispatch((t=Object(F.a)({},a.state.formdata,{OwnerID:a.props.user.login.id}),console.log(t),{type:"ADD_BOOK",payload:C.a.post("/api/book",t).then(function(e){return e.data})}))},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_NEW_BOOK",payload:{}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"rl_container article"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Add a review"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter name",value:this.state.formdata.name,onChange:function(t){return e.handleInput(t,"name")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter the author",value:this.state.formdata.author,onChange:function(t){return e.handleInput(t,"author")}})),r.a.createElement("textarea",{value:this.state.formdata.review,placeholder:"Write the review",onChange:function(t){return e.handleInput(t,"review")}}),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"number",placeholder:"Enter the pages",value:this.state.formdata.pages,onChange:function(t){return e.handleInput(t,"pages")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("select",{value:this.state.formdata.rating,onChange:function(t){return e.handleInput(t,"rating")}}," ",r.a.createElement("option",{val:"1"},"1"),r.a.createElement("option",{val:"2"},"2"),r.a.createElement("option",{val:"3"},"3"),r.a.createElement("option",{val:"4"},"4"),r.a.createElement("option",{val:"5"},"5"))),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"number",placeholder:"Enter the Price",value:this.state.formdata.price,onChange:function(t){return e.handleInput(t,"price")}})),r.a.createElement("button",{type:"submit"},"Add Review")))}}]),t}(n.Component);var V=Object(c.b)(function(e){return{books:e.books}})(H),Y=a(39),J=a.n(Y),q=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).showUserPosts=function(e){return e.userPosts?e.userPosts.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement(k.a,{to:"/user/edit-posts/".concat(e._id)},e.name)),r.a.createElement("td",null,e.author),r.a.createElement("td",null,J()(e.createdAt).format("DD/MM/YY")))}):null},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e;this.props.dispatch((e=this.props.user.login.id,{type:"GET_USER_POSTS",payload:C.a.get("/api/user_posts?user=".concat(e)).then(function(e){return e.data})}))}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"user_posts"},r.a.createElement("h4",null,"Your reviews:"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,this.showUserPosts(e))))}}]),t}(n.Component);var z=Object(c.b)(function(e){return{user:e.user}})(q),Q=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={formdata:{_id:a.props.match.params.id,name:"",author:"",review:"",pages:"",rating:"",price:""}},a.handleInput=function(e,t){var n=Object(F.a)({},a.state.formdata);n[t]=e.target.value,a.setState({formdata:n})},a.submitForm=function(e){var t;e.preventDefault(),a.props.dispatch((t=a.state.formdata,{type:"UPDATE_BOOK",payload:C.a.post("/api/book_update",t).then(function(e){return e.data})}))},a.deletePost=function(){var e;a.props.dispatch((e=a.props.match.params.id,{type:"DELETE_BOOK",payload:C.a.delete("/api/delete_book?id=".concat(e)).then(function(e){return e.data})}))},a.redirectUser=function(){setTimeout(function(){a.props.history.push("/user/user-reviews")},1e3)},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e;this.props.dispatch((e=this.props.match.params.id,{type:"GET_BOOK",payload:C.a.get("/api/getBook?id=".concat(e)).then(function(e){return e.data})}))}},{key:"componentWillReceiveProps",value:function(e){var t=e.books.book;this.setState({formdata:{_id:t._id,name:t.name,author:t.author,review:t.review,pages:t.pages,rating:t.rating,price:t.price}})}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK",payload:{book:null,updateBook:!1,postDeleted:!1}})}},{key:"render",value:function(){var e=this,t=this.props.books;return r.a.createElement("div",{className:"rl_container article"},t.updateBook?r.a.createElement("div",{className:"edit_confirm"},"post updates,"," ",r.a.createElement(k.a,{to:"/books/".concat(t.book._id)},"click here to see the book")):null,t.postDeleted?r.a.createElement("div",{className:"red_tag"},"Review Deleted",this.redirectUser()):null,r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Edit review"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter name",value:this.state.formdata.name,onChange:function(t){return e.handleInput(t,"name")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter the author",value:this.state.formdata.author,onChange:function(t){return e.handleInput(t,"author")}})),r.a.createElement("textarea",{value:this.state.formdata.review,placeholder:"Write the review",onChange:function(t){return e.handleInput(t,"review")}}),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"number",placeholder:"Enter the pages",value:this.state.formdata.pages,onChange:function(t){return e.handleInput(t,"pages")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("select",{value:this.state.formdata.rating,onChange:function(t){return e.handleInput(t,"rating")}}," ",r.a.createElement("option",{val:"1"},"1"),r.a.createElement("option",{val:"2"},"2"),r.a.createElement("option",{val:"3"},"3"),r.a.createElement("option",{val:"4"},"4"),r.a.createElement("option",{val:"5"},"5"))),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"number",placeholder:"Enter the Price",value:this.state.formdata.price,onChange:function(t){return e.handleInput(t,"price")}})),r.a.createElement("button",{type:"submit"},"Edit Review"),r.a.createElement("div",{className:"delete_post"},r.a.createElement("div",{className:"button",onClick:this.deletePost},"Delete review"))))}}]),t}(n.PureComponent);var X=Object(c.b)(function(e){return{books:e.books}})(Q),Z=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",lastname:"",email:"",password:"",error:""},a.showUsers=function(e){return e.users?e.users.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.lastname),r.a.createElement("td",null,e.email))}):null},a.handlenInputEmail=function(e){a.setState({email:e.target.value})},a.handlenInputPassword=function(e){a.setState({password:e.target.value})},a.handlenInputName=function(e){a.setState({name:e.target.value})},a.handlenInputLastname=function(e){a.setState({lastname:e.target.value})},a.submitForm=function(e){e.preventDefault(),a.setState({error:""}),console.log(a.state),a.props.dispatch(function(e,t){var a=C.a.post("/api/register",e);return function(e){return a.then(function(a){var n=a.data,r=n.success?Object(R.a)(t).concat([n.user]):t,o={success:n.success,users:r};e({type:"USER_REGISTER",payload:o})})}}({email:a.state.email,password:a.state.password,name:a.state.name,lastname:a.state.lastname},a.props.user.users))},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"GET_USER",payload:C.a.get("/api/users").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e){!1===e.user.register?this.setState({error:"Error, try again"}):this.setState({name:"",lastname:"",email:"",password:""})}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"rl_container"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Add user"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter name",value:this.state.name,onChange:this.handlenInputName})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter lastname",value:this.state.lastname,onChange:this.handlenInputLastname})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter email",value:this.state.email,onChange:this.handlenInputEmail})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"Enter password",value:this.state.password,onChange:this.handlenInputPassword})),r.a.createElement("button",{type:"Submit"},"Add admin"),r.a.createElement("div",{className:"error"},this.state.error)),r.a.createElement("div",{className:"current_users"},r.a.createElement("h4",null,"Current users"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"LastName"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,this.showUsers(e)))))}}]),t}(n.PureComponent);var $=Object(c.b)(function(e){return{user:e.user}})(Z),ee=function(e){C.a.get("/api/logout").then(function(t){setTimeout(function(){e.history.push("/")},2e3)});return r.a.createElement("div",{className:"logout_container"},r.a.createElement("h1",null,"You are being logged-out"))},te=function(){return r.a.createElement(S,null,r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:B(T,null)}),r.a.createElement(h.a,{path:"/login",exact:!0,component:B(G,!1)}),r.a.createElement(h.a,{path:"/user/logout",exact:!0,component:B(ee,!0)}),r.a.createElement(h.a,{path:"/user",exact:!0,component:B(M,!0)}),r.a.createElement(h.a,{path:"/user/add",exact:!0,component:B(V,!0)}),r.a.createElement(h.a,{path:"/user/register",exact:!0,component:B($,!0)}),r.a.createElement(h.a,{path:"/user/edit-posts/:id",exact:!0,component:B(X,!0)}),r.a.createElement(h.a,{path:"/books/:id",exact:!0,component:B(L)}),r.a.createElement(h.a,{path:"/user/user-reviews",exact:!0,component:B(z,!0)})))},ae=Object(i.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS":return Object(F.a)({},e,{list:t.payload});case"GET_BOOK":return Object(F.a)({},e,{book:t.payload});case"GET_BOOK_W_REVIEWER":case"CLEAR_BOOK_W_REVIEWER":return Object(F.a)({},e,{book:t.payload.book,reviewer:t.payload.reviewer});case"ADD_BOOK":case"CLEAR_NEW_BOOK":return Object(F.a)({},e,{newbook:t.payload});case"UPDATE_BOOK":return Object(F.a)({},e,{updateBook:t.payload.success,book:t.payload.doc});case"DELETE_BOOK":return Object(F.a)({},e,{postDeleted:t.payload});case"CLEAR_BOOK":return Object(F.a)({},e,{book:t.payload,updateBook:t.payload.updateBook,postDeleted:t.payload.postDeleted});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":case"USER_AUTH":return Object(F.a)({},e,{login:t.payload});case"GET_USER_POSTS":return Object(F.a)({},e,{userPosts:t.payload});case"GET_USER":return Object(F.a)({},e,{users:t.payload});case"USER_REGISTER":return Object(F.a)({},e,{register:t.payload.success,users:t.payload.users});default:return e}}}),ne=Object(i.a)(m.a,p.a)(i.d);l.a.render(r.a.createElement(c.a,{store:ne(ae)},r.a.createElement(s.a,null,r.a.createElement(te,null))),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.80044852.chunk.js.map