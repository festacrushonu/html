(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{309:function(e,t,r){"use strict";r.r(t);r(53),r(31),r(52),r(69),r(41),r(70);var n=r(9),o=r(32),c=(r(51),r(27),r(68),r(11),r(71));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{phone:""}},methods:h(h({},Object(c.b)({change:"open/change",setPhone:"open/setPhone"})),{},{sms:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setPhone(e.phone.replace(/[^0-9]/g,"")),r=e.$vs.loading(),t.next=4,e.$axios.$post("validation",{phone:e.phone.replace(/[^0-9]/g,"")}).finally((function(){return r.close()}));case 4:t.sent.exist?e.change("login"):e.change("register");case 6:case"end":return t.stop()}}),t)})))()}})},d=r(20),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"bg-white p-2 shadow",on:{submit:function(t){return t.preventDefault(),e.sms()}}},[r("vs-input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],staticClass:"uppercase",attrs:{placeholder:"Celular",block:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),r("button",{staticClass:"bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-2 w-full uppercase rounded-xl"},[e._v("\n        Enviar\n    ")])],1)}),[],!1,null,null,null);t.default=component.exports},310:function(e,t,r){"use strict";r.r(t);r(53),r(31),r(52),r(69),r(41),r(70);var n=r(9),o=r(32),c=(r(51),r(27),r(68),r(11),r(71));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{auth:{phone:"",code:""}}},mounted:function(){this.auth.phone=this.$store.state.open.phone.replace(/[^0-9]/g,"")},methods:h(h({},Object(c.b)({change:"open/change"})),{},{check:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$vs.loading(),t.next=3,e.$axios.$post("check",e.auth).finally((function(){return r.close()}));case 3:t.sent.check?e.change("register"):e.$vs.notification({color:"danger",position:"top-center",title:"Eita!",text:"Seu código está errado, tente novamente."});case 5:case"end":return t.stop()}}),t)})))()}})},d=r(20),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"bg-white p-2 shadow",on:{submit:function(t){return t.preventDefault(),e.check()}}},[r("vs-input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],staticClass:"uppercase mb-2",attrs:{placeholder:"Celular",block:""},model:{value:e.auth.phone,callback:function(t){e.$set(e.auth,"phone",t)},expression:"auth.phone"}}),e._v(" "),r("vs-input",{staticClass:"uppercase mb-2",attrs:{placeholder:"Código",block:""},model:{value:e.auth.code,callback:function(t){e.$set(e.auth,"code",t)},expression:"auth.code"}}),e._v(" "),r("button",{staticClass:"bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-2 w-full uppercase rounded-xl"},[e._v("\n            Enviar\n        ")])],1),e._v(" "),r("button",{staticClass:"bg-pink-600 hover:bg-pink-900 text-white font-bold p-1 rounded mt-10 w-full uppercase rounded-xl",on:{click:function(t){return e.change("welcome")}}},[e._v("\n        Voltar ao início\n    ")])])}),[],!1,null,null,null);t.default=component.exports},311:function(e,t,r){e.exports=r.p+"img/date.6352625.png"},315:function(e,t,r){"use strict";r.r(t);r(53),r(31),r(52),r(11),r(69),r(41),r(70);var n=r(32),o=r(71);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({change:"open/change"}))},h=l,f=r(20),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticClass:"my-10",attrs:{src:r(311)}}),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"mt-20"},[n("button",{staticClass:"bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded min-w-full rounded-full shadow-xl uppercase",on:{click:function(t){return t.preventDefault(),e.change("validation")}}},[e._v("\n            Acessar o joguinho\n        ")])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-pink-600 text-5xl my-10 flex justify-between"},[r("a",{attrs:{href:"https://instagram.com/festacrushonu",target:"_blank"}},[r("i",{staticClass:"fab fa-instagram"})]),e._v(" "),r("a",{attrs:{href:"https://tiktok.com/@festacrushonu",target:"_blank"}},[r("i",{staticClass:"fab fa-tiktok"})]),e._v(" "),r("a",{attrs:{href:"https://twitter.com/festacrushonu",target:"_blank"}},[r("i",{staticClass:"fab fa-twitter"})])])}],!1,null,null,null);t.default=component.exports},316:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(51),r(27),r(68),r(11),{data:function(){return{register:{phone:"",genre:"",kiss:"",name:"",images:[],password:""},hasVisiblePassword:!1}},computed:{getProgress:function(){var progress=0;return/\d/.test(this.register.password)&&(progress+=20),/(.*[A-Z].*)/.test(this.register.password)&&(progress+=20),/(.*[a-z].*)/.test(this.register.password)&&(progress+=20),this.register.password.length>=6&&(progress+=20),/[^A-Za-z0-9]/.test(this.register.password)&&(progress+=20),progress}},mounted:function(){this.register.phone=this.$store.state.open.phone.replace(/[^0-9]/g,"")},methods:{save:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$vs.loading(),t.next=3,e.$axios.$post("register",e.register).finally((function(){return r.close()}));case 3:return t.next=5,e.$auth.loginWith("api",{data:{phone:e.register.phone.replace(/[^0-9]/g,""),password:e.register.password}});case 5:e.$router.push("/");case 6:case"end":return t.stop()}}),t)})))()},onOversize:function(){this.$vs.notification({color:"danger",position:"top-center",title:"Eu sei que você é bonito demais",text:"Por isso a foto é muito pesada, suba outra."})}}}),c=r(20),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",{staticClass:"text-center uppercase text-2xl text-white mb-2"},[e._v("\n        Criar conta\n    ")]),e._v(" "),r("form",{staticClass:"bg-white shadow p-2",on:{submit:function(t){return t.preventDefault(),e.save()}}},[r("vs-input",{staticClass:"mb-4",attrs:{placeholder:"Nome",block:""},model:{value:e.register.name,callback:function(t){e.$set(e.register,"name",t)},expression:"register.name"}}),e._v(" "),r("vs-input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],staticClass:"mb-4",attrs:{placeholder:"Telefone",disabled:"",block:""},model:{value:e.register.phone,callback:function(t){e.$set(e.register,"phone",t)},expression:"register.phone"}}),e._v(" "),r("vs-select",{staticClass:"mb-4",attrs:{placeholder:"Gênero",block:""},model:{value:e.register.genre,callback:function(t){e.$set(e.register,"genre",t)},expression:"register.genre"}},[r("vs-option",{attrs:{label:"Feminino",value:"1"}},[e._v(" Feminino ")]),e._v(" "),r("vs-option",{attrs:{label:"Masculino",value:"2"}},[e._v(" Masculino ")]),e._v(" "),r("vs-option",{attrs:{label:"Neutro",value:"3"}},[e._v(" Neutro ")])],1),e._v(" "),r("vs-select",{staticClass:"mb-4",attrs:{placeholder:"Preferências",block:""},model:{value:e.register.kiss,callback:function(t){e.$set(e.register,"kiss",t)},expression:"register.kiss"}},[r("vs-option",{attrs:{label:"Mulheres",value:"1"}},[e._v(" Mulheres ")]),e._v(" "),r("vs-option",{attrs:{label:"Homens",value:"2"}},[e._v(" Homens ")]),e._v(" "),r("vs-option",{attrs:{label:"Tudo",value:"3"}},[e._v(" Tudo ")])],1),e._v(" "),r("vs-input",{staticClass:"mb-4",attrs:{type:"password",placeholder:"Senha",progress:e.getProgress,"visible-password":e.hasVisiblePassword,"icon-after":"",block:""},on:{"click-icon":function(t){e.hasVisiblePassword=!e.hasVisiblePassword}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.hasVisiblePassword?r("i",{staticClass:"fas fa-eye-slash"}):r("i",{staticClass:"fas fa-eye"})]},proxy:!0},e.getProgress>=100?{key:"message-success",fn:function(){return[e._v("\n                Senha segura\n            ")]},proxy:!0}:null],null,!0),model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}}),e._v(" "),r("p",{staticClass:"text-gray-400 text-sm"},[e._v("Fotos")]),e._v(" "),r("van-uploader",{attrs:{multiple:"","max-count":3,"max-size":2048e3},on:{oversize:e.onOversize},model:{value:e.register.images,callback:function(t){e.$set(e.register,"images",t)},expression:"register.images"}}),e._v(" "),r("button",{staticClass:"bg-pink-600 hover:bg-pink-900 text-white font-bold p-1 rounded w-full uppercase rounded-xl",attrs:{type:"submit",disabled:e.getProgress<70}},[e._v("\n            Criar perfil\n        ")])],1)])}),[],!1,null,null,null);t.default=component.exports},317:function(e,t,r){"use strict";r.r(t);var n={computed:{verify:function(){return this.$store.state.open.sms.verify},check:function(){return this.$store.state.open.sms.check}}},o=r(20),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",{staticClass:"text-center uppercase text-2xl text-white mb-2"},[e._v("\n        Validação\n    ")]),e._v(" "),e.verify?r("AuthSmsVerify"):e._e(),e._v(" "),e.check?r("AuthSmsCheck"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AuthSmsVerify:r(309).default,AuthSmsCheck:r(310).default})},318:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(51),r(27),r(68),r(11),{data:function(){return{login:{phone:"",password:""},hasVisiblePassword:!1}},mounted:function(){this.login.phone=this.$store.state.open.phone.replace(/[^0-9]/g,"")},methods:{auth:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$vs.loading(),t.next=3,e.$auth.loginWith("api",{data:{phone:e.login.phone.replace(/[^0-9]/g,""),password:e.login.password}}).finally((function(){return r.close()}));case 3:t.sent.error?e.$vs.notification({color:"danger",position:"top-center",title:"Ops",text:"Sua senha está errada!"}):e.$router.push("/");case 5:case"end":return t.stop()}}),t)})))()}}}),c=r(20),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",{staticClass:"text-center uppercase text-2xl text-white mb-2"},[e._v("Entrar")]),e._v(" "),r("form",{staticClass:"bg-white shadow p-2",on:{submit:function(t){return t.preventDefault(),e.auth()}}},[r("vs-input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],staticClass:"mb-4",attrs:{placeholder:"Telefone",disabled:"",block:""},model:{value:e.login.phone,callback:function(t){e.$set(e.login,"phone",t)},expression:"login.phone"}}),e._v(" "),r("vs-input",{staticClass:"mb-4",attrs:{type:"password",placeholder:"Senha","visible-password":e.hasVisiblePassword,"icon-after":"",block:""},on:{"click-icon":function(t){e.hasVisiblePassword=!e.hasVisiblePassword}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.hasVisiblePassword?r("i",{staticClass:"fas fa-eye-slash"}):r("i",{staticClass:"fas fa-eye"})]},proxy:!0}]),model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}}),e._v(" "),r("button",{staticClass:"bg-pink-600 hover:bg-pink-900 text-white font-bold p-1 rounded w-full uppercase rounded-xl",attrs:{type:"submit"}},[e._v("\n            Entrar\n        ")])],1)])}),[],!1,null,null,null);t.default=component.exports},323:function(e,t,r){"use strict";r.r(t);var n={layout:"auth",computed:{welcome:function(){return this.$store.state.open.welcome},register:function(){return this.$store.state.open.register},validation:function(){return this.$store.state.open.validation},login:function(){return this.$store.state.open.login}}},o=r(20),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.welcome?r("AuthWelcome"):e._e(),e._v(" "),e.register?r("AuthRegister"):e._e(),e._v(" "),e.validation?r("AuthValidation"):e._e(),e._v(" "),e.login?r("AuthLogin"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AuthWelcome:r(315).default,AuthRegister:r(316).default,AuthValidation:r(317).default,AuthLogin:r(318).default})}}]);