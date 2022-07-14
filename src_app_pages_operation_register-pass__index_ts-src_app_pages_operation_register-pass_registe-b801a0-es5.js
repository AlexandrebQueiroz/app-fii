(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_operation_register-pass__index_ts-src_app_pages_operation_register-pass_registe-b801a0"], {
    /***/
    66471:
    /*!*********************************************************!*\
      !*** ./src/app/pages/operation/register-pass/_index.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPassRoutingModule": function RegisterPassRoutingModule() {
          return (
            /* reexport safe */
            _register_pass_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPassRoutingModule
          );
        },

        /* harmony export */
        "RegisterpassComponent": function RegisterpassComponent() {
          return (
            /* reexport safe */
            _register_pass_component__WEBPACK_IMPORTED_MODULE_1__.RegisterpassComponent
          );
        },

        /* harmony export */
        "RegisterPassModule": function RegisterPassModule() {
          return (
            /* reexport safe */
            _register_pass_module__WEBPACK_IMPORTED_MODULE_2__.RegisterPassModule
          );
        },

        /* harmony export */
        "RegisterPassService": function RegisterPassService() {
          return (
            /* reexport safe */
            _register_pass_service__WEBPACK_IMPORTED_MODULE_3__.RegisterPassService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _register_pass_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-pass-routing.module */
      3082);
      /* harmony import */


      var _register_pass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register-pass.component */
      8686);
      /* harmony import */


      var _register_pass_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register-pass.module */
      11050);
      /* harmony import */


      var _register_pass_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register-pass.service */
      54756);
      /***/

    },

    /***/
    3082:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/operation/register-pass/register-pass-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPassRoutingModule": function RegisterPassRoutingModule() {
          return (
            /* binding */
            _RegisterPassRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _register_pass_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-pass.component */
      8686);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _register_pass_component__WEBPACK_IMPORTED_MODULE_0__.RegisterpassComponent
      }];

      var _RegisterPassRoutingModule = /*#__PURE__*/_createClass(function _RegisterPassRoutingModule() {
        _classCallCheck(this, _RegisterPassRoutingModule);
      });

      _RegisterPassRoutingModule.ɵfac = function RegisterPassRoutingModule_Factory(t) {
        return new (t || _RegisterPassRoutingModule)();
      };

      _RegisterPassRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _RegisterPassRoutingModule
      });
      _RegisterPassRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_RegisterPassRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    8686:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/operation/register-pass/register-pass.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterpassComponent": function RegisterpassComponent() {
          return (
            /* binding */
            _RegisterpassComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _register_pass_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-pass.service */
      54756);
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

      function RegisterpassComponent_nb_select_17_nb_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r5.initial);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "is-valid": a0,
          "is-invalid": a1
        };
      };

      function RegisterpassComponent_nb_select_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterpassComponent_nb_select_17_nb_option_1_Template, 2, 2, "nb-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.getStatus(ctx_r0.uf))("formControl", ctx_r0.uf)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx_r0.uf.valid && ctx_r0.uf.touched, ctx_r0.uf.invalid && ctx_r0.uf.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.states);
        }
      }

      function RegisterpassComponent_nb_select_20_nb_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r7.initial);
        }
      }

      function RegisterpassComponent_nb_select_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterpassComponent_nb_select_20_nb_option_1_Template, 2, 2, "nb-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r1.getStatus(ctx_r1.uf))("formControl", ctx_r1.uf)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx_r1.uf.valid && ctx_r1.uf.touched, ctx_r1.uf.invalid && ctx_r1.uf.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.states);
        }
      }

      function RegisterpassComponent_nb_select_23_nb_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r9.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r9.initial);
        }
      }

      function RegisterpassComponent_nb_select_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterpassComponent_nb_select_23_nb_option_1_Template, 2, 2, "nb-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r2.getStatus(ctx_r2.uf))("formControl", ctx_r2.uf)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx_r2.uf.valid && ctx_r2.uf.touched, ctx_r2.uf.invalid && ctx_r2.uf.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.states);
        }
      }

      function RegisterpassComponent_nb_select_44_nb_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r11.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r11.initial);
        }
      }

      function RegisterpassComponent_nb_select_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterpassComponent_nb_select_44_nb_option_1_Template, 2, 2, "nb-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r3.getStatus(ctx_r3.uf))("formControl", ctx_r3.uf)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx_r3.uf.valid && ctx_r3.uf.touched, ctx_r3.uf.invalid && ctx_r3.uf.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.states);
        }
      }

      var _RegisterpassComponent = /*#__PURE__*/function () {
        function _RegisterpassComponent(fb, service, toastrService, router) {
          _classCallCheck(this, _RegisterpassComponent);

          this.fb = fb;
          this.service = service;
          this.toastrService = toastrService;
          this.router = router;
          this.submitted = false;
          this.loading = false;
          this.states = [];
          this.bookIcon = {
            icon: 'book-outline',
            pack: 'eva'
          };
          this.carIcon = {
            icon: 'car-outline',
            pack: 'eva'
          };
        }

        _createClass(_RegisterpassComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
            this.initStates();
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
              uf: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
              regress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
              plate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
            });
          }
        }, {
          key: "initStates",
          value: function initStates() {
            var _this2 = this;

            this.service.getStates().subscribe(function (states) {
              _this2.states = states;
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
          key: "uf",
          get: function get() {
            return this.form.get('uf');
          }
        }, {
          key: "regress",
          get: function get() {
            return this.form.get('regress');
          }
        }, {
          key: "plate",
          get: function get() {
            return this.form.get('plate');
          }
        }]);

        return _RegisterpassComponent;
      }();

      _RegisterpassComponent.ɵfac = function RegisterpassComponent_Factory(t) {
        return new (t || _RegisterpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_register_pass_service__WEBPACK_IMPORTED_MODULE_0__.RegisterPassService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _RegisterpassComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _RegisterpassComponent,
        selectors: [["ngx-registerpass"]],
        decls: 54,
        vars: 29,
        consts: [["novalidate", "", 1, "needs-validation", 3, "formGroup", "nbSpinner", "ngSubmit"], [1, "row"], [1, "col-md-6", "offset-md-2", "col-12"], [1, "text-center"], ["fullWidth", ""], [3, "tabIcon"], [1, "row", "text-center"], [1, "label"], ["fullWidth", "", "class", "form-group", "placeholder", "Selecione", 3, "status", "formControl", "ngClass", 4, "ngIf"], [1, "col-12"], ["id", "regress", "fullWidth", "", "title", "Retorno", "name", "reactive-forms-group", 3, "formControl", "status", "ngClass"], ["value", "1"], ["value", "2"], [1, "row", "form-group"], ["for", "plate", 1, "label"], ["id", "plate", "type", "text", "formControlName", "plate", "nbInput", "", "fullWidth", "", "placeholder", "Placa do veiculos", 1, "form-group", 3, "status", "ngClass"], ["type", "text", "formControlName", "plate", "nbInput", "", "fullWidth", "", "placeholder", "Placa do veiculos", 1, "form-group", 3, "status", "ngClass"], ["type", "text", "formControlName", "plate", "nbInput", "", "fullWidth", "", "placeholder", "Observa\xE7\xF5es", 1, "form-group", 3, "status", "ngClass"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large"], ["fullWidth", "", "placeholder", "Selecione", 1, "form-group", 3, "status", "formControl", "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function RegisterpassComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterpassComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-tabset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Dados da Passagem");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Unidade Fiscal*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegisterpassComponent_nb_select_17_Template, 2, 7, "nb-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Sentido da Via*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RegisterpassComponent_nb_select_20_Template, 2, 7, "nb-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "UF de destino:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterpassComponent_nb_select_23_Template, 2, 7, "nb-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Retorno?:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nb-radio-group", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nb-radio", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sim");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nb-radio", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "N\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nb-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Dados do Transporte");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Placa do Veiculo*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "UF Veiculos*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RegisterpassComponent_nb_select_44_Template, 2, 7, "nb-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Placa Carreta:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Observa\xE7\xF5es:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "                    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Registrar Passagem ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form)("nbSpinner", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabIcon", ctx.bookIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.regress)("status", ctx.getStatus(ctx.regress))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c0, ctx.regress.valid && ctx.regress.touched, ctx.regress.invalid && ctx.regress.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabIcon", ctx.carIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.getStatus(ctx.plate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](20, _c0, ctx.plate.valid && ctx.plate.touched, ctx.plate.invalid && ctx.plate.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.getStatus(ctx.plate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c0, ctx.plate.valid && ctx.plate.touched, ctx.plate.invalid && ctx.plate.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.getStatus(ctx.plate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](26, _c0, ctx.plate.valid && ctx.plate.touched, ctx.plate.invalid && ctx.plate.touched));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSpinnerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTabComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbRadioComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbOptionComponent],
        styles: ["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBhc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJyZWdpc3Rlci1wYXNzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICA6aG9zdCBuYi10YWIge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gIH0iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    11050:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/operation/register-pass/register-pass.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPassModule": function RegisterPassModule() {
          return (
            /* binding */
            _RegisterPassModule
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
      66471);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RegisterPassModule = /*#__PURE__*/_createClass(function _RegisterPassModule() {
        _classCallCheck(this, _RegisterPassModule);
      });

      _RegisterPassModule.ɵfac = function RegisterPassModule_Factory(t) {
        return new (t || _RegisterPassModule)();
      };

      _RegisterPassModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _RegisterPassModule
      });
      _RegisterPassModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [_index__WEBPACK_IMPORTED_MODULE_0__.RegisterPassService],
        imports: [[_index__WEBPACK_IMPORTED_MODULE_0__.RegisterPassRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbRadioModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_RegisterPassModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_0__.RegisterpassComponent],
          imports: [_index__WEBPACK_IMPORTED_MODULE_0__.RegisterPassRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSpinnerModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTabsetModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbRadioModule]
        });
      })();
      /***/

    },

    /***/
    54756:
    /*!************************************************************************!*\
      !*** ./src/app/pages/operation/register-pass/register-pass.service.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPassService": function RegisterPassService() {
          return (
            /* binding */
            _RegisterPassService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _RegisterPassService = /*#__PURE__*/function () {
        function _RegisterPassService(http) {
          _classCallCheck(this, _RegisterPassService);

          this.http = http;
        }

        _createClass(_RegisterPassService, [{
          key: "getUrl",
          value: function getUrl() {
            return "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, "/register-pass");
          }
        }, {
          key: "getStates",
          value: function getStates() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([{
              name: 'AC',
              initial: 'Acre'
            }, {
              name: 'AL',
              initial: 'Alagoas'
            }, {
              name: 'AP',
              initial: 'Amapá'
            }, {
              name: 'AM',
              initial: 'Amazonas'
            }, {
              name: 'BA',
              initial: 'Bahia'
            }, {
              name: 'CE',
              initial: 'Ceara'
            }, {
              name: 'DF',
              initial: 'Distrito Federal'
            }, {
              name: 'ES',
              initial: 'Espírito Santo'
            }, {
              name: 'GO',
              initial: 'Goiás'
            }, {
              name: 'MA',
              initial: 'Maranhão'
            }, {
              name: 'MT',
              initial: 'Mato Grosso'
            }, {
              name: 'MS',
              initial: 'Mato Grosso do Sul'
            }, {
              name: 'MG',
              initial: 'Minas Gerais'
            }, {
              name: 'PA',
              initial: 'Pará'
            }, {
              name: 'PB',
              initial: 'Paraíba'
            }, {
              name: 'PR',
              initial: 'Paraná'
            }, {
              name: 'PE',
              initial: 'Pernambuco'
            }, {
              name: 'PI',
              initial: 'Piauí'
            }, {
              name: 'RJ',
              initial: 'Rio de Janeiro'
            }, {
              name: 'RN',
              initial: 'Rio Grande do Norte'
            }, {
              name: 'RS',
              initial: 'Rio Grande do Sul'
            }, {
              name: 'RO',
              initial: 'Rondônia'
            }, {
              name: 'RR',
              initial: 'Roraima'
            }, {
              name: 'SC',
              initial: 'Santa Catarina'
            }, {
              name: 'SP',
              initial: 'São Paulo'
            }, {
              name: 'SE',
              initial: 'Sergipe'
            }, {
              name: 'TO',
              initial: 'Tocantins'
            }]);
          }
        }, {
          key: "save",
          value: function save(t) {
            return this.http.post(this.getUrl(), t);
          }
        }]);

        return _RegisterPassService;
      }();

      _RegisterPassService.ɵfac = function RegisterPassService_Factory(t) {
        return new (t || _RegisterPassService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _RegisterPassService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _RegisterPassService,
        factory: _RegisterPassService.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_operation_register-pass__index_ts-src_app_pages_operation_register-pass_registe-b801a0-es5.js.map