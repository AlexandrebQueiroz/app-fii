"use strict";(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[225],{2225:function(e,t,n){n.r(t),n.d(t,{OccurrenceModule:function(){return f}});var r=n(38583),i=n(3679),a=n(25814),o=n(99763),l=n(37716),c=n(92340),d=n(91841);let s=(()=>{class e{constructor(e){this.http=e}getUrl(){return`${c.N.baseUrl}/occurrence`}save(e){return this.http.post(this.getUrl(),e)}}return e.\u0275fac=function(t){return new(t||e)(l.\u0275\u0275inject(d.eN))},e.\u0275prov=l.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const u=function(e,t){return{"is-valid":e,"is-invalid":t}},m=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.fb=e,this.service=t,this.toastrService=n,this.router=r,this.submitted=!1,this.loading=!1}ngOnInit(){this.createForm()}onSubmit(){this.submitted=!0,!this.form.invalid&&(this.loading=!0,this.service.save(this.form.value).subscribe(()=>{this.loading=!1,this.toastrService.success("Exemplo","Exemplo de mensagem"),this.router.navigate(["./pages/operation/alert"])},()=>{this.toastrService.danger("Exemplo","Exemplo de mensagem"),this.loading=!1}))}createForm(){this.form=this.fb.group({plate:new i.NI(null,[i.kI.required]),direction:new i.NI(null,[i.kI.required])})}getStatus(e){return this.submitted?e.valid?"success":"danger":"basic"}get plate(){return this.form.get("plate")}get direction(){return this.form.get("direction")}}return e.\u0275fac=function(t){return new(t||e)(l.\u0275\u0275directiveInject(i.qu),l.\u0275\u0275directiveInject(s),l.\u0275\u0275directiveInject(a.quB),l.\u0275\u0275directiveInject(o.F0))},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["ngx-occurrence"]],decls:21,vars:12,consts:[["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],[1,"row"],[1,"col-md-6","offset-md-2","col-12"],[1,"text-center"],[1,"row","form-group"],["for","placa",1,"label"],["id","placa","type","text","formControlName","plate","nbInput","","fullWidth","","placeholder","Placa",1,"form-control",3,"status","ngClass"],[1,"valid-feedback"],[1,"invalid-feedback"],["for","direction",1,"label"],["id","direction","type","text","formControlName","direction","nbInput","","fullWidth","","placeholder","Sentido",1,"form-control",3,"status","ngClass"],["nbButton","","fullWidth","","status","primary","size","large"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"form",0),l.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),l.\u0275\u0275elementStart(1,"div",1),l.\u0275\u0275elementStart(2,"div",2),l.\u0275\u0275elementStart(3,"nb-card"),l.\u0275\u0275elementStart(4,"nb-card-header",3),l.\u0275\u0275text(5," Registrar ocorr\xeancia "),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(6,"nb-card-body"),l.\u0275\u0275elementStart(7,"div",4),l.\u0275\u0275elementStart(8,"label",5),l.\u0275\u0275text(9,"Placa"),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(10,"input",6),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(11,"div",7),l.\u0275\u0275text(12," Valido "),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(13,"div",8),l.\u0275\u0275text(14," Invalido "),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(15,"div",4),l.\u0275\u0275elementStart(16,"label",9),l.\u0275\u0275text(17,"Sentido"),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(18,"input",10),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(19,"button",11),l.\u0275\u0275text(20," Concluir "),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275property("formGroup",t.form)("nbSpinner",t.loading),l.\u0275\u0275advance(10),l.\u0275\u0275property("status",t.getStatus(t.plate))("ngClass",l.\u0275\u0275pureFunction2(6,u,t.plate.valid&&t.plate.touched,t.plate.invalid&&t.plate.touched)),l.\u0275\u0275advance(8),l.\u0275\u0275property("status",t.getStatus(t.direction))("ngClass",l.\u0275\u0275pureFunction2(9,u,t.direction.valid&&t.direction.touched,t.direction.invalid&&t.direction.touched)))},directives:[i._Y,i.JL,i.sg,a.Q7R,a.Asz,a.ndF,a.yKW,i.Fj,a.h8i,i.JJ,i.u,r.mk,a.DPz],encapsulation:2}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=l.\u0275\u0275defineInjector({imports:[[o.Bz.forChild(m)],o.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=l.\u0275\u0275defineInjector({providers:[s],imports:[[p,a.zyh,a.nKr,a.T2N,a.IIj,i.UX,a.uuI,r.ez]]}),e})()}}]);