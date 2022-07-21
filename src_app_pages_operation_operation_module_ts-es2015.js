"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_operation_operation_module_ts"],{

/***/ 69204:
/*!*************************************************************!*\
  !*** ./src/app/pages/operation/operation-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationRoutingModule": function() { return /* binding */ OperationRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _operation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation.component */ 83550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{
        path: '',
        component: _operation_component__WEBPACK_IMPORTED_MODULE_0__.OperationComponent,
        children: [
            {
                path: 'alert',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_operation_alert_alert_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./alert/alert.module */ 34297))
                    .then(m => m.AlertModule),
            },
            {
                path: 'occurrence',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_operation_occurrence__index_ts-src_app_pages_operation_occurrence_occurrence_mo-2abdfd").then(__webpack_require__.bind(__webpack_require__, /*! ./occurrence/occurrence.module */ 28772))
                    .then(m => m.OccurrenceModule),
            },
            {
                path: 'oversight',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_operation_oversight__index_ts-src_app_pages_operation_oversight_oversight_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./oversight/oversight.module */ 6884))
                    .then(m => m.OversightModule),
            },
            {
                path: 'cte',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_operation_cte__index_ts-src_app_pages_operation_cte_cte_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cte/cte.module */ 59234))
                    .then(m => m.CteModule),
            },
            {
                path: 'blacklist',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_operation_blacklist__index_ts-src_app_pages_operation_blacklist_blacklist_compo-5d85d8").then(__webpack_require__.bind(__webpack_require__, /*! ./blacklist/blacklist.module */ 73623))
                    .then(m => m.BlacklistModule),
            },
            {
                path: 'register-pass',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_operation_register-pass__index_ts-src_app_pages_operation_register-pass_registe-b801a0").then(__webpack_require__.bind(__webpack_require__, /*! ./register-pass/register-pass.module */ 11050))
                    .then(m => m.RegisterPassModule),
            },
        ],
    }];
class OperationRoutingModule {
}
OperationRoutingModule.ɵfac = function OperationRoutingModule_Factory(t) { return new (t || OperationRoutingModule)(); };
OperationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OperationRoutingModule });
OperationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OperationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 83550:
/*!********************************************************!*\
  !*** ./src/app/pages/operation/operation.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationComponent": function() { return /* binding */ OperationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class OperationComponent {
}
OperationComponent.ɵfac = function OperationComponent_Factory(t) { return new (t || OperationComponent)(); };
OperationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperationComponent, selectors: [["ngx-operation"]], decls: 1, vars: 0, template: function OperationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 74125:
/*!*****************************************************!*\
  !*** ./src/app/pages/operation/operation.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationModule": function() { return /* binding */ OperationModule; }
/* harmony export */ });
/* harmony import */ var _operation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation-routing.module */ 69204);
/* harmony import */ var _operation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operation.component */ 83550);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class OperationModule {
}
OperationModule.ɵfac = function OperationModule_Factory(t) { return new (t || OperationModule)(); };
OperationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OperationModule });
OperationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _operation_routing_module__WEBPACK_IMPORTED_MODULE_0__.OperationRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OperationModule, { declarations: [_operation_component__WEBPACK_IMPORTED_MODULE_1__.OperationComponent], imports: [_operation_routing_module__WEBPACK_IMPORTED_MODULE_0__.OperationRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_operation_operation_module_ts-es2015.js.map