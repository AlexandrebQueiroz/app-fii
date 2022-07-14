!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[225],{2225:function(t,i,r){r.r(i),r.d(i,{OccurrenceModule:function(){return b}});var o,l=r(38583),a=r(3679),c=r(25814),u=r(99763),d=r(37716),s=r(92340),f=r(91841),m=((o=function(){function t(n){e(this,t),this.http=n}return n(t,[{key:"getUrl",value:function(){return"".concat(s.N.baseUrl,"/occurrence")}},{key:"save",value:function(e){return this.http.post(this.getUrl(),e)}}]),t}()).\u0275fac=function(e){return new(e||o)(d.\u0275\u0275inject(f.eN))},o.\u0275prov=d.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o),p=function(e,t){return{"is-valid":e,"is-invalid":t}},v=[{path:"",component:function(){var t=function(){function t(n,i,r,o){e(this,t),this.fb=n,this.service=i,this.toastrService=r,this.router=o,this.submitted=!1,this.loading=!1}return n(t,[{key:"ngOnInit",value:function(){this.createForm()}},{key:"onSubmit",value:function(){var e=this;this.submitted=!0,!this.form.invalid&&(this.loading=!0,this.service.save(this.form.value).subscribe(function(){e.loading=!1,e.toastrService.success("Concluido","Concluido com Sucesso"),e.router.navigate(["./pages/operation/alert"])},function(){e.toastrService.danger("Erro","N\xe3o foi possivel comunicar com o servidor"),e.loading=!1}))}},{key:"createForm",value:function(){this.form=this.fb.group({plate:new a.NI(null,[a.kI.required]),direction:new a.NI(null,[a.kI.required]),vehicle:new a.NI(null,[])})}},{key:"getStatus",value:function(e){return this.submitted?e.valid?"success":"danger":"basic"}},{key:"plate",get:function(){return this.form.get("plate")}},{key:"direction",get:function(){return this.form.get("direction")}},{key:"vehicle",get:function(){return this.form.get("vehicle")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.\u0275\u0275directiveInject(a.qu),d.\u0275\u0275directiveInject(m),d.\u0275\u0275directiveInject(c.quB),d.\u0275\u0275directiveInject(u.F0))},t.\u0275cmp=d.\u0275\u0275defineComponent({type:t,selectors:[["ngx-occurrence"]],decls:26,vars:17,consts:[["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],[1,"row"],[1,"col-md-6","offset-md-2","col-12"],[1,"text-center"],[1,"row","form-group"],["for","placa",1,"label"],["id","placa","type","text","formControlName","plate","nbInput","","fullWidth","","placeholder","Placa",1,"form-control",3,"status","ngClass"],[1,"valid-feedback"],[1,"invalid-feedback"],["for","direction",1,"label"],["id","direction","type","text","formControlName","direction","nbInput","","fullWidth","","placeholder","Sentido",1,"form-control",3,"status","ngClass"],["id","vehicle","type","text","formControlName","vehicle","nbInput","","fullWidth","","placeholder","Tipo de veiculo",1,"form-control",3,"status","ngClass"],["nbButton","","fullWidth","","status","primary","size","large"]],template:function(e,t){1&e&&(d.\u0275\u0275elementStart(0,"form",0),d.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),d.\u0275\u0275elementStart(1,"div",1),d.\u0275\u0275elementStart(2,"div",2),d.\u0275\u0275elementStart(3,"nb-card"),d.\u0275\u0275elementStart(4,"nb-card-header",3),d.\u0275\u0275text(5," Ocorr\xeancias "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(6,"nb-card"),d.\u0275\u0275elementStart(7,"nb-card-body"),d.\u0275\u0275elementStart(8,"div",4),d.\u0275\u0275elementStart(9,"label",5),d.\u0275\u0275text(10,"Placa*:"),d.\u0275\u0275elementEnd(),d.\u0275\u0275element(11,"input",6),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(12,"div",7),d.\u0275\u0275text(13," Valido "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(14,"div",8),d.\u0275\u0275text(15," Invalido "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(16,"div",4),d.\u0275\u0275elementStart(17,"label",9),d.\u0275\u0275text(18,"Sentido*:"),d.\u0275\u0275elementEnd(),d.\u0275\u0275element(19,"input",10),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(20,"div",4),d.\u0275\u0275elementStart(21,"label",9),d.\u0275\u0275text(22,"Tipo de veiculo:"),d.\u0275\u0275elementEnd(),d.\u0275\u0275element(23,"input",11),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(24,"button",12),d.\u0275\u0275text(25," Concluir "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275property("formGroup",t.form)("nbSpinner",t.loading),d.\u0275\u0275advance(11),d.\u0275\u0275property("status",t.getStatus(t.plate))("ngClass",d.\u0275\u0275pureFunction2(8,p,t.plate.valid&&t.plate.touched,t.plate.invalid&&t.plate.touched)),d.\u0275\u0275advance(8),d.\u0275\u0275property("status",t.getStatus(t.direction))("ngClass",d.\u0275\u0275pureFunction2(11,p,t.direction.valid&&t.direction.touched,t.direction.invalid&&t.direction.touched)),d.\u0275\u0275advance(4),d.\u0275\u0275property("status",t.getStatus(t.vehicle))("ngClass",d.\u0275\u0275pureFunction2(14,p,t.vehicle.valid&&t.vehicle.touched,t.vehicle.invalid&&t.vehicle.touched)))},directives:[a._Y,a.JL,a.sg,c.Q7R,c.Asz,c.ndF,c.yKW,a.Fj,c.h8i,a.JJ,a.u,l.mk,c.DPz],encapsulation:2}),t}()}],h=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=d.\u0275\u0275defineInjector({imports:[[u.Bz.forChild(v)],u.Bz]}),t}(),b=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=d.\u0275\u0275defineInjector({providers:[m],imports:[[h,c.zyh,c.nKr,c.T2N,c.IIj,a.UX,c.uuI,l.ez]]}),t}()}}])}();