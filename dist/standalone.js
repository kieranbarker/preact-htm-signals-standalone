var t,n,e,_,i,r,o={},u=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(t,n){for(var e in n)t[e]=n[e];return t}function l(t){var n=t.parentNode;n&&n.removeChild(t)}function c(n,e,_){var i,r,o,u={};for(o in e)"key"==o?i=e[o]:"ref"==o?r=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):_),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===u[o]&&(u[o]=n.defaultProps[o]);return a(n,u,i,r,null)}function a(t,_,i,r,o){var u={type:t,props:_,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e:o};return null==o&&null!=n.vnode&&n.vnode(u),u}function h(){return{current:null}}function v(t){return t.children}function p(t,n){this.props=t,this.context=n}function d(t,n){if(null==n)return t.__?d(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?d(t):null}function y(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return y(t)}}function m(t){(!t.__d&&(t.__d=!0)&&_.push(t)&&!g.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||setTimeout)(g)}function g(){for(var t;g.__r=_.length;)t=_.sort(function(t,n){return t.__v.__b-n.__v.__b}),_=[],t.some(function(t){var n,e,_,i,r,o;t.__d&&(r=(i=(n=t).__v).__e,(o=n.__P)&&(e=[],(_=s({},i)).__v=i.__v+1,E(o,i,_,n.__n,void 0!==o.ownerSVGElement,null!=i.__h?[r]:null,e,null==r?d(i):r,i.__h),U(e,i),i.__e!=r&&y(i)))})}function b(t,n,e,_,i,r,f,s,l,c){var h,p,y,m,g,b,x,C=_&&_.__k||u,w=C.length;for(e.__k=[],h=0;h<n.length;h++)if(null!=(m=e.__k[h]=null==(m=n[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?a(null,m,null,null,m):Array.isArray(m)?a(v,{children:m},null,null,null):m.__b>0?a(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)){if(m.__=e,m.__b=e.__b+1,null===(y=C[h])||y&&m.key==y.key&&m.type===y.type)C[h]=void 0;else for(p=0;p<w;p++){if((y=C[p])&&m.key==y.key&&m.type===y.type){C[p]=void 0;break}y=null}E(t,m,y=y||o,i,r,f,s,l,c),g=m.__e,(p=m.ref)&&y.ref!=p&&(x||(x=[]),y.ref&&x.push(y.ref,null,m),x.push(p,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===y.__k?m.__d=l=k(m,l,t):l=S(t,m,y,C,g,l),"function"==typeof e.type&&(e.__d=l)):l&&y.__e==l&&l.parentNode!=t&&(l=d(y))}for(e.__e=b,h=w;h--;)null!=C[h]&&("function"==typeof e.type&&null!=C[h].__e&&C[h].__e==e.__d&&(e.__d=d(_,h+1)),D(C[h],C[h]));if(x)for(h=0;h<x.length;h++)P(x[h],x[++h],x[++h])}function k(t,n,e){for(var _,i=t.__k,r=0;i&&r<i.length;r++)(_=i[r])&&(_.__=t,n="function"==typeof _.type?k(_,n,e):S(e,_,_,i,_.__e,n));return n}function S(t,n,e,_,i,r){var o,u,f;if(void 0!==n.__d)o=n.__d,n.__d=void 0;else if(null==e||i!=r||null==i.parentNode)t:if(null==r||r.parentNode!==t)t.appendChild(i),o=null;else{for(u=r,f=0;(u=u.nextSibling)&&f<_.length;f+=2)if(u==i)break t;t.insertBefore(i,r),o=r}return void 0!==o?o:i.nextSibling}function x(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]=null==e?"":"number"!=typeof e||f.test(n)?e:e+"px"}function C(t,n,e,_,i){var r;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof _&&(t.style.cssText=_=""),_)for(n in _)e&&n in e||x(t.style,n,"");if(e)for(n in e)_&&e[n]===_[n]||x(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+r]=e,e?_||t.addEventListener(n,r?H:w,r):t.removeEventListener(n,r?H:w,r);else if("dangerouslySetInnerHTML"!==n){if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null!=e&&(!1!==e||"a"===n[0]&&"r"===n[1])?t.setAttribute(n,e):t.removeAttribute(n))}}function w(t){this.l[t.type+!1](n.event?n.event(t):t)}function H(t){this.l[t.type+!0](n.event?n.event(t):t)}function E(t,e,_,i,r,o,u,f,l){var c,a,h,d,y,m,g,k,S,x,C,w,H,E=e.type;if(void 0!==e.constructor)return null;null!=_.__h&&(l=_.__h,f=e.__e=_.__e,e.__h=null,o=[f]),(c=n.__b)&&c(e);try{t:if("function"==typeof E){if(k=e.props,S=(c=E.contextType)&&i[c.__c],x=c?S?S.props.value:c.__:i,_.__c?g=(a=e.__c=_.__c).__=a.__E:("prototype"in E&&E.prototype.render?e.__c=a=new E(k,x):(e.__c=a=new p(k,x),a.constructor=E,a.render=$),S&&S.sub(a),a.props=k,a.state||(a.state={}),a.context=x,a.__n=i,h=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=E.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=s({},a.__s)),s(a.__s,E.getDerivedStateFromProps(k,a.__s))),d=a.props,y=a.state,h)null==E.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==d&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(k,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(k,a.__s,x)||e.__v===_.__v){a.props=k,a.state=a.__s,e.__v!==_.__v&&(a.__d=!1),a.__v=e,e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(t){t&&(t.__=e)}),a.__h.length&&u.push(a);break t}null!=a.componentWillUpdate&&a.componentWillUpdate(k,a.__s,x),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(d,y,m)})}if(a.context=x,a.props=k,a.__v=e,a.__P=t,C=n.__r,w=0,"prototype"in E&&E.prototype.render)a.state=a.__s,a.__d=!1,C&&C(e),c=a.render(a.props,a.state,a.context);else do{a.__d=!1,C&&C(e),c=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++w<25);a.state=a.__s,null!=a.getChildContext&&(i=s(s({},i),a.getChildContext())),h||null==a.getSnapshotBeforeUpdate||(m=a.getSnapshotBeforeUpdate(d,y)),H=null!=c&&c.type===v&&null==c.key?c.props.children:c,b(t,Array.isArray(H)?H:[H],e,_,i,r,o,u,f,l),a.base=e.__e,e.__h=null,a.__h.length&&u.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==o&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=N(_.__e,e,_,i,r,o,u,l);(c=n.diffed)&&c(e)}catch(t){e.__v=null,(l||null!=o)&&(e.__e=f,e.__h=!!l,o[o.indexOf(f)]=null),n.__e(t,e,_)}}function U(t,e){n.__c&&n.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){n.__e(t,e.__v)}})}function N(n,e,_,i,r,u,f,s){var c,a,h,v=_.props,p=e.props,y=e.type,m=0;if("svg"===y&&(r=!0),null!=u)for(;m<u.length;m++)if((c=u[m])&&"setAttribute"in c==!!y&&(y?c.localName===y:3===c.nodeType)){n=c,u[m]=null;break}if(null==n){if(null===y)return document.createTextNode(p);n=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,p.is&&p),u=null,s=!1}if(null===y)v===p||s&&n.data===p||(n.data=p);else{if(u=u&&t.call(n.childNodes),a=(v=_.props||o).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!s){if(null!=u)for(v={},m=0;m<n.attributes.length;m++)v[n.attributes[m].name]=n.attributes[m].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(function(t,n,e,_,i){var r;for(r in e)"children"===r||"key"===r||r in n||C(t,r,null,e[r],_);for(r in n)i&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||e[r]===n[r]||C(t,r,n[r],e[r],_)}(n,p,v,r,s),h)e.__k=[];else if(m=e.props.children,b(n,Array.isArray(m)?m:[m],e,_,i,r&&"foreignObject"!==y,u,f,u?u[0]:_.__k&&d(_,0),s),null!=u)for(m=u.length;m--;)null!=u[m]&&l(u[m]);s||("value"in p&&void 0!==(m=p.value)&&(m!==n.value||"progress"===y&&!m||"option"===y&&m!==v.value)&&C(n,"value",m,v.value,!1),"checked"in p&&void 0!==(m=p.checked)&&m!==n.checked&&C(n,"checked",m,v.checked,!1))}return n}function P(t,e,_){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,_)}}function D(t,e,_){var i,r;if(n.unmount&&n.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||P(i,null,e)),null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){n.__e(t,e)}i.base=i.__P=null,t.__c=void 0}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&D(i[r],e,"function"!=typeof t.type);_||null==t.__e||l(t.__e),t.__=t.__e=t.__d=void 0}function $(t,n,e){return this.constructor(t,e)}function A(e,_,i){var r,u,f;n.__&&n.__(e,_),u=(r="function"==typeof i)?null:i&&i.__k||_.__k,f=[],E(_,e=(!r&&i||_).__k=c(v,null,[e]),u||o,o,void 0!==_.ownerSVGElement,!r&&i?[i]:u?null:_.firstChild?t.call(_.childNodes):null,f,!r&&i?i:u?u.__e:_.firstChild,r),U(f,e)}function T(t,n){var e={__c:n="__cC"+r++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,_;return this.getChildContext||(e=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(m)},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}t=u.slice,n={__e:function(t,n,e,_){for(var i,r,o;n=n.__;)if((i=n.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(t)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(t,_||{}),o=i.__d),o)return i.__E=i}catch(n){t=n}throw t}},e=0,p.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof t&&(t=t(s({},e),this.props)),t&&s(e,t),null!=t&&this.__v&&(n&&this.__h.push(n),m(this))},p.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),m(this))},p.prototype.render=v,_=[],g.__r=0,r=0;var V,M,F,O,L=0,W=[],R=[],j=n.__b,I=n.__r,q=n.diffed,B=n.__c,G=n.unmount;function z(t,e){n.__h&&n.__h(M,t,L||e),L=0;var _=M.__H||(M.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({__V:R}),_.__[t]}function J(t){return L=1,K(ct,t)}function K(t,n,e){var _=z(V++,2);if(_.t=t,!_.__c&&(_.__=[e?e(n):ct(void 0,n),function(t){var n=_.__N?_.__N[0]:_.__[0],e=_.t(n,t);n!==e&&(_.__N=[e,_.__[1]],_.__c.setState({}))}],_.__c=M,!M.u)){M.u=!0;var i=M.shouldComponentUpdate;M.shouldComponentUpdate=function(t,n,e){if(!_.__c.__H)return!0;var r=_.__c.__H.__.filter(function(t){return t.__c});if(r.every(function(t){return!t.__N}))return!i||i.call(this,t,n,e);var o=!1;return r.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(o=!0)}}),!!o&&(!i||i.call(this,t,n,e))}}return _.__N||_.__}function Q(t,e){var _=z(V++,3);!n.__s&&lt(_.__H,e)&&(_.__=t,_.i=e,M.__H.__h.push(_))}function X(t,e){var _=z(V++,4);!n.__s&&lt(_.__H,e)&&(_.__=t,_.i=e,M.__h.push(_))}function Y(t){return L=5,tt(function(){return{current:t}},[])}function Z(t,n,e){L=6,X(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))}function tt(t,n){var e=z(V++,7);return lt(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function nt(t,n){return L=8,tt(function(){return t},n)}function et(t){var n=M.context[t.__c],e=z(V++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(M)),n.props.value):t.__}function _t(t,e){n.useDebugValue&&n.useDebugValue(e?e(t):t)}function it(t){var n=z(V++,10),e=J();return n.__=t,M.componentDidCatch||(M.componentDidCatch=function(t,_){n.__&&n.__(t,_),e[1](t)}),[e[0],function(){e[1](void 0)}]}function rt(){for(var t;t=W.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ft),t.__H.__h.forEach(st),t.__H.__h=[]}catch(e){t.__H.__h=[],n.__e(e,t.__v)}}n.__b=function(t){"function"!=typeof t.type||t.o||t.type===v?t.o||(t.o=t.__&&t.__.o?t.__.o:""):t.o=(t.__&&t.__.o?t.__.o:"")+(t.__&&t.__.__k?t.__.__k.indexOf(t):0),M=null,j&&j(t)},n.__r=function(t){I&&I(t),V=0;var n=(M=t.__c).__H;n&&(F===M?(n.__h=[],M.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=R,t.__N=t.i=void 0})):(n.__h.forEach(ft),n.__h.forEach(st),n.__h=[])),F=M},n.diffed=function(t){q&&q(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==W.push(e)&&O===n.requestAnimationFrame||((O=n.requestAnimationFrame)||ut)(rt)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==R&&(t.__=t.__V),t.i=void 0,t.__V=R})),F=M=null},n.__c=function(t,e){e.some(function(t){try{t.__h.forEach(ft),t.__h=t.__h.filter(function(t){return!t.__||st(t)})}catch(_){e.some(function(t){t.__h&&(t.__h=[])}),e=[],n.__e(_,t.__v)}}),B&&B(t,e)},n.unmount=function(t){G&&G(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(t){try{ft(t)}catch(t){e=t}}),_.__H=void 0,e&&n.__e(e,_.__v))};var ot="function"==typeof requestAnimationFrame;function ut(t){var n,e=function(){clearTimeout(_),ot&&cancelAnimationFrame(n),setTimeout(t)},_=setTimeout(e,100);ot&&(n=requestAnimationFrame(e))}function ft(t){var n=M,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),M=n}function st(t){var n=M;t.__c=t.__(),M=n}function lt(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function ct(t,n){return"function"==typeof n?n(t):n}var at=function(t,n,e,_){var i;n[0]=0;for(var r=1;r<n.length;r++){var o=n[r++],u=n[r]?(n[0]|=o?1:2,e[n[r++]]):n[++r];3===o?_[0]=u:4===o?_[1]=Object.assign(_[1]||{},u):5===o?(_[1]=_[1]||{})[n[++r]]=u:6===o?_[1][n[++r]]+=u+"":o?(i=t.apply(u,at(t,u,e,["",null])),_.push(i),u[0]?n[0]|=2:(n[r-2]=0,n[r]=i)):_.push(u)}return _},ht=new Map;function vt(){throw new Error("Cycle detected")}function pt(){if(kt>1)kt--;else{for(var t,n=!1;void 0!==bt;){var e=bt;for(bt=void 0,St++;void 0!==e;){var _=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&4&e.f&&Et(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=_}}if(St=0,kt--,n)throw t}}function dt(t){if(kt>0)return t();kt++;try{return t()}finally{pt()}}var yt,mt,gt=void 0,bt=void 0,kt=0,St=0,xt=0;function Ct(t){if(void 0!==gt){var n=t.n;if(void 0===n||n.t!==gt)return gt.s=n={f:0,i:0,S:t,p:void 0,n:gt.s,t:gt,e:void 0,x:void 0,r:n},t.n=n,32&gt.f&&t.S(n),n;if(1&n.f){n.f&=-2;var e=gt.s;if(n!==e){var _=n.p,i=n.n;void 0!==_&&(_.n=i),void 0!==i&&(i.p=_),void 0!==e&&(e.p=n),n.p=void 0,n.n=e,gt.s=n}return n}}}function wt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Ht(t){return new wt(t)}function Et(t){for(var n=t.s;void 0!==n&&n.S.i===n.i&&n.S.h()&&n.S.i===n.i;)n=n.n;return void 0!==n}function Ut(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;void 0!==e&&(n.r=e),n.S.n=n,n.f|=1}}function Nt(t){for(var n=t.s,e=void 0;void 0!==n;){var _=n.n;1&n.f?(n.S.U(n),n.n=void 0):(void 0!==e&&(e.p=n),n.p=void 0,n.n=e,e=n),n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=_}t.s=e}function Pt(t){wt.call(this,void 0),this.x=t,this.s=void 0,this.g=xt-1,this.f=4}function Dt(t){return new Pt(t)}function $t(t){var n=t.u;if(t.u=void 0,"function"==typeof n){kt++;var e=gt;gt=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,At(t),n}finally{gt=e,pt()}}}function At(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,$t(t)}function Tt(t){if(gt!==this)throw new Error("Out-of-order effect");Nt(this),gt=t,this.f&=-2,8&this.f&&At(this),pt()}function Vt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=36}function Mt(t){var n=new Vt(t);return n.c(),n.d.bind(n)}function Ft(t,e){n[t]=e.bind(null,n[t]||function(){})}function Ot(t){mt&&mt(),mt=t&&t.S()}function Lt(t){var n=this,e=t.data,_=Rt(e);_.value=e;var i=tt(function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){n.base.data=i.peek()},Dt(function(){var t=_.value.value;return 0===t?0:!0===t?"":t||""})},[]);return i.value}function Wt(t,n,e,_){var i=n in t&&void 0===t.ownerSVGElement,r=Ht(e);return{o:function(t,n){r.value=t,_=n},d:Mt(function(){var e=r.value.value;_[n]!==e&&(_[n]=e,i?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function Rt(t){return tt(function(){return Ht(t)},[])}function jt(t){var n=Y(t);return n.current=t,yt.__$f|=4,tt(function(){return Dt(function(){return n.current()})},[])}wt.prototype.h=function(){return!0},wt.prototype.S=function(t){2&t.f||(t.f|=2,t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},wt.prototype.U=function(t){if(2&t.f){t.f&=-3;var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},wt.prototype.subscribe=function(t){var n=this;return Mt(function(){var e=n.value,_=32&this.f;this.f&=-33;try{t(e)}finally{this.f|=_}})},wt.prototype.valueOf=function(){return this.value},wt.prototype.toString=function(){return this.value+""},wt.prototype.peek=function(){return this.v},Object.defineProperty(wt.prototype,"value",{get:function(){var t=Ct(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){St>100&&vt(),this.v=t,this.i++,xt++,kt++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{pt()}}}}),(Pt.prototype=new wt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===xt)return!0;if(this.g=xt,this.f|=1,this.i>0&&!Et(this))return this.f&=-2,!0;var t=gt;try{Ut(this),gt=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return gt=t,Nt(this),this.f&=-2,!0},Pt.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}wt.prototype.S.call(this,t)},Pt.prototype.U=function(t){if(wt.prototype.U.call(this,t),void 0===this.t){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Pt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Pt.prototype.peek=function(){if(this.h()||vt(),16&this.f)throw this.v;return this.v},Object.defineProperty(Pt.prototype,"value",{get:function(){1&this.f&&vt();var t=Ct(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),Vt.prototype.c=function(){var t=this.S();try{8&this.f||void 0===this.x||(this.u=this.x())}finally{t()}},Vt.prototype.S=function(){1&this.f&&vt(),this.f|=1,this.f&=-9,$t(this),Ut(this),kt++,this.f&=-5;var t=gt;return gt=this,Tt.bind(this,t)},Vt.prototype.N=function(){2&this.f||(this.f|=6,this.o=bt,bt=this)},Vt.prototype.d=function(){this.f|=8,1&this.f||At(this)},Lt.displayName="_st",Object.defineProperties(wt.prototype,{constructor:{configurable:!0},type:{configurable:!0,value:Lt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Ft("__b",function(t,n){if("string"==typeof n.type){var e,_=n.props;for(var i in _)if("children"!==i){var r=_[i];r instanceof wt&&(e||(n.__np=e={}),e[i]=r,_[i]=r.peek())}}t(n)}),Ft("__r",function(t,n){Ot();var e,_=n.__c;_&&(_.__$f&=-2,void 0===(e=_.__$u)&&(_.__$u=e=function(t){var n;return Mt(function(){n=this}),n.c=function(){_.__$f|=1,_.setState({})},n}())),yt=_,Ot(e),t(n)}),Ft("__e",function(t,n,e,_){Ot(),yt=void 0,t(n,e,_)}),Ft("diffed",function(t,n){var e;if(Ot(),yt=void 0,"string"==typeof n.type&&(e=n.__e)){var _=n.__np,i=n.props;if(_){var r=e.U;if(r)for(var o in r){var u=r[o];void 0===u||o in _||(u.d(),r[o]=void 0)}else e.U=r={};for(var f in _){var s=r[f],l=_[f];void 0===s?(s=Wt(e,f,l,i),r[f]=s):s.o(l,i)}}}t(n)}),Ft("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var _=e.U;if(_)for(var i in e.U=void 0,_){var r=_[i];r&&r.d()}}}else{var o=n.__c;if(o){var u=o.__$u;u&&(o.__$u=void 0,u.d())}}t(n)}),Ft("__h",function(t,n,e,_){_<3&&(n.__$f|=2),t(n,e,_)}),p.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var _ in n)return!0;for(var i in t)if("__source"!==i&&t[i]!==this.props[i])return!0;for(var r in this.props)if(!(r in t))return!0;return!1};var It=function(t){var n=ht.get(this);return n||(n=new Map,ht.set(this,n)),(n=at(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,_=1,i="",r="",o=[0],u=function(t){1===_&&(t||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,t,i):3===_&&(t||i)?(o.push(3,t,i),_=2):2===_&&"..."===i&&t?o.push(4,t,0):2===_&&i&&!t?o.push(5,0,!0,i):_>=5&&((i||!t&&5===_)&&(o.push(_,0,i,e),_=6),t&&(o.push(_,t,0,e),_=6)),i=""},f=0;f<t.length;f++){f&&(1===_&&u(),u(f));for(var s=0;s<t[f].length;s++)n=t[f][s],1===_?"<"===n?(u(),o=[o],_=3):i+=n:4===_?"--"===i&&">"===n?(_=1,i=""):i=n+i[0]:r?n===r?r="":i+=n:'"'===n||"'"===n?r=n:">"===n?(u(),_=1):_&&("="===n?(_=5,e=i,i=""):"/"===n&&(_<5||">"===t[f][s+1])?(u(),3===_&&(o=o[0]),_=o,(o=o[0]).push(2,0,_),_=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),_=2):i+=n),3===_&&"!--"===i&&(_=4,o=o[0])}return u(),o}(t)),n),arguments,[])).length>1?n:n[0]}.bind(c);export{p as Component,dt as batch,Dt as computed,T as createContext,h as createRef,Mt as effect,c as h,It as html,A as render,Ht as signal,nt as useCallback,jt as useComputed,et as useContext,_t as useDebugValue,Q as useEffect,it as useErrorBoundary,Z as useImperativeHandle,X as useLayoutEffect,tt as useMemo,K as useReducer,Y as useRef,Rt as useSignal,J as useState};
