"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_read-products_read-products_module_ts"],{

/***/ 1377:
/*!***************************************************************!*\
  !*** ./src/app/read-products/read-products-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadProductsPageRoutingModule": () => (/* binding */ ReadProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _read_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read-products.page */ 37);




const routes = [
    {
        path: '',
        component: _read_products_page__WEBPACK_IMPORTED_MODULE_0__.ReadProductsPage
    }
];
let ReadProductsPageRoutingModule = class ReadProductsPageRoutingModule {
};
ReadProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReadProductsPageRoutingModule);



/***/ }),

/***/ 8143:
/*!*******************************************************!*\
  !*** ./src/app/read-products/read-products.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadProductsPageModule": () => (/* binding */ ReadProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _read_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read-products-routing.module */ 1377);
/* harmony import */ var _read_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read-products.page */ 37);







let ReadProductsPageModule = class ReadProductsPageModule {
};
ReadProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _read_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReadProductsPageRoutingModule
        ],
        declarations: [_read_products_page__WEBPACK_IMPORTED_MODULE_1__.ReadProductsPage]
    })
], ReadProductsPageModule);



/***/ }),

/***/ 37:
/*!*****************************************************!*\
  !*** ./src/app/read-products/read-products.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadProductsPage": () => (/* binding */ ReadProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_read_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./read-products.page.html */ 9497);
/* harmony import */ var _read_products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read-products.page.scss */ 1208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_api_product___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-product. */ 1845);






let ReadProductsPage = class ReadProductsPage {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ngOnInit() {
        this.productService.read().subscribe(products => {
            this.dados = products;
            this.products = this.dados.resposta;
        });
    }
    deleteProducts(id) {
        this.router.navigate(['/delet-products'], { queryParams: { id: id } });
    }
    editProducts(id) {
        this.router.navigate(['/edit-products'], { queryParams: { id: id } });
    }
};
ReadProductsPage.ctorParameters = () => [
    { type: _services_api_product___WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ReadProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-read-products',
        template: _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_read_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_read_products_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReadProductsPage);



/***/ }),

/***/ 9497:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/read-products/read-products.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar text-center color=\"primary\">\n  <ion-title class=\"ion-text-center\">\n    Leitura de Produtos\n  </ion-title>\n  <ion-back-button slot=\"start\" defaultHref=\"/home\"></ion-back-button>\n</ion-toolbar>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let dados of products\">\n    <ion-item>\n      <ion-label>{{dados.CodigoProduto}}</ion-label>\n      <ion-icon class=\"delete\" (click)=\"deleteProducts(dados.id)\" position=\"end\" name=\"trash\"></ion-icon>\n      <ion-icon class=\"edit\" (click)=\"editProducts(dados.id)\" style=\"padding-left: 15px;\" position=\"end\" name=\"create\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{dados.Nome}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{dados.Tamanho}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{dados.Email}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{dados.Valor}}</ion-label>\n    </ion-item>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ 1208:
/*!*******************************************************!*\
  !*** ./src/app/read-products/read-products.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  border-radius: 0.5rem;\n  background-color: #efefef;\n  background-image: linear-gradient(to bottom, #a9a2a2e8, rgba(255, 255, 255, 0.67));\n}\n\n.delete {\n  color: rgba(248, 0, 0, 0.67);\n}\n\n.edit {\n  color: #eeee14;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWQtcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBRUUscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtGQUFBO0FBQUo7O0FBR0E7RUFDSSw0QkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InJlYWQtcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpb24taXRlbXtcbiAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhOWEyYTJlOCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3KSk7XG4gIH1cblxuLmRlbGV0ZXtcbiAgICBjb2xvcjpyZ2JhKDI0OCwgMCwgMCwgMC42Nylcbn1cbi5lZGl0e1xuICAgIGNvbG9yOiByZ2IoMjM4LCAyMzgsIDIwKTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_read-products_read-products_module_ts.js.map