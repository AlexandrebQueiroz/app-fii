(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_operation_occurrence__index_ts-src_app_pages_operation_occurrence_occurrence_mo-2abdfd"], {
    /***/
    77187:
    /*!******************************************************!*\
      !*** ./src/app/pages/operation/occurrence/_index.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OccurrenceRoutingModule": function OccurrenceRoutingModule() {
          return (
            /* reexport safe */
            _occurrence_routing_module__WEBPACK_IMPORTED_MODULE_0__.OccurrenceRoutingModule
          );
        },

        /* harmony export */
        "OccurrenceComponent": function OccurrenceComponent() {
          return (
            /* reexport safe */
            _occurrence_component__WEBPACK_IMPORTED_MODULE_1__.OccurrenceComponent
          );
        },

        /* harmony export */
        "OccurrenceModule": function OccurrenceModule() {
          return (
            /* reexport safe */
            _occurrence_module__WEBPACK_IMPORTED_MODULE_2__.OccurrenceModule
          );
        },

        /* harmony export */
        "OccurrenceService": function OccurrenceService() {
          return (
            /* reexport safe */
            _occurrence_service__WEBPACK_IMPORTED_MODULE_3__.OccurrenceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _occurrence_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./occurrence-routing.module */
      64418);
      /* harmony import */


      var _occurrence_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./occurrence.component */
      56375);
      /* harmony import */


      var _occurrence_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./occurrence.module */
      28772);
      /* harmony import */


      var _occurrence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./occurrence.service */
      61169);
      /***/

    },

    /***/
    64418:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/operation/occurrence/occurrence-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OccurrenceRoutingModule": function OccurrenceRoutingModule() {
          return (
            /* binding */
            _OccurrenceRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _occurrence_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./occurrence.component */
      56375);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _occurrence_component__WEBPACK_IMPORTED_MODULE_0__.OccurrenceComponent
      }];

      var _OccurrenceRoutingModule = /*#__PURE__*/_createClass(function _OccurrenceRoutingModule() {
        _classCallCheck(this, _OccurrenceRoutingModule);
      });

      _OccurrenceRoutingModule.ɵfac = function OccurrenceRoutingModule_Factory(t) {
        return new (t || _OccurrenceRoutingModule)();
      };

      _OccurrenceRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _OccurrenceRoutingModule
      });
      _OccurrenceRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_OccurrenceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    56375:
    /*!********************************************************************!*\
      !*** ./src/app/pages/operation/occurrence/occurrence.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OccurrenceComponent": function OccurrenceComponent() {
          return (
            /* binding */
            _OccurrenceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _occurrence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./occurrence.service */
      61169);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = function _c0(a0, a1) {
        return {
          "is-valid": a0,
          "is-invalid": a1
        };
      };

      var _OccurrenceComponent = /*#__PURE__*/function () {
        function _OccurrenceComponent(fb, service, toastrService, router) {
          _classCallCheck(this, _OccurrenceComponent);

          this.fb = fb;
          this.service = service;
          this.toastrService = toastrService;
          this.router = router;
          this.submitted = false;
          this.loading = false;
        }

        _createClass(_OccurrenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.submitted = true;

            if (this.form.invalid) {
              return;
            }

            this.loading = true;
            this.service.save(this.form.value).subscribe(function () {
              _this.loading = false;

              _this.toastrService.success('Concluido', 'Concluido com Sucesso');

              _this.reset();
            }, function () {
              _this.toastrService.danger('Erro', 'Não foi possivel comunicar com o servidor');

              _this.loading = false;
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this.submitted = false;
            this.form.reset();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.form = this.fb.group({
              plate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
              direction: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required //'/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/'
              ]),
              vehicle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [])
            });
          }
        }, {
          key: "getStatus",
          value: function getStatus(field) {
            if (!this.submitted) {
              return 'basic';
            }

            if (field.valid) {
              return 'success';
            }

            return 'danger';
          }
        }, {
          key: "plate",
          get: function get() {
            return this.form.get('plate');
          }
        }, {
          key: "direction",
          get: function get() {
            return this.form.get('direction');
          }
        }, {
          key: "vehicle",
          get: function get() {
            return this.form.get('vehicle');
          }
        }]);

        return _OccurrenceComponent;
      }();

      _OccurrenceComponent.ɵfac = function OccurrenceComponent_Factory(t) {
        return new (t || _OccurrenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_occurrence_service__WEBPACK_IMPORTED_MODULE_0__.OccurrenceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _OccurrenceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _OccurrenceComponent,
        selectors: [["ngx-occurrence"]],
        decls: 26,
        vars: 17,
        consts: [["novalidate", "", 1, "needs-validation", 3, "formGroup", "nbSpinner", "ngSubmit"], [1, "row"], [1, "col-md-6", "offset-md-2", "col-12"], [1, "text-center"], [1, "row", "form-group"], ["for", "placa", 1, "label"], ["id", "placa", "type", "text", "formControlName", "plate", "nbInput", "", "fullWidth", "", "placeholder", "Placa", 1, "form-control", 3, "status", "ngClass"], [1, "valid-feedback"], [1, "invalid-feedback"], ["for", "direction", 1, "label"], ["id", "direction", "type", "text", "formControlName", "direction", "nbInput", "", "fullWidth", "", "placeholder", "Sentido", 1, "form-control", 3, "status", "ngClass"], ["id", "vehicle", "type", "text", "formControlName", "vehicle", "nbInput", "", "fullWidth", "", "placeholder", "Tipo de veiculo", 1, "form-control", 3, "status", "ngClass"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large"]],
        template: function OccurrenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function OccurrenceComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-header", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Ocorr\xEAncias ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Placa*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Valido ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Invalido ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Sentido*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Tipo de veiculo:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Concluir ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form)("nbSpinner", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.getStatus(ctx.plate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, ctx.plate.valid && ctx.plate.touched, ctx.plate.invalid && ctx.plate.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.getStatus(ctx.direction))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, ctx.direction.valid && ctx.direction.touched, ctx.direction.invalid && ctx.direction.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.getStatus(ctx.vehicle))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c0, ctx.vehicle.valid && ctx.vehicle.touched, ctx.vehicle.invalid && ctx.vehicle.touched));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSpinnerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    28772:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/operation/occurrence/occurrence.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OccurrenceModule": function OccurrenceModule() {
          return (
            /* binding */
            _OccurrenceModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_index */
      77187);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _OccurrenceModule = /*#__PURE__*/_createClass(function _OccurrenceModule() {
        _classCallCheck(this, _OccurrenceModule);
      });

      _OccurrenceModule.ɵfac = function OccurrenceModule_Factory(t) {
        return new (t || _OccurrenceModule)();
      };

      _OccurrenceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _OccurrenceModule
      });
      _OccurrenceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [_index__WEBPACK_IMPORTED_MODULE_0__.OccurrenceService],
        imports: [[_index__WEBPACK_IMPORTED_MODULE_0__.OccurrenceRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_OccurrenceModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_0__.OccurrenceComponent],
          imports: [_index__WEBPACK_IMPORTED_MODULE_0__.OccurrenceRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
        });
      })();
      /***/

    },

    /***/
    61169:
    /*!******************************************************************!*\
      !*** ./src/app/pages/operation/occurrence/occurrence.service.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OccurrenceService": function OccurrenceService() {
          return (
            /* binding */
            _OccurrenceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _OccurrenceService = /*#__PURE__*/function () {
        function _OccurrenceService(http) {
          _classCallCheck(this, _OccurrenceService);

          this.http = http;
        }

        _createClass(_OccurrenceService, [{
          key: "getUrl",
          value: function getUrl() {
            return "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, "/occurrence");
          }
        }, {
          key: "save",
          value: function save(t) {
            return this.http.post(this.getUrl(), t);
          }
        }]);

        return _OccurrenceService;
      }();

      _OccurrenceService.ɵfac = function OccurrenceService_Factory(t) {
        return new (t || _OccurrenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _OccurrenceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _OccurrenceService,
        factory: _OccurrenceService.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_operation_occurrence__index_ts-src_app_pages_operation_occurrence_occurrence_mo-2abdfd-es5.js.map