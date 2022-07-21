"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_operation_register-pass__index_ts-src_app_pages_operation_register-pass_registe-b801a0"],{

/***/ 66471:
/*!*********************************************************!*\
  !*** ./src/app/pages/operation/register-pass/_index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPassRoutingModule": function() { return /* reexport safe */ _register_pass_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPassRoutingModule; },
/* harmony export */   "RegisterpassComponent": function() { return /* reexport safe */ _register_pass_component__WEBPACK_IMPORTED_MODULE_1__.RegisterpassComponent; },
/* harmony export */   "RegisterPassModule": function() { return /* reexport safe */ _register_pass_module__WEBPACK_IMPORTED_MODULE_2__.RegisterPassModule; },
/* harmony export */   "RegisterPassService": function() { return /* reexport safe */ _register_pass_service__WEBPACK_IMPORTED_MODULE_3__.RegisterPassService; }
/* harmony export */ });
/* harmony import */ var _register_pass_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-pass-routing.module */ 3082);
/* harmony import */ var _register_pass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-pass.component */ 8686);
/* harmony import */ var _register_pass_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-pass.module */ 11050);
/* harmony import */ var _register_pass_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-pass.service */ 54756);






/***/ }),

/***/ 3082:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/operation/register-pass/register-pass-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPassRoutingModule": function() { return /* binding */ RegisterPassRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _register_pass_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-pass.component */ 8686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{
        path: '',
        component: _register_pass_component__WEBPACK_IMPORTED_MODULE_0__.RegisterpassComponent,
    }];
class RegisterPassRoutingModule {
}
RegisterPassRoutingModule.ɵfac = function RegisterPassRoutingModule_Factory(t) { return new (t || RegisterPassRoutingModule)(); };
RegisterPassRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegisterPassRoutingModule });
RegisterPassRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterPassRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8686:
/*!**************************************************************************!*\
  !*** ./src/app/pages/operation/register-pass/register-pass.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterpassComponent": function() { return /* binding */ RegisterpassComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _register_pass_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-pass.service */ 54756);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);







