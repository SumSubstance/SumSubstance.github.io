(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(t,e,n){},236:function(t,e,n){"use strict";var o=n(162);n.n(o).a},241:function(t,e,n){"use strict";n.r(e);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,e){return t(e={exports:{}},e.exports),e.exports}var a=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e},l=i((function(t,e){!function(t,e){var n,o=(n=e)&&n.__esModule?n:{default:n},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a}(t,a)}));function c(){}r(l),c.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}};var s=c,u=i((function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}})),f=(u.node,u.nodeList,u.string,u.fn,9);if("undefined"!=typeof Element&&!Element.prototype.matches){var d=Element.prototype;d.matches=d.matchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector||d.webkitMatchesSelector}var h=function(t,e){for(;t&&t.nodeType!==f;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}};function p(t,e,n,o,r){var i=y.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}function y(t,e,n,o){return function(n){n.delegateTarget=h(n.target,e),n.delegateTarget&&o.call(t,n)}}var m=function(t,e,n,o,r){return"function"==typeof t.addEventListener?p.apply(null,arguments):"function"==typeof n?p.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return p(t,e,n,o,r)})))};var v=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!u.string(e))throw new TypeError("Second argument must be a String");if(!u.fn(n))throw new TypeError("Third argument must be a Function");if(u.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(u.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(u.string(t))return function(t,e,n){return m(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")},b=r(i((function(t,e){!function(t,e,n,o){var r=l(e),i=l(n),a=l(o);function l(t){return t&&t.__esModule?t:{default:t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),s(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===c(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return f("action",t)}},{key:"defaultTarget",value:function(t){var e=f("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return f("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(i.default);function f(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=u}(t,l,s,v)})));if(!b)throw new Error("[vue-clipboards] cannot locate Clipboard.");function g(t){return"object"===o(window.HTMLElement)?t instanceof window.HTMLElement:t&&"object"===o(t)&&1===t.nodeType&&"string"==typeof t.nodeName}function k(t){var e=t.target;if(document.createRange){var n=document.createRange(),o=window.getSelection();n.selectNode(e),o.removeAllRanges(),o.addRange(n)}else{var r=document.body.createTextRange();r.moveToElementText(e),r.select()}}var w={bind:function(t,e,n){return new Promise((function(r,i){var a,l,c,s,u,f,d,h,p;if(a=e.value,l=e.modifiers,c={},s=null,a&&"function"==typeof a)return Promise.resolve(a()).then(function(t){try{return a=t,y.call(this)}catch(t){return i(t)}}.bind(this),i);function y(){return/(string|number)/.test(o(a))?(c.text=function(){return"".concat(a)},n.data.attrs&&n.data.attrs.model&&(s=g(n.data.attrs.model)?n.data.attrs.model:document.querySelector(n.data.attrs.model)),n.elm.offsetParent?c.container=n.elm.offsetParent:g(s)?c.container=s:c.container=t.parentElement||document.body,n.elm.$clipboards=new b(t,c),u=n.componentOptions,f=n.data,d=u?u.listeners:null,h=f?f.on:null,(p=d&&d||h&&h)&&"object"===o(p)&&Object.keys(p).length&&Object.keys(p).map((function(t){return n.elm.$clipboards.on(t,p[t].fn||p[t].fns)})),(l.nselect||!1)&&n.elm.addEventListener("dblclick",k),r(n.elm.$clipboards)):i(new Error("[vue-clipboards] Invalid value. Please use a valid value."))}return y.call(this)}))},unbind:function(t){t.elm&&t.elm.$clipboards&&t.elm.$clipboards.destroy&&(t.elm.$clipboards.destroy(),t.elm.removeEventListener("dblclick",k),delete t.elm.$clipboards)},update:function(t,e,n){e.def.unbind(n),n.elm.removeEventListener("dblclick",k),e.def.bind(t,e,n)}};var E={name:"CodeBlock",directives:{clipboard:w},props:{tabs:{type:Array,default:function(){return[]}}},data:function(){return{collapsed:!0,activeTabIndex:-1,text:""}},computed:{toggleButtonText:function(){return this.collapsed?"Show all":"Show less"}},mounted:function(){this.checkCodeBlockHeight(),this.saveCodeBlock(),this.tabs.length>0&&this.setActiveTab(0)},methods:{toggle:function(){this.collapsed=!this.collapsed},saveCodeBlock:function(){this.text=this.$el.querySelector('pre[class*="language-"]').innerText},checkCodeBlockHeight:function(){if(this.$refs.block){var t=this.$refs.block.querySelector('pre[class*="language-"]');t&&t.offsetHeight<=300&&(this.collapsed=!1)}},setActiveTab:function(t){this.activeTabIndex=t;for(var e=this.$refs.block.querySelectorAll(".extra-class"),n=0;n<e.length;n++){var o="none";n===this.activeTabIndex&&(o="block",this.text=e[n].innerText),e[n].style.display=o}}}},T=(n(236),n(16)),x=Object(T.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-block-container",class:{"with-tabs":t.tabs.length>0}},[t.tabs.length>0?n("div",{staticClass:"tabs"},t._l(t.tabs,(function(e,o){return n("a",{class:{active:o===t.activeTabIndex},on:{click:function(e){return e.preventDefault(),t.setActiveTab(o)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e(),t._v(" "),n("div",{ref:"block",staticClass:"code-block",class:{collapsed:t.collapsed}},[n("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.text,expression:"text"}],staticClass:"copy"},[t._v("Copy")]),t._v(" "),n("div",{staticClass:"gradient"}),t._v(" "),t._t("default")],2),t._v(" "),t.collapsed?n("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.toggle}},[t._v("\n    "+t._s(t.toggleButtonText)+"\n  ")]):t._e()])}),[],!1,null,"5e6d060f",null);e.default=x.exports}}]);