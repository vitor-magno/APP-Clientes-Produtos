"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_delete-products_delete-products_module_ts"],{

/***/ 8745:
/*!*******************************************************************!*\
  !*** ./src/app/delete-products/delete-products-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteProductsPageRoutingModule": () => (/* binding */ DeleteProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _delete_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-products.page */ 5188);




const routes = [
    {
        path: '',
        component: _delete_products_page__WEBPACK_IMPORTED_MODULE_0__.DeleteProductsPage
    }
];
let DeleteProductsPageRoutingModule = class DeleteProductsPageRoutingModule {
};
DeleteProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeleteProductsPageRoutingModule);



/***/ }),

/***/ 8648:
/*!***********************************************************!*\
  !*** ./src/app/delete-products/delete-products.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteProductsPageModule": () => (/* binding */ DeleteProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _delete_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-products-routing.module */ 8745);
/* harmony import */ var _delete_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-products.page */ 5188);







let DeleteProductsPageModule = class DeleteProductsPageModule {
};
DeleteProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _delete_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeleteProductsPageRoutingModule
        ],
        declarations: [_delete_products_page__WEBPACK_IMPORTED_MODULE_1__.DeleteProductsPage]
    })
], DeleteProductsPageModule);



/***/ }),

/***/ 5188:
/*!*********************************************************!*\
  !*** ./src/app/delete-products/delete-products.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteProductsPage": () => (/* binding */ DeleteProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_delete_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./delete-products.page.html */ 6131);
/* harmony import */ var _delete_products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-products.page.scss */ 5047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_api_product___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-product. */ 1845);






let DeleteProductsPage = class DeleteProductsPage {
    constructor(productService, router, route) {
        this.productService = productService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.productService.readById(this.id).subscribe((product) => {
            this.product = product;
        });
    }
    deleteProdut() {
        this.productService.delete(this.id).subscribe(() => {
            alert("Produto deletado com sucesso");
            delete this.id;
            this.router.navigate(["/home"]);
        });
    }
};
DeleteProductsPage.ctorParameters = () => [
    { type: _services_api_product___WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
DeleteProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-delete-products',
        template: _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_delete_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_delete_products_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeleteProductsPage);



/***/ }),

/***/ 6131:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/delete-products/delete-products.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar text-center color=\"primary\">\n  <ion-title class=\"ion-text-center\">\n    Excluir Produto\n  </ion-title>\n  <ion-back-button slot=\"start\" defaultHref=\"/home\"></ion-back-button>\n</ion-toolbar>\n\n<ion-content>\n  <html>\n\n    <ion-card >\n      <ion-item>\n        <ion-label >Codigo Cliente: </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label >Nome Cliente: </ion-label> \n      </ion-item>\n\n      <ion-item>\n        <ion-label >CPF:   </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label >Sexo: </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label  >Email: </ion-label>\n      </ion-item>\n\n      <ion-button (click)=\"deleteProdut()\" style=\"display: flex;\" color=\"success\" class=\"text-center\">\n        Confirmar Exclusão\n      </ion-button>\n    </ion-card>\n  </html>\n</ion-content>");

/***/ }),

/***/ 5047:
/*!***********************************************************!*\
  !*** ./src/app/delete-products/delete-products.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcHJvZHVjdHMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_delete-products_delete-products_module_ts.js.map