(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"ContactForm_form__27y1P"}},12:function(t,e,n){t.exports={contact:"ContactsList_contact__1aCfJ"}},13:function(t,e,n){t.exports={input:"FilterContacts_input__3_xlD"}},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(10),i=n.n(o),s=(n(21),n(14)),l=n(2),u=n(3),h=n(6),d=n(5),m=n(4),f=n(23),p=n(11),b=n.n(p),j={name:"",phone:""},v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=j,t.handleChangeForm=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.phone,r=t.props.onAdd;t.validateForm()&&(r({id:Object(f.a)(),name:a,phone:c}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.phone,c=t.props.onCheckUnique;return n&&a?c(n):(alert("Please, enter both fields"),!1)},t.resetForm=function(){return t.setState(j)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(a.jsxs)("form",{className:b.a.form,onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Enter name",value:e,onChange:this.handleChangeForm}),Object(a.jsx)("input",{type:"tel",name:"phone",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),C=n(9),O=n(12),g=n.n(O),x=function(t){var e=t.id,n=t.name,c=t.phone,r=t.onRemove;return Object(a.jsxs)("li",{className:g.a.contact,children:[n,": ",c," ",Object(a.jsx)("button",{onClick:function(){return r(e)},children:"Delete"})]})},S=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)(x,Object(C.a)(Object(C.a)({},t),{},{onRemove:n}),Object(f.a)())}))})},F=n(13),y=n.n(F),_=function(t){var e=t.filter,n=t.onChange;return Object(a.jsx)("input",{className:y.a.input,type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Search contact"})},A=n(7),k=n.n(A),N=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.handleCheckUniqueName=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact is already exist"),!n},t.handleRemoveContacts=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("contacts")&&this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)("div",{className:k.a.container,children:[Object(a.jsx)("h2",{className:k.a.title,children:"Contact form"}),Object(a.jsx)(v,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUniqueName}),Object(a.jsx)("h2",{className:k.a.title,children:"Contact list"}),Object(a.jsx)(_,{filter:t,onChange:this.handleFilterChange}),Object(a.jsx)(S,{contacts:e,onRemove:this.handleRemoveContacts})]})}}]),n}(c.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),w()},7:function(t,e,n){t.exports={container:"App_container__1f4WH",title:"App_title__TRHh-"}}},[[22,1,2]]]);
//# sourceMappingURL=main.8383f62f.chunk.js.map