const _c0 = ["tabset"];
const _c1 = ["tabOne"];
const _c2 = ["tabTwo"];
function RegisterpassComponent_nb_select_19_nb_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r8.initial);
} }
const _c3 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function RegisterpassComponent_nb_select_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterpassComponent_nb_select_19_nb_option_1_Template, 2, 2, "nb-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r2.getStatus(ctx_r2.uf))("formControl", ctx_r2.uf)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c3, ctx_r2.uf.valid && ctx_r2.uf.touched, ctx_r2.uf.invalid && ctx_r2.uf.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.states);
} }
function RegisterpassComponent_nb_select_22_nb_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r10.initial);
} }
function RegisterpassComponent_nb_select_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterpassComponent_nb_select_22_nb_option_1_Template, 2, 2, "nb-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r3.getStatus(ctx_r3.direction))("formControl", ctx_r3.direction)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c3, ctx_r3.direction.valid && ctx_r3.direction.touched, ctx_r3.direction.invalid && ctx_r3.direction.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.states);
} }
function RegisterpassComponent_nb_select_25_nb_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r12.initial);
} }
function RegisterpassComponent_nb_select_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterpassComponent_nb_select_25_nb_option_1_Template, 2, 2, "nb-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r4.getStatus(ctx_r4.ufDestiny))("formControl", ctx_r4.ufDestiny)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c3, ctx_r4.ufDestiny.valid && ctx_r4.ufDestiny.touched, ctx_r4.ufDestiny.invalid && ctx_r4.ufDestiny.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.states);
} }
function RegisterpassComponent_nb_select_47_nb_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r14.initial);
} }
function RegisterpassComponent_nb_select_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterpassComponent_nb_select_47_nb_option_1_Template, 2, 2, "nb-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r6.getStatus(ctx_r6.ufCar))("formControl", ctx_r6.ufCar)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c3, ctx_r6.ufCar.valid && ctx_r6.ufCar.touched, ctx_r6.ufCar.invalid && ctx_r6.ufCar.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.states);
} }
class RegisterpassComponent {
    constructor(fb, service, toastrService, router) {
        this.fb = fb;
        this.service = service;
        this.toastrService = toastrService;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.states = [];
        this.bookIcon = { icon: 'book-outline', pack: 'eva' };
        this.carIcon = { icon: 'car-outline', pack: 'eva' };
    }
    ngOnInit() {
        this.createForm();
        this.initStates();
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            this.validTab();
            return;
        }
        this.loading = true;
        this.service.save(this.form.value).subscribe(() => {
            this.loading = false;
            this.toastrService.success('', 'Concluido com Sucesso');
            this.limpar();
        }, () => {
            this.toastrService.danger('Erro', 'Não foi possivel comunicar com o servidor');
            this.loading = false;
        });
    }
    validTab() {
        if (this.uf.valid &&
            this.direction.valid &&
            this.ufDestiny.valid &&
            this.regress.valid) {
            this.tabs.selectTab(this.tabTwo);
        }
    }
    limpar() {
        this.submitted = false;
        this.tabs.selectTab(this.tabOne);
        this.form.reset();
    }
    createForm() {
        this.form = this.fb.group({
            uf: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            ]),
            direction: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            ]),
            ufDestiny: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, []),
            regress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, []),
            plate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            ]),
            ufCar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            ]),
            ufCompanion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, []),
            observation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, []),
        });
    }
    initStates() {
        this.service.getStates().subscribe((states) => {
            this.states = states;
        });
    }
    getStatus(field) {
        if (!this.submitted) {
            return 'basic';
        }
        if (field.valid) {
            return 'success';
        }
        return 'danger';
    }
    get uf() {
        return this.form.get('uf');
    }
    get direction() {
        return this.form.get('direction');
    }
    get ufDestiny() {
        return this.form.get('ufDestiny');
    }
    get regress() {
        return this.form.get('regress');
    }
    get plate() {
        return this.form.get('plate');
    }
    get ufCar() {
        return this.form.get('ufCar');
    }
    get ufCompanion() {
        return this.form.get('ufCompanion');
    }
    get observation() {
        return this.form.get('observation');
    }
}
RegisterpassComponent.ɵfac = function RegisterpassComponent_Factory(t) { return new (t || RegisterpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_register_pass_service__WEBPACK_IMPORTED_MODULE_0__.RegisterPassService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RegisterpassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterpassComponent, selectors: [["ngx-registerpass"]], viewQuery: function RegisterpassComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabOne = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabTwo = _t.first);
    } }, decls: 57, vars: 29, consts: [["novalidate", "", 1, "needs-validation", 3, "formGroup", "nbSpinner", "ngSubmit"], [1, "row"], [1, "col-md-6", "offset-md-2", "col-12"], [1, "text-center"], ["fullWidth", ""], ["tabset", ""], ["tabTitle", "Dados da Passagem", "responsive", "", 3, "tabIcon"], ["tabOne", ""], [1, "row", "text-center"], [1, "label"], ["fullWidth", "", "class", "form-group", "placeholder", "Selecione", 3, "status", "formControl", "ngClass", 4, "ngIf"], [1, "col-12"], ["id", "regress", "fullWidth", "", "title", "Retorno", "name", "reactive-forms-group", 3, "formControl", "status", "ngClass"], ["value", "1"], ["value", "2"], ["tabTitle", "Dados do Transporte", "responsive", "", 3, "tabIcon"], ["tabTwo", ""], [1, "row", "form-group"], ["for", "plate", 1, "label"], ["id", "plate", "type", "text", "formControlName", "plate", "nbInput", "", "fullWidth", "", "placeholder", "Placa do veiculos", 1, "form-group", 3, "status", "ngClass"], ["type", "text", "formControlName", "ufCompanion", "nbInput", "", "fullWidth", "", "placeholder", "Placa do veiculos", 1, "form-group", 3, "status", "ngClass"], ["type", "text", "formControlName", "observation", "nbInput", "", "fullWidth", "", "placeholder", "Observa\u00E7\u00F5es", 1, "form-group", 3, "status", "ngClass"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large"], ["fullWidth", "", "placeholder", "Selecione", 1, "form-group", 3, "status", "formControl", "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function RegisterpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterpassComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-card-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Registrar Passagem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-tabset", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nb-tab", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Dados da Passagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Unidade Fiscal*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterpassComponent_nb_select_19_Template, 2, 7, "nb-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sentido da Via*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RegisterpassComponent_nb_select_22_Template, 2, 7, "nb-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "UF de destino:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegisterpassComponent_nb_select_25_Template, 2, 7, "nb-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Retorno?:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nb-radio-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nb-radio", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Sim");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nb-radio", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "N\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nb-tab", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Dados do Transporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Placa do Veiculo*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "UF Veiculos*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, RegisterpassComponent_nb_select_47_Template, 2, 7, "nb-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Placa Carreta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Observa\u00E7\u00F5es:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Registrar Passagem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form)("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabIcon", ctx.bookIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.regress)("status", ctx.getStatus(ctx.regress))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c3, ctx.regress.valid && ctx.regress.touched, ctx.regress.invalid && ctx.regress.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabIcon", ctx.carIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.getStatus(ctx.plate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](20, _c3, ctx.plate.valid && ctx.plate.touched, ctx.plate.invalid && ctx.plate.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.getStatus(ctx.ufCompanion))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c3, ctx.ufCompanion.valid && ctx.ufCompanion.touched, ctx.ufCompanion.invalid && ctx.ufCompanion.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.getStatus(ctx.observation))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](26, _c3, ctx.observation.valid && ctx.observation.touched, ctx.observation.invalid && ctx.observation.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSpinnerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTabComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbRadioComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbOptionComponent], styles: ["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBhc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJyZWdpc3Rlci1wYXNzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICA6aG9zdCBuYi10YWIge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gIH0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 11050:
/*!***********************************************************************!*\
  !*** ./src/app/pages/operation/register-pass/register-pass.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPassModule": function() { return /* binding */ RegisterPassModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_index */ 66471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





class RegisterPassModule {
}
RegisterPassModule.ɵfac = function RegisterPassModule_Factory(t) { return new (t || RegisterPassModule)(); };
RegisterPassModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegisterPassModule });
RegisterPassModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _index__WEBPACK_IMPORTED_MODULE_0__.RegisterPassService
    ], imports: [[
            _index__WEBPACK_IMPORTED_MODULE_0__.RegisterPassRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTabsetModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbRadioModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterPassModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_0__.RegisterpassComponent], imports: [_index__WEBPACK_IMPORTED_MODULE_0__.RegisterPassRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbRadioModule] }); })();


