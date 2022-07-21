(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_operation_oversight__index_ts-src_app_pages_operation_oversight_oversight_module_ts"], {
    /***/
    70363:
    /*!*****************************************************!*\
      !*** ./src/app/pages/operation/oversight/_index.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OversightRoutingModule": function OversightRoutingModule() {
          return (
            /* reexport safe */
            _oversight_routing_module__WEBPACK_IMPORTED_MODULE_0__.OversightRoutingModule
          );
        },

        /* harmony export */
        "OversightComponent": function OversightComponent() {
          return (
            /* reexport safe */
            _oversight_component__WEBPACK_IMPORTED_MODULE_1__.OversightComponent
          );
        },

        /* harmony export */
        "OversightModule": function OversightModule() {
          return (
            /* reexport safe */
            _oversight_module__WEBPACK_IMPORTED_MODULE_2__.OversightModule
          );
        },

        /* harmony export */
        "OversightService": function OversightService() {
          return (
            /* reexport safe */
            _oversight_service__WEBPACK_IMPORTED_MODULE_3__.OversightService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _oversight_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./oversight-routing.module */
      37418);
      /* harmony import */


      var _oversight_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./oversight.component */
      77901);
      /* harmony import */


      var _oversight_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./oversight.module */
      6884);
      /* harmony import */


      var _oversight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./oversight.service */
      51318);
      /***/

    },

    /***/
    37418:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/operation/oversight/oversight-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OversightRoutingModule": function OversightRoutingModule() {
          return (
            /* binding */
            _OversightRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _oversight_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./oversight.component */
      77901);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _oversight_component__WEBPACK_IMPORTED_MODULE_0__.OversightComponent
      }];

      var _OversightRoutingModule = /*#__PURE__*/_createClass(function _OversightRoutingModule() {
        _classCallCheck(this, _OversightRoutingModule);
      });

      _OversightRoutingModule.ɵfac = function OversightRoutingModule_Factory(t) {
        return new (t || _OversightRoutingModule)();
      };

      _OversightRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _OversightRoutingModule
      });
      _OversightRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_OversightRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    77901:
    /*!******************************************************************!*\
      !*** ./src/app/pages/operation/oversight/oversight.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OversightComponent": function OversightComponent() {
          return (
            /* binding */
            _OversightComponent
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


      var _oversight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./oversight.service */
      51318);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _OversightComponent = /*#__PURE__*/function () {
        function _OversightComponent(fb, service, toastrService, router) {
          _classCallCheck(this, _OversightComponent);

          this.fb = fb;
          this.service = service;
          this.toastrService = toastrService;
          this.router = router;
          this.submitted = false;
          this.loading = false;
        }

        _createClass(_OversightComponent, [{
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

              _this.router.navigate(['./pages/operation/alert']);
            }, function () {
              _this.toastrService.danger('Erro', 'Não foi possivel comunicar com o servidor');

              _this.loading = false;
            });
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

        return _OversightComponent;
      }();

      _OversightComponent.ɵfac = function OversightComponent_Factory(t) {
        return new (t || _OversightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_oversight_service__WEBPACK_IMPORTED_MODULE_0__.OversightService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _OversightComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _OversightComponent,
        selectors: [["ngx-oversight"]],
        decls: 26,
        vars: 0,
        consts: [[1, "text-center"], [1, "form-group"], ["nbButton", "", "fullWidth", "", "status", "basic", "disabled", "", "size", "large", 1, "form-control"], ["nbButton", "", "fullWidth", "", "status", "success", "size", "large", 1, "form-control", "form-group"]],
        template: function OversightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Resultado da fiscaliza\xE7\xE3o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-accordion", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Com Resultado ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Termo de Apreens\xE3o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Auto de infra\xE7\xE3o ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Sem Resultado ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Sem intercorr\xEAncia ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " N\xE3o identificado ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Concluir\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbAccordionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbAccordionItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbAccordionItemHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbAccordionItemBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    6884:
    /*!***************************************************************!*\
      !*** ./src/app/pages/operation/oversight/oversight.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OversightModule": function OversightModule() {
          return (
            /* binding */
            _OversightModule
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
      70363);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _OversightModule = /*#__PURE__*/_createClass(function _OversightModule() {
        _classCallCheck(this, _OversightModule);
      });

      _OversightModule.ɵfac = function OversightModule_Factory(t) {
        return new (t || _OversightModule)();
      };

      _OversightModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _OversightModule
      });
      _OversightModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [_index__WEBPACK_IMPORTED_MODULE_0__.OversightService],
        imports: [[_index__WEBPACK_IMPORTED_MODULE_0__.OversightRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbAccordionModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_OversightModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_0__.OversightComponent],
          imports: [_index__WEBPACK_IMPORTED_MODULE_0__.OversightRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbAccordionModule]
        });
      })();
      /***/

    },

    /***/
    51318:
    /*!****************************************************************!*\
      !*** ./src/app/pages/operation/oversight/oversight.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OversightService": function OversightService() {
          return (
            /* binding */
            _OversightService
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

      var _OversightService = /*#__PURE__*/function () {
        function _OversightService(http) {
          _classCallCheck(this, _OversightService);

          this.http = http;
        }

        _createClass(_OversightService, [{
          key: "getUrl",
          value: function getUrl() {
            return "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, "/oversight");
          }
        }, {
          key: "save",
          value: function save(t) {
            return this.http.post(this.getUrl(), t);
          }
        }]);

        return _OversightService;
      }();

      _OversightService.ɵfac = function OversightService_Factory(t) {
        return new (t || _OversightService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _OversightService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _OversightService,
        factory: _OversightService.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_operation_oversight__index_ts-src_app_pages_operation_oversight_oversight_module_ts-es5.js.map