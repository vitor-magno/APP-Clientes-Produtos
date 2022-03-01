"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-clients_edit-clients_module_ts"],{

/***/ 7667:
/*!*************************************************************!*\
  !*** ./src/app/edit-clients/edit-clients-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClientsPageRoutingModule": () => (/* binding */ EditClientsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _edit_clients_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-clients.page */ 4793);




const routes = [
    {
        path: '',
        component: _edit_clients_page__WEBPACK_IMPORTED_MODULE_0__.EditClientsPage
    }
];
let EditClientsPageRoutingModule = class EditClientsPageRoutingModule {
};
EditClientsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditClientsPageRoutingModule);



/***/ }),

/***/ 5961:
/*!*****************************************************!*\
  !*** ./src/app/edit-clients/edit-clients.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClientsPageModule": () => (/* binding */ EditClientsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _edit_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-clients-routing.module */ 7667);
/* harmony import */ var _edit_clients_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-clients.page */ 4793);







let EditClientsPageModule = class EditClientsPageModule {
};
EditClientsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditClientsPageRoutingModule
        ],
        declarations: [_edit_clients_page__WEBPACK_IMPORTED_MODULE_1__.EditClientsPage]
    })
], EditClientsPageModule);



/***/ }),

/***/ 4793:
/*!***************************************************!*\
  !*** ./src/app/edit-clients/edit-clients.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClientsPage": () => (/* binding */ EditClientsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_clients_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-clients.page.html */ 7679);
/* harmony import */ var _edit_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-clients.page.scss */ 2060);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ 9134);
/* harmony import */ var _services_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading */ 5155);









let EditClientsPage = class EditClientsPage {
    constructor(loading, http, router, toastController, route, clientService) {
        this.loading = loading;
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.route = route;
        this.clientService = clientService;
        this.CodigoCliente = '';
        this.NomeCliente = '';
        this.CPF = '';
        this.Sexo = '';
        this.Email = '';
        this.route.queryParams.subscribe(params => {
            this.param1 = params['id'];
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let id;
            id = this.route.snapshot.paramMap.get("id");
            yield this.clientService.readById(this.param1).subscribe((client) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.dados = client;
                this.client = this.dados.resposta;
                this.clientesDados = yield client;
            }));
        });
    }
    f_CodigoCliente(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.CodigoCliente = event.detail.value;
        });
    }
    f_NomePergunta(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.NomeCliente = event.detail.value;
        });
    }
    f_Sexo(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.Sexo = event.detail.value;
        });
    }
    f_CPF(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.CPF = event.detail.value;
        });
    }
    f_Email(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.Email = event.detail.value;
        });
    }
    updateClient() {
        this.clientService.update(this.clientesDados).subscribe(() => {
            alert("Cliente atualizado com sucesso!");
            this.router.navigate(["/read-clients"]);
        });
    }
};
EditClientsPage.ctorParameters = () => [
    { type: _services_loading__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_api__WEBPACK_IMPORTED_MODULE_2__.ClientService }
];
EditClientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-clients',
        template: _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_clients_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditClientsPage);



/***/ }),

/***/ 7679:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/edit-clients/edit-clients.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar text-center color=\"primary\">\n  <ion-title class=\"ion-text-center\">\n    Editar Clientes\n  </ion-title>\n  <ion-back-button slot=\"start\" defaultHref=\"/home\"></ion-back-button>\n</ion-toolbar>\n\n<ion-content>\n  <html>\n  \n    <ion-card  >\n      <ion-item>\n        <ion-label position=\"floating\">Codigo Cliente: </ion-label>\n        <ion-input (ionChange)=\"f_CodigoCliente($event)\" [(ngModel)]=\"clientesDados.CodigoCliente\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Nome Cliente: </ion-label>\n        <ion-input (ionChange)=\"f_NomePergunta($event)\" [(ngModel)]=\"clientesDados.NomeCliente\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"floating\">CPF: </ion-label>\n        <ion-input (ionChange)=\"f_CPF($event)\" [(ngModel)]=\"clientesDados.CPF\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Sexo: </ion-label>\n        <ion-input (ionChange)=\"f_Sexo($event)\" [(ngModel)]=\"clientesDados.Sexo\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Email: </ion-label>\n        <ion-input (ionChange)=\"f_Email($event)\" [(ngModel)]=\"clientesDados.Email\"></ion-input>\n      </ion-item>\n\n      <ion-button (click)=\"updateClient()\" style=\"display: flex;\" color=\"success\" class=\"text-center\">\n        Editar\n      </ion-button>\n    </ion-card>\n  </html>\n</ion-content>");

/***/ }),

/***/ 2060:
/*!*****************************************************!*\
  !*** ./src/app/edit-clients/edit-clients.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNsaWVudHMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-clients_edit-clients_module_ts.js.map