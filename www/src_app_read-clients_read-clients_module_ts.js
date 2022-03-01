"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_read-clients_read-clients_module_ts"],{

/***/ 2648:
/*!*************************************************************!*\
  !*** ./src/app/read-clients/read-clients-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadClientsPageRoutingModule": () => (/* binding */ ReadClientsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _read_clients_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read-clients.page */ 3644);




const routes = [
    {
        path: '',
        component: _read_clients_page__WEBPACK_IMPORTED_MODULE_0__.ReadClientsPage
    }
];
let ReadClientsPageRoutingModule = class ReadClientsPageRoutingModule {
};
ReadClientsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReadClientsPageRoutingModule);



/***/ }),

/***/ 2533:
/*!*****************************************************!*\
  !*** ./src/app/read-clients/read-clients.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadClientsPageModule": () => (/* binding */ ReadClientsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _read_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read-clients-routing.module */ 2648);
/* harmony import */ var _read_clients_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read-clients.page */ 3644);







let ReadClientsPageModule = class ReadClientsPageModule {
};
ReadClientsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _read_clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReadClientsPageRoutingModule
        ],
        declarations: [_read_clients_page__WEBPACK_IMPORTED_MODULE_1__.ReadClientsPage]
    })
], ReadClientsPageModule);



/***/ }),

/***/ 3644:
/*!***************************************************!*\
  !*** ./src/app/read-clients/read-clients.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadClientsPage": () => (/* binding */ ReadClientsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_read_clients_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./read-clients.page.html */ 1326);
/* harmony import */ var _read_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read-clients.page.scss */ 1766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ 9134);






let ReadClientsPage = class ReadClientsPage {
    constructor(clientService, router, route) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.clientService.read().subscribe(clients => {
            this.dados = clients;
            this.clients = this.dados.resposta;
        });
    }
    deleteClients(id) {
        this.router.navigate(['/delet-clients'], { queryParams: { id: id } });
    }
    editClients(id) {
        this.router.navigate(['/edit-clients'], { queryParams: { id: id } });
    }
};
ReadClientsPage.ctorParameters = () => [
    { type: _services_api__WEBPACK_IMPORTED_MODULE_2__.ClientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ReadClientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-read-clients',
        template: _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_read_clients_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_read_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReadClientsPage);



/***/ }),

/***/ 1326:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/read-clients/read-clients.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar text-center color=\"primary\">\n  <ion-title class=\"ion-text-center\">\n    Leitura de Clientes\n  </ion-title>\n  <ion-back-button slot=\"start\" defaultHref=\"/home\"></ion-back-button>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card *ngFor=\"let dados of clients\" >\n    <ion-item>\n      <ion-label>{{dados.CodigoCliente}}</ion-label>\n      <ion-icon class=\"delete\" (click)=\"deleteClients(dados.id)\" position=\"end\" name=\"trash\"></ion-icon>\n      <ion-icon class=\"edit\" (click)=\"editClients(dados.id)\" style=\"padding-left: 15px;\" position=\"end\" name=\"create\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{dados.Nome}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{dados.Sexo}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{dados.CPF}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{dados.Email}}</ion-label>\n    </ion-item>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ 1766:
/*!*****************************************************!*\
  !*** ./src/app/read-clients/read-clients.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  border-radius: 0.5rem;\n  background-color: #efefef;\n  background-image: linear-gradient(to bottom, #a9a2a2e8, rgba(255, 255, 255, 0.67));\n}\n\n.delete {\n  color: rgba(248, 0, 0, 0.67);\n}\n\n.edit {\n  color: #eeee14;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWQtY2xpZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0ZBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoicmVhZC1jbGllbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2E5YTJhMmU4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcpKTtcbiAgfVxuXG4uZGVsZXRle1xuICAgIGNvbG9yOnJnYmEoMjQ4LCAwLCAwLCAwLjY3KVxufVxuLmVkaXR7XG4gICAgY29sb3I6IHJnYigyMzgsIDIzOCwgMjApO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_read-clients_read-clients_module_ts.js.map