"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-products_edit-products_module_ts"],{

/***/ 3336:
/*!***************************************************************!*\
  !*** ./src/app/edit-products/edit-products-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductsPageRoutingModule": () => (/* binding */ EditProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _edit_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-products.page */ 4928);




const routes = [
    {
        path: '',
        component: _edit_products_page__WEBPACK_IMPORTED_MODULE_0__.EditProductsPage
    }
];
let EditProductsPageRoutingModule = class EditProductsPageRoutingModule {
};
EditProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProductsPageRoutingModule);



/***/ }),

/***/ 1355:
/*!*******************************************************!*\
  !*** ./src/app/edit-products/edit-products.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductsPageModule": () => (/* binding */ EditProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _edit_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-products-routing.module */ 3336);
/* harmony import */ var _edit_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-products.page */ 4928);







let EditProductsPageModule = class EditProductsPageModule {
};
EditProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProductsPageRoutingModule
        ],
        declarations: [_edit_products_page__WEBPACK_IMPORTED_MODULE_1__.EditProductsPage]
    })
], EditProductsPageModule);



/***/ }),

/***/ 4928:
/*!*****************************************************!*\
  !*** ./src/app/edit-products/edit-products.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductsPage": () => (/* binding */ EditProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-products.page.html */ 9791);
/* harmony import */ var _edit_products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-products.page.scss */ 5629);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_api_product___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-product. */ 1845);
/* harmony import */ var _services_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading */ 5155);









let EditProductsPage = class EditProductsPage {
    constructor(loading, http, router, toastController, route, productService) {
        this.loading = loading;
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.route = route;
        this.productService = productService;
        this.CodigoProduto = '';
        this.NomeProduto = '';
        this.Fabricacao = '';
        this.Tamanho = '';
        this.Valor = '';
        this.route.queryParams.subscribe(params => {
            this.param1 = params['id'];
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let id;
            id = this.route.snapshot.paramMap.get("id");
            yield this.productService.readById(this.param1).subscribe((product) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.dados = product;
                this.product = this.dados.resposta;
                this.productDados = yield product;
            }));
        });
    }
    f_CodigoProduto(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.CodigoProduto = event.detail.value;
        });
    }
    f_NomeProduto(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.NomeProduto = event.detail.value;
        });
    }
    f_Fabricacao(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.Fabricacao = event.detail.value;
        });
    }
    f_Tamanho(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.Tamanho = event.detail.value;
        });
    }
    f_Valor(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.Valor = event.detail.value;
        });
    }
    updateProduct() {
        this.productService.update(this.productDados).subscribe(() => {
            alert("Produto atualizado com sucesso!");
            this.router.navigate(["/home"]);
        });
    }
};
EditProductsPage.ctorParameters = () => [
    { type: _services_loading__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_api_product___WEBPACK_IMPORTED_MODULE_2__.ProductService }
];
EditProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-products',
        template: _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_products_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProductsPage);



/***/ }),

/***/ 9791:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/edit-products/edit-products.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar text-center color=\"primary\">\n  <ion-title class=\"ion-text-center\">\n    Editar Perguntas\n  </ion-title>\n  <ion-back-button slot=\"start\" defaultHref=\"/home\"></ion-back-button>\n</ion-toolbar>\n\n<ion-content>\n  <html>\n    <ion-card  >\n      <ion-item>\n        <ion-label position=\"floating\">Codigo Produto: </ion-label>\n        <ion-input (ionChange)=\"f_CodigoProduto($event)\" [(ngModel)]=\"productDados.CodigoProduto\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Nome Produto: </ion-label>\n        <ion-input (ionChange)=\"f_NomeProduto($event)\" [(ngModel)]=\"productDados.NomeProduto\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"floating\">Fabricação: </ion-label>\n        <ion-input (ionChange)=\"f_Fabricacao($event)\" [(ngModel)]=\"productDados.Fabricacao\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Tamanho: </ion-label>\n        <ion-input (ionChange)=\"f_Tamanho($event)\" [(ngModel)]=\"productDados.Tamanho\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Valor: </ion-label>\n        <ion-input (ionChange)=\"f_Valor($event)\" [(ngModel)]=\"productDados.Valor\"></ion-input>\n      </ion-item>\n\n      <ion-button (click)=\"updateProduct()\" style=\"display: flex;\" color=\"success\" class=\"text-center\">\n        Editar\n      </ion-button>\n    </ion-card>\n  </html>\n</ion-content>");

/***/ }),

/***/ 5629:
/*!*******************************************************!*\
  !*** ./src/app/edit-products/edit-products.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-products_edit-products_module_ts.js.map