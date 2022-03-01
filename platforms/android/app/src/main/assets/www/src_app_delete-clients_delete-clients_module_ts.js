"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_delete-clients_delete-clients_module_ts"],{

/***/ 8941:
/*!*****************************************************************!*\
  !*** ./src/app/delete-clients/delete-clients-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteClientsPageRoutingModule": () => (/* binding */ DeleteClientsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _delete_clients_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-clients.page */ 6253);




const routes = [
    {
        path: '',
        component: _delete_clients_page__WEBPACK_IMPORTED_MODULE_0__.DeleteClientsPage
    }
];
let DeleteClientsPageRoutingModule = class DeleteClientsPageRoutingModule {
};
DeleteClientsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeleteClientsPageRoutingModule);



/***/ }),

/***/ 2415:
/*!*********************************************************!*\
  !*** ./src/app/delete-clients/delete-clients.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteClientsPageModule": () => (/* binding */ DeleteClientsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _delete_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-clients-routing.module */ 8941);
/* harmony import */ var _delete_clients_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-clients.page */ 6253);







let DeleteClientsPageModule = class DeleteClientsPageModule {
};
DeleteClientsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _delete_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeleteClientsPageRoutingModule
        ],
        declarations: [_delete_clients_page__WEBPACK_IMPORTED_MODULE_1__.DeleteClientsPage]
    })
], DeleteClientsPageModule);



/***/ }),

/***/ 6253:
/*!*******************************************************!*\
  !*** ./src/app/delete-clients/delete-clients.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteClientsPage": () => (/* binding */ DeleteClientsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_delete_clients_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./delete-clients.page.html */ 1648);
/* harmony import */ var _delete_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-clients.page.scss */ 1359);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ 9134);
/* harmony import */ var _services_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading */ 5155);









let DeleteClientsPage = class DeleteClientsPage {
    constructor(loading, http, router, route, toastController, clientService) {
        this.loading = loading;
        this.http = http;
        this.router = router;
        this.route = route;
        this.toastController = toastController;
        this.clientService = clientService;
        this.CodigoCliente = '';
        this.NomeCliente = '';
        this.CPF = '';
        this.Sexo = '';
        this.Email = '';
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.clientService.readById(this.id).subscribe((client) => {
            this.client = client;
        });
    }
    deleteClient() {
        this.clientService.delete(this.id).subscribe(() => {
            alert("Cliente deletado com sucesso");
            delete this.id;
            this.router.navigate(["/home"]);
        });
    }
};
DeleteClientsPage.ctorParameters = () => [
    { type: _services_loading__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _services_api__WEBPACK_IMPORTED_MODULE_2__.ClientService }
];
DeleteClientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-delete-clients',
        template: _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_delete_clients_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_delete_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteClientsPage);



/***/ }),

/***/ 1648:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/delete-clients/delete-clients.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar text-center color=\"primary\">\n  <ion-title class=\"ion-text-center\">\n    Excluir Cliente\n  </ion-title>\n  <ion-back-button slot=\"start\" defaultHref=\"/home\"></ion-back-button>\n</ion-toolbar>\n\n<ion-content>\n  <html>\n\n    <ion-card >\n      <ion-item>\n        <ion-label >Codigo Cliente: </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label >Nome Cliente: </ion-label> \n      </ion-item>\n\n      <ion-item>\n        <ion-label >CPF:   </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label >Sexo: </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label  >Email: </ion-label>\n      </ion-item>\n\n      <ion-button (click)=\"deleteClient()\" style=\"display: flex;\" color=\"success\" class=\"text-center\">\n        Confirmar Exclusão\n      </ion-button>\n    </ion-card>\n  </html>\n</ion-content>");

/***/ }),

/***/ 1359:
/*!*********************************************************!*\
  !*** ./src/app/delete-clients/delete-clients.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtY2xpZW50cy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_delete-clients_delete-clients_module_ts.js.map