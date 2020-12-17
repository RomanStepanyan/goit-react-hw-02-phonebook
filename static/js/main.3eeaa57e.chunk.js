(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"ContactForm_form__27y1P"}},12:function(t,e,n){t.exports={contact:"ContactsList_contact__1aCfJ"}},13:function(t,e,n){t.exports={input:"FilterContacts_input__3_xlD"}},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(10),i=n.n(r),s=(n(21),n(14)),l=n(2),u=n(3),h=n(6),m=n(5),d=n(4),f=n(23),p=n(11),b=n.n(p),j={name:"",phone:""},v=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=j,t.handleChangeForm=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.phone,o=t.props.onAdd;t.validateForm()&&(o({id:Object(f.a)(),name:a,phone:c}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.phone,c=t.props.onCheckUnique;return n&&a?c(n):(alert("Please, enter both fields"),!1)},t.resetForm=function(){return t.setState(j)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(a.jsxs)("form",{className:b.a.form,onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm}),Object(a.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),C=n(9),g=n(12),O=n.n(g),x=function(t){var e=t.id,n=t.name,c=t.phone,o=t.onRemove;return Object(a.jsxs)("li",{className:O.a.contact,children:[n,": ",c," ",Object(a.jsx)("button",{onClick:function(){return o(e)},children:"Delete"})]})},S=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)(x,Object(C.a)(Object(C.a)({},t),{},{onRemove:n}),Object(f.a)())}))})},F=n(13),y=n.n(F),_=function(t){var e=t.filter,n=t.onChange;return Object(a.jsx)("input",{className:y.a.input,type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Search contact"})},k=n(7),A=n.n(k),N=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.handleCheckUniqueName=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact is already exist"),!n},t.handleRemoveContacts=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("contacts")&&this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})}},{key:"componentDidUpdate",value:function(t,e){console.log(e),console.log(this.state),this.state.contacts!==e.contacts&&(console.log("state changed"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)("div",{className:A.a.container,children:[Object(a.jsx)("h2",{className:A.a.title,children:"Contact form"}),Object(a.jsx)(v,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUniqueName}),Object(a.jsx)("h2",{className:A.a.title,children:"Contact list"}),Object(a.jsx)(_,{filter:t,onChange:this.handleFilterChange}),Object(a.jsx)(S,{contacts:e,onRemove:this.handleRemoveContacts})]})}}]),n}(c.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),w()},7:function(t,e,n){t.exports={container:"App_container__1f4WH",title:"App_title__TRHh-"}}},[[22,1,2]]]);
//# sourceMappingURL=main.3eeaa57e.chunk.js.map