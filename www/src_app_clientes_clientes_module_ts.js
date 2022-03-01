"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_clientes_clientes_module_ts"],{

/***/ 4735:
/*!*****************************************************!*\
  !*** ./src/app/clientes/clientes-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageRoutingModule": () => (/* binding */ ClientesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes.page */ 3646);




const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_0__.ClientesPage
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ 6035:
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageModule": () => (/* binding */ ClientesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes-routing.module */ 4735);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page */ 3646);







let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientesPageRoutingModule
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_1__.ClientesPage]
    })
], ClientesPageModule);



/***/ }),

/***/ 3646:
/*!*******************************************!*\
  !*** ./src/app/clientes/clientes.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPage": () => (/* binding */ ClientesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./clientes.page.html */ 9870);
/* harmony import */ var _clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page.scss */ 502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ 9134);
/* harmony import */ var _services_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading */ 5155);









let ClientesPage = class ClientesPage {
    constructor(router, toastController, loading, alertController, http, clientService) {
        this.router = router;
        this.toastController = toastController;
        this.loading = loading;
        this.alertController = alertController;
        this.http = http;
        this.clientService = clientService;
        this.CodigoCliente = '';
        this.NomeCliente = '';
        this.CPF = '';
        this.Sexo = '';
        this.Email = '';
        this.Liberado = false;
        this.client = {
            CodigoCliente: this.CodigoCliente,
            Nome: this.NomeCliente,
            CPF: this.CPF,
            Sexo: this.Sexo,
            Email: this.Email
        };
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this.initialiseInvites();
            }
        });
    }
    ngOnInit() {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                "x-access-token": localStorage.getItem("token"),
            }),
        };
    }
    initialiseInvites() {
        this.CodigoCliente = '';
        this.NomeCliente = '';
        this.CPF = '';
        this.Sexo = '';
        this.Email = '';
        this.Liberado = false;
    }
    f_CodigoCliente(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.CodigoCliente = evento.detail.value;
            this.verificaDados();
        });
    }
    f_NomeCliente(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.NomeCliente = evento.detail.value;
            this.verificaDados();
        });
    }
    f_Sexo(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.Sexo = evento.detail.value;
            this.verificaDados();
        });
    }
    f_CPF(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.CPF = evento.detail.value;
            this.verificaDados();
        });
    }
    f_Email(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.Email = evento.detail.value;
            this.verificaDados();
        });
    }
    verificaDados() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.CodigoCliente && this.NomeCliente && this.CPF && this.Sexo && this.Email)
                this.Liberado = true;
        });
    }
    createClient() {
        this.client = {
            CodigoCliente: this.CodigoCliente,
            Nome: this.NomeCliente,
            CPF: this.CPF,
            Sexo: this.Sexo,
            Email: this.Email
        };
        this.clientService.create(this.client).subscribe(() => {
            alert("Cliente criado");
            this.router.navigate(['/home']);
            document.location.reload();
        });
    }
};
ClientesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _services_loading__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _services_api__WEBPACK_IMPORTED_MODULE_2__.ClientService }
];
ClientesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-clientes',
        template: _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientesPage);



/***/ }),

/***/ 9870:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/clientes/clientes.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar text-center color=\"primary\">\n  <ion-title class=\"ion-text-center\">\n\n    Adicionar Cliente\n\n  </ion-title>\n  <ion-back-button slot=\"start\" defaultHref=\"/home\"></ion-back-button>\n</ion-toolbar>\n<ion-content>\n  <html>\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\">Digite o Código do Cliente:</ion-label>\n      <ion-input placeholder=\"Digite o nome do código do cliente...\" (ionChange)=\"f_CodigoCliente($event)\" [(ngModel)]=\"CodigoCliente\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Digite o Nome do Cliente:</ion-label>\n      <ion-input placeholder=\"Digite o nome do nome do cliente...\" (ionChange)=\"f_NomeCliente($event)\" [(ngModel)]=\"NomeCliente\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Sexo:</ion-label>\n      <ion-input placeholder=\"Digite o Sexo do Cliente...\" (ionChange)=\"f_Sexo($event)\" [(ngModel)]=\"Sexo\"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">CPF:</ion-label>\n      <ion-input placeholder=\"Digite o CPF do Cliente...\" (ionChange)=\"f_CPF($event)\" [(ngModel)]=\"CPF\"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Email:</ion-label>\n      <ion-input placeholder=\"Digite o Email do cliente...\" (ionChange)=\"f_Email($event)\" [(ngModel)]=\"Email\"></ion-input>\n    </ion-item>\n\n\n    <ion-button color=\"success\" class=\"text-center\" style=\"display: flex;\" (click)=\"createClient()\">\n      Adicionar\n    </ion-button>\n  </ion-card>\n\n  </html>\n</ion-content>");

/***/ }),

/***/ 502:
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_clientes_clientes_module_ts.js.map