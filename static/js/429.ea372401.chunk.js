(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[429],{429:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var r=n(4270),a=n(9439),s=n(2791),o=n(3402),c=function(t){return t.contacts.contacts.filter((function(e){return e.name.toLowerCase().includes(t.contacts.query)}))},i=function(t){return t.contacts.contacts},u=function(t){return t.contacts.isLoading},l=n(9434),f=n(9608),h="CreateContact_box__QrTkp",d="CreateContact_form__7VGfr",p="CreateContact_label__gy2x-",m="CreateContact_input__voVK3",x="CreateContact_btn__1aUL8",_=n(3329),v=n(6429);function g(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],r=e[1],c=(0,s.useState)(""),u=(0,a.Z)(c,2),g=u[0],b=u[1],C=(0,l.I0)(),w=(0,l.v9)(i),j=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":b(a);break;default:return}},N=function(){r(""),b("")};return(0,_.jsx)("div",{className:h,children:(0,_.jsxs)("form",{className:d,onSubmit:function(t){t.preventDefault();var e={id:v.generate(),name:n,number:g},r=e.name.toLowerCase(),a=w.find((function(t){return t.name.toLowerCase()===r}));a?o.ZP.success("".concat(e.name," is already in contacts")):C((0,f.el)(e)),N()},children:[(0,_.jsx)("h3",{className:p,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430"}),(0,_.jsx)("input",{className:m,text:"text",name:"name",placeholder:"\u0406\u043c\u02bc\u044f",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,_.jsx)("input",{className:m,placeholder:"\u041d\u043e\u043c\u0435\u0440 ",type:"tel",value:g,onChange:j,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,_.jsx)("button",{className:x,type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})})}var b="ContactsList_box__dyLS3",C="ContactsList_list__M1r-e",w="ContactsList_item__rV9wQ",j="ContactsList_text__hZwjO",N="ContactsList_btn__vWCOl",y=function(){var t=(0,l.v9)(c),e=(0,l.I0)(),n=function(t){e((0,f._f)(t.target.dataset.id))};return(0,_.jsx)("div",{className:b,children:(0,_.jsx)("ul",{className:C,children:t.map((function(t){var e=t.id,r=t.name,a=t.number;return(0,_.jsxs)("li",{className:w,children:[(0,_.jsx)("p",{className:j,children:"".concat(r," : ").concat(a)}),(0,_.jsx)("button",{className:N,onClick:n,type:"button","data-id":e,children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},e)}))})})},k=n(3034),L="Filter_box__d3XyP",V="Filter_form__wVnxJ",M="Filter_label__vEd1E",q="Filter_input__N7T3z",F=function(){var t=(0,l.I0)();return(0,_.jsx)("div",{className:L,children:(0,_.jsxs)("form",{className:V,children:[(0,_.jsx)("h2",{className:M,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442"}),(0,_.jsx)("h3",{className:M,children:"\u0417\u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),(0,_.jsx)("input",{type:"text",className:q,name:"filter",placeholder:"\u0417\u043d\u0430\u0439\u0442\u0438",onChange:function(e){return n=e.target.value,void t((0,k._)(n));var n}})]})})},Z=function(){var t=(0,l.I0)(),e=(0,l.v9)(u);return(0,s.useEffect)((function(){t((0,f.yF)())}),[t]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r.q,{children:(0,_.jsx)("title",{children:"Phonebook"})}),(0,_.jsx)(g,{}),(0,_.jsx)(F,{}),(0,_.jsx)("div",{children:e&&"Request in progress..."}),(0,_.jsx)(y,{})]})}},6429:function(t,e,n){"use strict";t.exports=n(5274)},8857:function(t,e,n){"use strict";var r,a,s,o=n(5408),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){s=!1}function u(t){if(t){if(t!==r){if(t.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==c&&(r=c,i())}function l(){return s||(s=function(){r||u(c);for(var t,e=r.split(""),n=[],a=o.nextValue();e.length>0;)a=o.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||c},characters:function(t){return u(t),r},seed:function(t){o.seed(t),a!==t&&(i(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},7098:function(t,e,n){"use strict";var r,a,s=n(2226);n(8857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=s(7),e+=s(t),r>0&&(e+=s(r)),e+=s(n)}},2226:function(t,e,n){"use strict";var r=n(8857),a=n(9139),s=n(2483);t.exports=function(t){for(var e,n=0,o="";!e;)o+=s(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return o}},5274:function(t,e,n){"use strict";var r=n(8857),a=n(7098),s=n(6046),o=n(5347)||0;function c(){return a(o)}t.exports=c,t.exports.generate=c,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return o=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=s},6046:function(t,e,n){"use strict";var r=n(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},5408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),s="";;)for(var o=t(a),c=a;c--;)if((s+=e[o[c]&r]||"").length===+n)return s}}}]);
//# sourceMappingURL=429.ea372401.chunk.js.map