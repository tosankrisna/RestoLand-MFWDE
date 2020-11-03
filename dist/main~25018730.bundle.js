!function(a){function t(t){for(var e,n,r=t[0],o=t[1],u=t[2],i=0,c=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&c.push(l[n][0]),l[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e]);for(p&&p(t);c.length;)c.shift()();return s.push.apply(s,u||[]),f()}function f(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==l[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var n={},l={0:0},s=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=a,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=r;s.push([10,3,2,1]),f()}([function(t,e,n){"use strict";e.a={BASE_URL:"https://restaurant-api.dicoding.dev",API_KEY:"12345",DATABASE_NAME:"RestoLand-Database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"}},function(t,e,n){"use strict";var r=n(0),n={LIST_RESTAURANT:"".concat(r.a.BASE_URL,"/list"),IMG_RESTAURANT:"".concat(r.a.BASE_URL,"/images/medium"),DETAIL_RESTAURANT:function(t){return"".concat(r.a.BASE_URL,"/detail/").concat(t)},REVIEW_RESTAURANT:"".concat(r.a.BASE_URL,"/review")};e.a=n},function(t,e,n){"use strict";var c=n(1),a=n(0);function f(t,e,n,r,o,u,i){try{var c=t[u](i),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function l(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){f(r,e,n,o,u,"next",t)}function u(t){f(r,e,n,o,u,"throw",t)}o(void 0)})}}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r,o,u,i;return e=t,n=null,r=[{key:"listRestaurant",value:(i=l(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.a.LIST_RESTAURANT);case 2:return e=t.sent,t.next=5,e.json();case 5:return e=t.sent,t.abrupt("return",e.restaurants);case 7:case"end":return t.stop()}},t)})),function(){return i.apply(this,arguments)})},{key:"detailRestaurant",value:(u=l(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.a.DETAIL_RESTAURANT(e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}},t)})),function(t){return u.apply(this,arguments)})},{key:"reviewRestaurant",value:(o=l(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c.a.REVIEW_RESTAURANT,{method:"POST",headers:{"X-Auth-Token":a.a.API_KEY,"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}},t)})),function(t){return o.apply(this,arguments)})}],n&&s(e.prototype,n),r&&s(e,r),t}();e.a=n},function(t,e,n){"use strict";var r=n(9),o=n(0);function a(t,e,n,r,o,u,i){try{var c=t[u](i),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function u(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=c.apply(t,i);function o(t){a(r,e,n,o,u,"next",t)}function u(t){a(r,e,n,o,u,"throw",t)}o(void 0)})}}var i=o.a.DATABASE_NAME,n=o.a.DATABASE_VERSION,c=o.a.OBJECT_STORE_NAME,f=Object(r.a)(i,n,{upgrade:function(t){t.createObjectStore(c,{keyPath:"id"})}}),n={getRestaurant:function(e){return u(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f;case 4:return t.abrupt("return",t.sent.get(c,e));case 5:case"end":return t.stop()}},t)}))()},getAllRestaurant:function(){return u(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f;case 2:return t.abrupt("return",t.sent.getAll(c));case 3:case"end":return t.stop()}},t)}))()},putRestaurant:function(e){return u(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hasOwnProperty("id")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,f;case 4:return t.abrupt("return",t.sent.put(c,e));case 5:case"end":return t.stop()}},t)}))()},deleteRestaurant:function(e){return u(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f;case 2:return t.abrupt("return",t.sent.delete(c,e));case 3:case"end":return t.stop()}},t)}))()}};e.a=n},,,,,,,function(t,e,n){"use strict";n.r(e);var e=n(11),e=(n(12),n(13),n(14)),e=n(15),e=n(16),e=n(17),e=n(18),e=n(19),e=n(20),e=n(21),e=n(5),e=n(22),r=n(6),o=new(n(8).a)({button:document.querySelector("#menu"),drawer:document.querySelector("#drawer"),content:document.querySelector("main")});window.addEventListener("hashchange",function(){o.renderPage()}),window.addEventListener("load",function(){o.renderPage(),Object(r.a)()})},,,,function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(n){var r=f();return function(){var t,e=s(n);return t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);r=new(Function.bind.apply(t,r));return n&&l(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,c(HTMLElement));var t,e,n,r=i(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="head-container">\n        <div class="logo">\n          <a href="#/home">Resto<span>Land</span></a>\n        </div>\n\n        <button id="menu" class="hamburger-menu" aria-label="click to show navbar">☰</button>\n\n        <nav id="drawer">\n          <ul class="nav-list">\n            <li class="nav-item"><a href="#/home">Home</a></li>\n            <li class="nav-item"><a href="#/favorite">Favorite</a></li>\n            <li class="nav-item"><a href="https://github.com/tosankrisna" target="_blank" rel="noreferrer">About Us</a></li>\n          </ul>\n        </nav>\n      </div>\n    '}}])&&u(t.prototype,e),n&&u(t,n),o}();customElements.define("navigation-bar",n)},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(n){var r=f();return function(){var t,e=s(n);return t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);r=new(Function.bind.apply(t,r));return n&&l(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,c(HTMLElement));var t,e,n,r=i(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="hero">\n        <div class="hero-inner">\n          <p class="welcome-text">Selamat datang di</p>\n          <h1 class="title">Resto<span>Land</span></h1>\n          <p class="tagline">Situs rekomendasi restoran terbaik di seluruh Indonesia</p>\n        </div>\n      </div>\n    '}}])&&u(t.prototype,e),n&&u(t,n),o}();customElements.define("hero-image",n)},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(n){var r=f();return function(){var t,e=s(n);return t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);r=new(Function.bind.apply(t,r));return n&&l(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,c(HTMLElement));var t,e,n,r=i(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="gallery content">\n        <h1 class="title">Gallery Makanan</h1>\n        <div class="image-gallery">\n          <img data-src="./images/1-large.jpg"\n            class="lazyload"\n            data-srcset="./images/1-small.jpg 480w, ./images/1-large.jpg 800w"\n            sizes="(max-width: 600px) 480px, 800px"\n            alt="nasi goreng">\n          <img data-src="./images/2-large.jpg"\n            class="lazyload"\n            data-srcset="./images/2-small.jpg 480w, ./images/2-large.jpg 800w"\n            sizes="(max-width: 600px) 480px, 800px"\n            alt="steak">\n          <img data-src="./images/3-large.jpg"\n            class="lazyload"\n            data-srcset="./images/3-small.jpg 480w, ./images/3-large.jpg 800w"\n            sizes="(max-width: 600px) 480px, 800px"\n            alt="spaghetti">\n          <img data-src="./images/4-large.jpg"\n            class="lazyload"\n            data-srcset="./images/4-small.jpg 480w, ./images/4-large.jpg 800w"\n            sizes="(max-width: 600px) 480px, 800px"\n            alt="hamburger">\n          <img data-src="./images/5-large.jpg"\n            class="lazyload"\n            data-srcset="./images/5-small.jpg 480w, ./images/5-large.jpg 800w"\n            sizes="(max-width: 600px) 480px, 800px"\n            alt="sushi">\n          <img data-src="./images/6-large.jpg"\n            class="lazyload"\n            data-srcset="./images/6-small.jpg 480w, ./images/6-large.jpg 800w"\n            sizes="(max-width: 600px) 480px, 800px"\n            alt="pizza">\n        </div>\n      </div>\n    '}}])&&u(t.prototype,e),n&&u(t,n),o}();customElements.define("food-gallery",n)},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(n){var r=f();return function(){var t,e=s(n);return t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);r=new(Function.bind.apply(t,r));return n&&l(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,c(HTMLElement));var t,e,n,r=i(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <footer>\n        <div class="copyright">\n          <p>Copyright © 2020 - RestoLand</p>\n        </div>\n      </footer>\n    '}}])&&u(t.prototype,e),n&&u(t,n),o}();customElements.define("footer-bar",n)},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(n){var r=f();return function(){var t,e=s(n);return t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);r=new(Function.bind.apply(t,r));return n&&l(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,c(HTMLElement));var t,e,n,r=i(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <a href="#maincontent" class="skip-link">Skip To Content</a>\n    '}}])&&u(t.prototype,e),n&&u(t,n),o}();customElements.define("skip-content",n)},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(n){var r=f();return function(){var t,e=s(n);return t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);r=new(Function.bind.apply(t,r));return n&&l(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,c(HTMLElement));var t,e,n,r=i(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="loader"></div>\n    '}}])&&u(t.prototype,e),n&&u(t,n),o}();customElements.define("loading-indicator",n)},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(n){var r=f();return function(){var t,e=s(n);return t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);r=new(Function.bind.apply(t,r));return n&&l(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,c(HTMLElement));var t,e,n,r=i(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML="\n      <div>\n        <h1>Gagal memuat konten!</h1>\n        <p>Silahkan refresh kembali halaman untuk mencoba lagi</p>\n      </div>\n    "}}])&&u(t.prototype,e),n&&u(t,n),o}();customElements.define("error-message",n)},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(n){var r=f();return function(){var t,e=s(n);return t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==o(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return a(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function a(t,e,n){return(a=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);r=new(Function.bind.apply(t,r));return n&&l(r,n.prototype),r}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,c(HTMLElement));var t,e,n,r=i(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(e=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div>\n        <h1>Data tidak tersedia!</h1>\n        <p class="fav-page-msg">Data restaurant favorit tidak ditemukan</p>\n      </div>\n    '}}])&&u(t.prototype,e),n&&u(t,n),o}();customElements.define("favorite-message",n)}]);