/***/ }),

/***/ 54756:
/*!************************************************************************!*\
  !*** ./src/app/pages/operation/register-pass/register-pass.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPassService": function() { return /* binding */ RegisterPassService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);




class RegisterPassService {
    constructor(http) {
        this.http = http;
    }
    getUrl() {
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/register-pass`;
    }
    getStates() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
            { name: 'AC', initial: 'Acre' },
            { name: 'AL', initial: 'Alagoas' },
            { name: 'AP', initial: 'Amapá' },
            { name: 'AM', initial: 'Amazonas' },
            { name: 'BA', initial: 'Bahia' },
            { name: 'CE', initial: 'Ceara' },
            { name: 'DF', initial: 'Distrito Federal' },
            { name: 'ES', initial: 'Espírito Santo' },
            { name: 'GO', initial: 'Goiás' },
            { name: 'MA', initial: 'Maranhão' },
            { name: 'MT', initial: 'Mato Grosso' },
            { name: 'MS', initial: 'Mato Grosso do Sul' },
            { name: 'MG', initial: 'Minas Gerais' },
            { name: 'PA', initial: 'Pará' },
            { name: 'PB', initial: 'Paraíba' },
            { name: 'PR', initial: 'Paraná' },
            { name: 'PE', initial: 'Pernambuco' },
            { name: 'PI', initial: 'Piauí' },
            { name: 'RJ', initial: 'Rio de Janeiro' },
            { name: 'RN', initial: 'Rio Grande do Norte' },
            { name: 'RS', initial: 'Rio Grande do Sul' },
            { name: 'RO', initial: 'Rondônia' },
            { name: 'RR', initial: 'Roraima' },
            { name: 'SC', initial: 'Santa Catarina' },
            { name: 'SP', initial: 'São Paulo' },
            { name: 'SE', initial: 'Sergipe' },
            { name: 'TO', initial: 'Tocantins' },
        ]);
    }
    save(t) {
        return this.http.post(this.getUrl(), t);
    }
}
RegisterPassService.ɵfac = function RegisterPassService_Factory(t) { return new (t || RegisterPassService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
RegisterPassService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegisterPassService, factory: RegisterPassService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_operation_register-pass__index_ts-src_app_pages_operation_register-pass_registe-b801a0-es2015.js.map