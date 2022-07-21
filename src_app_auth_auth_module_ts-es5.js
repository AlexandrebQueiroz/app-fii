(function () {
  "use strict";

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_auth_auth_module_ts"], {
    /***/
    40431:
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes
          );
        },

        /* harmony export */
        "NgxAuthRoutingModule": function NgxAuthRoutingModule() {
          return (
            /* binding */
            _NgxAuthRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      27571);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/login.component */
      78146);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _routes = [{
        path: '',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__.NbAuthComponent,
        children: [{
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.NgxLoginComponent
        }]
      }];

      var _NgxAuthRoutingModule = /*#__PURE__*/_createClass(function _NgxAuthRoutingModule() {
        _classCallCheck(this, _NgxAuthRoutingModule);
      });

      _NgxAuthRoutingModule.ɵfac = function NgxAuthRoutingModule_Factory(t) {
        return new (t || _NgxAuthRoutingModule)();
      };

      _NgxAuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _NgxAuthRoutingModule
      });
      _NgxAuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(_routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_NgxAuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    71674:
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxAuthModule": function NgxAuthModule() {
          return (
            /* binding */
            _NgxAuthModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-routing.module */
      40431);
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/auth */
      27571);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      78146);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NgxAuthModule = /*#__PURE__*/_createClass(function _NgxAuthModule() {
        _classCallCheck(this, _NgxAuthModule);
      });

      _NgxAuthModule.ɵfac = function NgxAuthModule_Factory(t) {
        return new (t || _NgxAuthModule)();
      };

      _NgxAuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _NgxAuthModule
      });
      _NgxAuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.NgxAuthRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbAlertModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCheckboxModule, _nebular_auth__WEBPACK_IMPORTED_MODULE_7__.NbAuthModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_NgxAuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.NgxLoginComponent],
          imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.NgxAuthRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbAlertModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCheckboxModule, _nebular_auth__WEBPACK_IMPORTED_MODULE_7__.NbAuthModule]
        });
      })();
      /***/

    },

    /***/
    78146:
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxLoginComponent": function NgxLoginComponent() {
          return (
            /* binding */
            _NgxLoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      27571);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      40465);

      function NgxLoginComponent_nb_alert_2_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r8);
        }
      }

      function NgxLoginComponent_nb_alert_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxLoginComponent_nb_alert_2_li_5_Template, 2, 1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
        }
      }

      function NgxLoginComponent_nb_alert_3_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r10);
        }
      }

      function NgxLoginComponent_nb_alert_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxLoginComponent_nb_alert_3_li_5_Template, 2, 1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
        }
      }

      function NgxLoginComponent_ng_container_11_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome \xE9 obrigat\xF3rio! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxLoginComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxLoginComponent_ng_container_11_p_1_Template, 2, 0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        }
      }

      function NgxLoginComponent_ng_container_15_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Senha \xE9 obrigat\xF3rio! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxLoginComponent_ng_container_15_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Password should contain from ", ctx_r13.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r13.getConfigValue("forms.validation.password.maxLength"), " characters ");
        }
      }

      function NgxLoginComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxLoginComponent_ng_container_15_p_1_Template, 2, 0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxLoginComponent_ng_container_15_p_2_Template, 2, 2, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.minlength) || (_r5.errors == null ? null : _r5.errors.maxlength));
        }
      }

      var _NgxLoginComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC) {
        _inherits(_NgxLoginComponent, _nebular_auth__WEBPAC);

        var _super = _createSuper(_NgxLoginComponent);

        function _NgxLoginComponent() {
          _classCallCheck(this, _NgxLoginComponent);

          return _super.apply(this, arguments);
        }

        return _createClass(_NgxLoginComponent);
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__.NbLoginComponent);

      _NgxLoginComponent.ɵfac = /*@__PURE__*/function () {
        var ɵNgxLoginComponent_BaseFactory;
        return function NgxLoginComponent_Factory(t) {
          return (ɵNgxLoginComponent_BaseFactory || (ɵNgxLoginComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_NgxLoginComponent)))(t || _NgxLoginComponent);
        };
      }();

      _NgxLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgxLoginComponent,
        selectors: [["ngx-login"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 22,
        vars: 17,
        consts: [["id", "title", 1, "title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "email", "id", "input-email", "placeholder", "Nome", "fieldSize", "large", "autofocus", "", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["nbInput", "", "fullWidth", "", "name", "password", "type", "password", "id", "input-password", "placeholder", "Password", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function NgxLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Entrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxLoginComponent_nb_alert_2_Template, 6, 1, "nb-alert", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxLoginComponent_nb_alert_3_Template, 6, 1, "nb-alert", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NgxLoginComponent_Template_form_ngSubmit_4_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nome:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgxLoginComponent_ng_container_11_Template, 2, 1, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgxLoginComponent_ng_container_15_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Entrar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted || !_r2.valid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbAlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_auth_auth_module_ts-es5.js.map