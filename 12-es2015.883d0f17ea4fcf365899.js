(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{hO9l:function(t,o,e){"use strict";e.r(o),e.d(o,"TabsPageModule",(function(){return c}));var n=e("TEn/"),i=e("ofXK"),a=e("3Pt+"),r=e("tyNb"),l=e("fXoL");const s=[{path:"tabs",component:(()=>{class t{constructor(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l.Bb({type:t,selectors:[["app-tabs"]],decls:10,vars:0,consts:[["slot","bottom"],["tab","home"],["src","assets/pokeball-icon.svg"],["tab","profile"],["src","assets/profile-icon.svg",1,"profile-icon"]],template:function(t,o){1&t&&(l.Mb(0,"ion-tabs"),l.Mb(1,"ion-tab-bar",0),l.Mb(2,"ion-tab-button",1),l.Ib(3,"ion-icon",2),l.Mb(4,"ion-label"),l.fc(5,"Pokemon"),l.Lb(),l.Lb(),l.Mb(6,"ion-tab-button",3),l.Ib(7,"ion-icon",4),l.Mb(8,"ion-label"),l.fc(9,"Profile"),l.Lb(),l.Lb(),l.Lb(),l.Lb())},directives:[n.C,n.A,n.B,n.n,n.t],styles:[".profile-icon[_ngcontent-%COMP%]{font-size:50px}"]}),t})(),children:[{path:"home",loadChildren:()=>Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"ct+p")).then(t=>t.HomePageModule)},{path:"profile",loadChildren:()=>Promise.all([e.e(0),e.e(11)]).then(e.bind(null,"cRhG")).then(t=>t.ProfilePageModule)},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}];let b=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(o){return new(o||t)},imports:[[r.i.forChild(s)],r.i]}),t})(),c=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(o){return new(o||t)},imports:[[n.G,i.b,a.a,b]]}),t})()}}]);