"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_produtos_produtos_module_ts"],{

/***/ 786:
/*!*****************************************************!*\
  !*** ./src/app/produtos/produtos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutosPageRoutingModule": () => (/* binding */ ProdutosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produtos.page */ 8719);




const routes = [
    {
        path: '',
        component: _produtos_page__WEBPACK_IMPORTED_MODULE_0__.ProdutosPage
    }
];
let ProdutosPageRoutingModule = class ProdutosPageRoutingModule {
};
ProdutosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProdutosPageRoutingModule);



/***/ }),

/***/ 2861:
/*!*********************************************!*\
  !*** ./src/app/produtos/produtos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutosPageModule": () => (/* binding */ ProdutosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produtos-routing.module */ 786);
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos.page */ 8719);







let ProdutosPageModule = class ProdutosPageModule {
};
ProdutosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _produtos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProdutosPageRoutingModule
        ],
        declarations: [_produtos_page__WEBPACK_IMPORTED_MODULE_1__.ProdutosPage]
    })
], ProdutosPageModule);



/***/ }),

/***/ 8719:
/*!*******************************************!*\
  !*** ./src/app/produtos/produtos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutosPage": () => (/* binding */ ProdutosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_produtos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./produtos.page.html */ 5877);
/* harmony import */ var _produtos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos.page.scss */ 3960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading */ 5155);
/* harmony import */ var _services_api_product___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-product. */ 1845);









let ProdutosPage = class ProdutosPage {
    constructor(router, toastController, loading, alertController, http, productService) {
        this.router = router;
        this.toastController = toastController;
        this.loading = loading;
        this.alertController = alertController;
        this.http = http;
        this.productService = productService;
        this.CodigoProduto = '';
        this.NomeProduto = '';
        this.Fabricacao = '';
        this.Tamanho = '';
        this.Valor = '';
        this.Liberado = false;
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this.initialiseInvites();
            }
        });
    }
    ngOnInit() {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
            // "x-access-token": localStorage.getItem("token"),
            }),
        };
    }
    initialiseInvites() {
        this.CodigoProduto = '';
        this.NomeProduto = '';
        this.Fabricacao = '';
        this.Tamanho = '';
        this.Valor = '';
        this.Liberado = false;
    }
    f_CodigoProduto(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.CodigoProduto = evento.detail.value;
            this.verificaDados();
        });
    }
    f_NomeProduto(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.NomeProduto = evento.detail.value;
            this.verificaDados();
        });
    }
    f_Fabricacao(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.Fabricacao = evento.detail.value;
            this.verificaDados();
        });
    }
    f_Tamanho(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.Tamanho = evento.detail.value;
            this.verificaDados();
        });
    }
    f_ValorProduto(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.Valor = evento.detail.value;
            this.verificaDados();
        });
    }
    verificaDados() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.CodigoProduto && this.NomeProduto && this.Fabricacao && this.Tamanho && this.Valor)
                this.Liberado = true;
        });
    }
    createProduct() {
        this.product = {
            CodigoProduto: this.CodigoProduto,
            Nome: this.NomeProduto,
            Fabricacao: this.Fabricacao,
            Tamanho: this.Tamanho,
            Valor: this.Valor
        };
        this.productService.create(this.product).subscribe(() => {
            alert("Produto Criado");
            this.router.navigate(['/home']);
        });
    }
};
ProdutosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _services_loading__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _services_api_product___WEBPACK_IMPORTED_MODULE_3__.ProductService }
];
ProdutosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-produtos',
        template: _home_vitor_Documentos_app_mobilie_clientes_produtos_app_clientes_produtos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_produtos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_produtos_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProdutosPage);



/***/ }),

/***/ 5877:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/produtos/produtos.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar text-center color=\"primary\">\n  <ion-title class=\"ion-text-center\">\n\n    Adicionar Produto\n\n  </ion-title>\n  <ion-back-button slot=\"start\" defaultHref=\"/home\"></ion-back-button>\n</ion-toolbar>\n<ion-content>\n  <html>\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\">Digite o Código do Produto:</ion-label>\n      <ion-input placeholder=\"Digite o nome do código do produto...\" (ionChange)=\"f_CodigoProduto($event)\" [(ngModel)]=\"CodigoProduto\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Digite o Nome do Produto:</ion-label>\n      <ion-input placeholder=\"Digite o nome do nome do produto...\" (ionChange)=\"f_NomeProduto($event)\" [(ngModel)]=\"NomeProduto\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Fabricação Produto:</ion-label>\n      <ion-input placeholder=\"Digite Nacional ou Importado...\" (ionChange)=\"f_Fabricacao($event)\" [(ngModel)]=\"Fabricacao\"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Tamanho Produto:</ion-label>\n      <ion-input placeholder=\"Digite o Tamanho do Produto...\" (ionChange)=\"f_Tamanho($event)\" [(ngModel)]=\"Tamanho\"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Valor Produto:</ion-label>\n      <ion-input placeholder=\"Digite o Valor do Produto...\" (ionChange)=\"f_ValorProduto($event)\" [(ngModel)]=\"Valor\"></ion-input>\n    </ion-item>\n\n\n    <ion-button color=\"success\" class=\"text-center\" style=\"display: flex;\" (click)=\"createProduct()\">\n      Adicionar\n    </ion-button>\n  </ion-card>\n\n  </html>\n</ion-content>");

/***/ }),

/***/ 3960:
/*!*********************************************!*\
  !*** ./src/app/produtos/produtos.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdXRvcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_produtos_produtos_module_ts.js.map