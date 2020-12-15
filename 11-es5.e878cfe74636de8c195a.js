!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{cRhG:function(t,i,a){"use strict";a.r(i),a.d(i,"ProfilePageModule",(function(){return J}));var o=a("TEn/"),c=a("ofXK"),r=a("3Pt+"),s=a("tyNb"),u=a("HC5s"),b=a("fXoL"),l=a("m0gV");function f(e,t){if(1&e&&(b.Mb(0,"ion-thumbnail"),b.Ib(1,"img",2),b.Lb()),2&e){var n=b.Wb();b.xb(1),b.Zb("src",n.imageUrl,b.cc)}}var m,g=((m=function(){function t(n,i){e(this,t),this.apiProvider=n,this.navCtrl=i,this.pokemonName="",this.imageUrl=""}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.apiProvider.getPokemon(this.pokemonName).subscribe((function(t){e.imageUrl=t.sprites.other["official-artwork"].front_default}))}},{key:"viewPokemon",value:function(){this.navCtrl.navigateForward("tabs/profile/pokemon",{queryParams:{name:this.pokemonName}})}}]),t}()).\u0275fac=function(e){return new(e||m)(b.Hb(l.a),b.Hb(o.I))},m.\u0275cmp=b.Bb({type:m,selectors:[["pokemon-list-item"]],inputs:{pokemonName:"pokemonName"},decls:4,vars:2,consts:[[3,"click"],[4,"ngIf"],[3,"src"]],template:function(e,t){1&e&&(b.Mb(0,"ion-item",0),b.Ub("click",(function(){return t.viewPokemon()})),b.ec(1,f,2,1,"ion-thumbnail",1),b.Mb(2,"ion-label"),b.fc(3),b.Lb(),b.Lb()),2&e&&(b.xb(1),b.Zb("ngIf",t.imageUrl),b.xb(2),b.gc(t.pokemonName))},directives:[o.s,c.i,o.t,o.D],encapsulation:2}),m);function v(e,t){1&e&&b.Ib(0,"img",11)}function h(e,t){if(1&e&&b.Ib(0,"img",12),2&e){var n=b.Wb();b.Zb("src",n.profilePicture,b.cc)}}function p(e,t){1&e&&b.Ib(0,"pokemon-list-item",14),2&e&&b.Zb("pokemonName",t.$implicit)}function d(e,t){if(1&e&&(b.Kb(0),b.Mb(1,"ion-list"),b.ec(2,p,1,1,"pokemon-list-item",13),b.Lb(),b.Jb()),2&e){var n=b.Wb();b.xb(2),b.Zb("ngForOf",n.caught)}}function k(e,t){1&e&&b.Ib(0,"pokemon-list-item",14),2&e&&b.Zb("pokemonName",t.$implicit)}function w(e,t){if(1&e&&(b.Kb(0),b.Mb(1,"ion-list"),b.ec(2,k,1,1,"pokemon-list-item",13),b.Lb(),b.Jb()),2&e){var n=b.Wb();b.xb(2),b.Zb("ngForOf",n.wishList)}}var P,y=new u.a("username"),M=new u.a("wishlist"),C=new u.a("caught"),L=new u.a("profile"),I=((P=function(){function t(n){e(this,t),this.navCtrl=n,this.userName="",this.selectedSegment="caught",this.wishList=[],this.caught=[],this.profilePicture=""}return n(t,[{key:"ionViewDidEnter",value:function(){this.userName=y.get()||"",this.loadWishList(),this.loadCaught(),this.loadProfilePicture()}},{key:"handleNameChange",value:function(e){y.set(e.detail.value)}},{key:"segmentChanged",value:function(e){this.selectedSegment=e.detail.value}},{key:"loadWishList",value:function(){this.wishList=M.get(!0)||[]}},{key:"loadCaught",value:function(){this.caught=C.get(!0)||[]}},{key:"takeMeToPicture",value:function(){this.navCtrl.navigateForward("tabs/profile/picture")}},{key:"loadProfilePicture",value:function(){this.profilePicture=L.get()||""}}]),t}()).\u0275fac=function(e){return new(e||P)(b.Hb(o.I))},P.\u0275cmp=b.Bb({type:P,selectors:[["profile"]],decls:20,vars:7,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],[3,"click"],["src","https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",4,"ngIf"],[3,"src",4,"ngIf"],["placeholder","Your name...",3,"value","ionChange"],["value","caught",3,"ionChange"],["value","caught"],["value","wishlist"],[4,"ngIf"],["src","https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"],[3,"src"],[3,"pokemonName",4,"ngFor","ngForOf"],[3,"pokemonName"]],template:function(e,t){1&e&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.fc(3," Profile "),b.Lb(),b.Lb(),b.Lb(),b.Mb(4,"ion-content",1),b.Mb(5,"ion-header",2),b.Mb(6,"ion-toolbar"),b.Mb(7,"ion-avatar",3),b.Ub("click",(function(){return t.takeMeToPicture()})),b.ec(8,v,1,0,"img",4),b.ec(9,h,1,1,"img",5),b.Lb(),b.Mb(10,"ion-input",6),b.Ub("ionChange",(function(e){return t.handleNameChange(e)})),b.Lb(),b.Lb(),b.Lb(),b.Mb(11,"ion-segment",7),b.Ub("ionChange",(function(e){return t.segmentChanged(e)})),b.Mb(12,"ion-segment-button",8),b.Mb(13,"ion-label"),b.fc(14,"Caught"),b.Lb(),b.Lb(),b.Mb(15,"ion-segment-button",9),b.Mb(16,"ion-label"),b.fc(17,"Wish List"),b.Lb(),b.Lb(),b.Lb(),b.ec(18,d,3,1,"ng-container",10),b.ec(19,w,3,1,"ng-container",10),b.Lb()),2&e&&(b.Zb("translucent",!0),b.xb(4),b.Zb("fullscreen",!0),b.xb(4),b.Zb("ngIf",!t.profilePicture),b.xb(1),b.Zb("ngIf",t.profilePicture),b.xb(1),b.Zb("value",t.userName),b.xb(8),b.Zb("ngIf","caught"===t.selectedSegment),b.xb(1),b.Zb("ngIf","wishlist"===t.selectedSegment))},directives:[o.m,o.F,o.E,o.l,o.b,c.i,o.r,o.L,o.y,o.K,o.z,o.t,o.u,c.h,g],styles:[""]}),P),x=a("mrSG"),Z=a("jhN1"),N=["canvas"],O=["video"];function U(e,t){1&e&&b.Ib(0,"video",11,12)}function E(e,t){if(1&e&&b.Ib(0,"img",13),2&e){var n=b.Wb();b.Zb("src",n.imagePreview,b.cc)}}function W(e,t){if(1&e){var n=b.Nb();b.Mb(0,"ion-button",1),b.Ub("click",(function(){return b.bc(n),b.Wb().takePicture()})),b.fc(1," Say Cheese! "),b.Lb()}}function j(e,t){if(1&e){var n=b.Nb();b.Mb(0,"ion-button",1),b.Ub("click",(function(){return b.bc(n),b.Wb().initCamera()})),b.fc(1," Retake "),b.Lb()}}function F(e,t){if(1&e){var n=b.Nb();b.Mb(0,"ion-button",14),b.Ub("click",(function(){return b.bc(n),b.Wb().save()})),b.fc(1," Keep "),b.Lb()}}function S(e,t){if(1&e&&b.Ib(0,"img",13),2&e){var n=b.Wb();b.Zb("src",n.currentPicture,b.cc)}}function _(e,t){1&e&&b.Ib(0,"ion-icon",15)}var D,H,K,R=new u.a("profile"),T=[{path:"",component:I},{path:"picture",component:(D=function(){function t(n,i,a){e(this,t),this.navCtrl=n,this.toastCtrl=i,this.sanitizer=a,this.imagePreview="",this.currentPicture=""}return n(t,[{key:"ngOnInit",value:function(){this.initCamera(),this.loadCurrentPicture()}},{key:"ionViewWillLeave",value:function(){this.stopStream()}},{key:"initCamera",value:function(){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.imagePreview="",!("mediaDevices"in navigator)||!navigator.mediaDevices.getUserMedia){e.next=7;break}return e.next=3,navigator.mediaDevices.getUserMedia({video:{width:200,height:200}});case 3:t=e.sent,this.video.nativeElement.srcObject=t,e.next=12;break;case 7:return e.next=9,this.toastCtrl.create({message:"Camera not supported :(",duration:3e3});case 9:return n=e.sent,e.next=12,n.present();case 12:case"end":return e.stop()}}),e,this)})))}},{key:"handleClick",value:function(){this.navCtrl.navigateBack("tabs/profile")}},{key:"takePicture",value:function(){var e=this.video.nativeElement,t=this.canvas.nativeElement;t.height=200,t.width=200,t.getContext("2d").drawImage(e,0,0,200,200);var n=t.toDataURL();this.imagePreview=this.sanitizer.bypassSecurityTrustUrl(n)}},{key:"loadCurrentPicture",value:function(){this.currentPicture=R.get()||""}},{key:"save",value:function(){this.currentPicture=this.imagePreview,R.set(this.canvas.nativeElement.toDataURL())}},{key:"stopStream",value:function(){this.video&&(this.video.nativeElement.srcObject.getTracks().forEach((function(e){return e.stop()})),this.video.nativeElement.srcObject=null)}}]),t}(),D.\u0275fac=function(e){return new(e||D)(b.Hb(o.I),b.Hb(o.M),b.Hb(Z.b))},D.\u0275cmp=b.Bb({type:D,selectors:[["picture"]],viewQuery:function(e,t){var n;1&e&&(b.ic(N,!0),b.ic(O,!0)),2&e&&(b.ac(n=b.Vb())&&(t.canvas=n.first),b.ac(n=b.Vb())&&(t.video=n.first))},decls:19,vars:7,consts:[["slot","start"],[3,"click"],[1,"preview-container"],["canvas",""],["autoplay","","playsinline","","muted","",4,"ngIf"],[3,"src",4,"ngIf"],[1,"actions-container"],[3,"click",4,"ngIf"],["color","success",3,"click",4,"ngIf"],[1,"profile-picture-container"],["name","image",4,"ngIf"],["autoplay","","playsinline","","muted",""],["video",""],[3,"src"],["color","success",3,"click"],["name","image"]],template:function(e,t){1&e&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-buttons",0),b.Mb(3,"ion-back-button",1),b.Ub("click",(function(){return t.handleClick()})),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(4,"ion-content"),b.Mb(5,"div",2),b.Ib(6,"canvas",null,3),b.ec(8,U,2,0,"video",4),b.ec(9,E,1,1,"img",5),b.Lb(),b.Mb(10,"div",6),b.ec(11,W,2,0,"ion-button",7),b.ec(12,j,2,0,"ion-button",7),b.ec(13,F,2,0,"ion-button",8),b.Lb(),b.Mb(14,"div",9),b.Mb(15,"ion-label"),b.fc(16," Current Picture "),b.Lb(),b.ec(17,S,1,1,"img",5),b.ec(18,_,1,0,"ion-icon",10),b.Lb(),b.Lb()),2&e&&(b.xb(8),b.Zb("ngIf",!t.imagePreview),b.xb(1),b.Zb("ngIf",t.imagePreview),b.xb(2),b.Zb("ngIf",!t.imagePreview),b.xb(1),b.Zb("ngIf",t.imagePreview),b.xb(1),b.Zb("ngIf",t.imagePreview),b.xb(4),b.Zb("ngIf",t.currentPicture),b.xb(1),b.Zb("ngIf",!t.currentPicture))},directives:[o.m,o.F,o.g,o.c,o.d,o.l,c.i,o.t,o.f,o.n],styles:[".preview-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.preview-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.preview-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:auto}.actions-container[_ngcontent-%COMP%], .profile-picture-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.profile-picture-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center;margin-top:50px}"]}),D)},{path:"pokemon",component:a("xKsE").a}],V=((H=function t(){e(this,t)}).\u0275mod=b.Fb({type:H}),H.\u0275inj=b.Eb({factory:function(e){return new(e||H)},imports:[[s.i.forChild(T)],s.i]}),H),B=a("7x4Y"),J=((K=function t(){e(this,t)}).\u0275mod=b.Fb({type:K}),K.\u0275inj=b.Eb({factory:function(e){return new(e||K)},imports:[[o.G,c.b,r.a,V,B.a]]}),K)}}])}();