(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Apointment/addb/addb.component.css":
/*!****************************************************!*\
  !*** ./src/app/Apointment/addb/addb.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Fwb2ludG1lbnQvYWRkYi9hZGRiLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Apointment/addb/addb.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Apointment/addb/addb.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_1280.jpg');\">\n<div class=\"container col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Agregar Jugos Saludables</h3>\n    </div>\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <label for=\"\">Nombres:</label>\n          <input [(ngModel)]=\"persona.name\" name=\"name\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Apellidos:</label>\n          <input [(ngModel)]=\"persona.age\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Apellidos:</label>\n          <input [(ngModel)]=\"persona.symptoms\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Apellidos:</label>\n          <input [(ngModel)]=\"persona.number\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <button (click)=\"Guardar()\" class=\"btn btn-danger\">Guardar</button>\n      </form>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n</div>\n"

/***/ }),

/***/ "./src/app/Apointment/addb/addb.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Apointment/addb/addb.component.ts ***!
  \***************************************************/
/*! exports provided: AddbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbComponent", function() { return AddbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Modelo_Appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Modelo/Appointment */ "./src/app/Modelo/Appointment.ts");
/* harmony import */ var src_app_Service_service2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/service2.service */ "./src/app/Service/service2.service.ts");





var AddbComponent = /** @class */ (function () {
    function AddbComponent(router, service) {
        this.router = router;
        this.service = service;
        this.persona = new src_app_Modelo_Appointment__WEBPACK_IMPORTED_MODULE_3__["Appointment"]();
    }
    AddbComponent.prototype.ngOnInit = function () {
    };
    AddbComponent.prototype.Guardar = function () {
        var _this = this;
        this.service.createPersona(this.persona)
            .subscribe(function (data) {
            alert("Se Agrego con Exito...!!!");
            _this.router.navigate(["listarb"]);
        });
    };
    AddbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addb',
            template: __webpack_require__(/*! ./addb.component.html */ "./src/app/Apointment/addb/addb.component.html"),
            styles: [__webpack_require__(/*! ./addb.component.css */ "./src/app/Apointment/addb/addb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Service_service2_service__WEBPACK_IMPORTED_MODULE_4__["Service2Service"]])
    ], AddbComponent);
    return AddbComponent;
}());



/***/ }),

/***/ "./src/app/Apointment/editb/editb.component.css":
/*!******************************************************!*\
  !*** ./src/app/Apointment/editb/editb.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Fwb2ludG1lbnQvZWRpdGIvZWRpdGIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Apointment/editb/editb.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Apointment/editb/editb.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Modificar Datos</h3>\n    </div>\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <label for=\"\">Pastilla:</label>\n          <input [(ngModel)]=\"persona.name\" name=\"name\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.age\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.symptoms\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.number\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <button (click)=\"Actualizar(persona)\" class=\"btn btn-danger\">Actualizar</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Apointment/editb/editb.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Apointment/editb/editb.component.ts ***!
  \*****************************************************/
/*! exports provided: EditbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditbComponent", function() { return EditbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Modelo_Appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Modelo/Appointment */ "./src/app/Modelo/Appointment.ts");
/* harmony import */ var src_app_Service_service2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/service2.service */ "./src/app/Service/service2.service.ts");





var EditbComponent = /** @class */ (function () {
    function EditbComponent(router, service) {
        this.router = router;
        this.service = service;
        this.persona = new src_app_Modelo_Appointment__WEBPACK_IMPORTED_MODULE_3__["Appointment"]();
    }
    EditbComponent.prototype.ngOnInit = function () {
        this.Editar();
    };
    EditbComponent.prototype.Editar = function () {
        var _this = this;
        var id = localStorage.getItem("id");
        this.service.getPersonaId(+id)
            .subscribe(function (data) {
            _this.persona = data;
        });
    };
    EditbComponent.prototype.Actualizar = function (persona) {
        var _this = this;
        this.service.updatePersona(persona)
            .subscribe(function (data) {
            _this.persona = data;
            alert("Se Actualizo con Exito...!!!");
            _this.router.navigate(["listarb"]);
        });
    };
    EditbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editb',
            template: __webpack_require__(/*! ./editb.component.html */ "./src/app/Apointment/editb/editb.component.html"),
            styles: [__webpack_require__(/*! ./editb.component.css */ "./src/app/Apointment/editb/editb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Service_service2_service__WEBPACK_IMPORTED_MODULE_4__["Service2Service"]])
    ], EditbComponent);
    return EditbComponent;
}());



/***/ }),

/***/ "./src/app/Apointment/listarb/listarb.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Apointment/listarb/listarb.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Fwb2ludG1lbnQvbGlzdGFyYi9saXN0YXJiLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Apointment/listarb/listarb.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Apointment/listarb/listarb.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_1280.jpg');\">\n<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Jugos Saludables</h3>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr class=\"text-center\">\n            <th>ID</th>\n            <th>Nombre de Jugo Saludable</th>\n            <th>Vitaminas</th>\n            <th>Beneficios</th>\n            <th>Descripcion</th>\n            <th>Acciones</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let persona of personas\" class=\"text-center\">\n            <td>{{persona.id}}</td>\n            <td>{{persona.name}}</td>\n            <td>{{persona.age}}</td>\n            <td>{{persona.symptoms}}</td>\n            <td>{{persona.number}}</td>\n            <td>\n              <button (click)=\"Editar(persona)\" class=\"btn btn-warning\">Editar</button>\n              <button (click)=\"Delete(persona)\" class=\"btn btn-danger\" style=\"margin-left: 10px;\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" style=\"width: 700px;\">\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">1 / 6</div>\n    <img src=\"https://cdn7.kiwilimon.com/recetaimagen/30632/960x640/34260.jpg.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">2 / 6</div>\n    <img src=\"https://nutricionysaludintegral.com.mx/wp-content/uploads/2016/10/jugos-1-1240x824.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">3 / 6</div>\n    <img src=\"https://mejorconsalud.as.com/wp-content/uploads/2015/01/jugos-naturales-celulitis.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">4 / 6</div>\n    <img src=\"https://cdn.colombia.com/sdi/2019/04/21/jugos-naturales-para-vencer-el-cansancio-729735.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">5 / 6</div>\n    <img src=\"https://organicosysaludables.com/wp-content/uploads/2018/03/jugos-nutritivos.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">6 / 6</div>\n    <img src=\"https://statics.mexicoshow.mx/2023/03/crop/6405fefe81481__680x510.webp\" style=\"width:100%\">\n  </div>\n\n  <a class=\"prev\" onclick=\"plusSlides(-1)\">❮</a>\n  <a class=\"next\" onclick=\"plusSlides(1)\">❯</a>\n\n  <div class=\"caption-container\">\n    <p id=\"caption\"></p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://cdn7.kiwilimon.com/recetaimagen/30632/960x640/34260.jpg.jpg\"\n        style=\"width:100%\" onclick=\"currentSlide(1)\" alt=\"The Woods\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://nutricionysaludintegral.com.mx/wp-content/uploads/2016/10/jugos-1-1240x824.jpg\"\n        style=\"width:100%\" onclick=\"currentSlide(2)\" alt=\"Cinque Terre\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://mejorconsalud.as.com/wp-content/uploads/2015/01/jugos-naturales-celulitis.jpg\"\n        style=\"width:100%\" onclick=\"currentSlide(3)\" alt=\"Mountains and fjords\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://cdn.colombia.com/sdi/2019/04/21/jugos-naturales-para-vencer-el-cansancio-729735.jpg\"\n        style=\"width:100%\" onclick=\"currentSlide(4)\" alt=\"Northern Lights\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://organicosysaludables.com/wp-content/uploads/2018/03/jugos-nutritivos.jpg\"\n        style=\"width:100%\" onclick=\"currentSlide(5)\" alt=\"Nature and sunrise\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://statics.mexicoshow.mx/2023/03/crop/6405fefe81481__680x510.webp\"\n        style=\"width:100%\" onclick=\"currentSlide(6)\" alt=\"Snowy Mountains\">\n    </div>\n  </div>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n</div>\n"

/***/ }),

/***/ "./src/app/Apointment/listarb/listarb.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Apointment/listarb/listarb.component.ts ***!
  \*********************************************************/
/*! exports provided: ListarbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarbComponent", function() { return ListarbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_service2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/service2.service */ "./src/app/Service/service2.service.ts");




var ListarbComponent = /** @class */ (function () {
    function ListarbComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ListarbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPersonas()
            .subscribe(function (data) {
            _this.personas = data;
        });
    };
    ListarbComponent.prototype.Editar = function (persona) {
        localStorage.setItem("id", persona.id.toString());
        this.router.navigate(["editb"]);
    };
    ListarbComponent.prototype.Delete = function (persona) {
        var _this = this;
        this.service.deletePersona(persona)
            .subscribe(function (data) {
            _this.personas = _this.personas.filter(function (p) { return p !== persona; });
            alert("Usuario eliminado...");
        });
    };
    ListarbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listarb',
            template: __webpack_require__(/*! ./listarb.component.html */ "./src/app/Apointment/listarb/listarb.component.html"),
            styles: [__webpack_require__(/*! ./listarb.component.css */ "./src/app/Apointment/listarb/listarb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Service_service2_service__WEBPACK_IMPORTED_MODULE_3__["Service2Service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListarbComponent);
    return ListarbComponent;
}());



/***/ }),

/***/ "./src/app/Medicina/adda/adda.component.css":
/*!**************************************************!*\
  !*** ./src/app/Medicina/adda/adda.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01lZGljaW5hL2FkZGEvYWRkYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Medicina/adda/adda.component.html":
/*!***************************************************!*\
  !*** ./src/app/Medicina/adda/adda.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001_1280.jpg');\">\n\n<div class=\"container col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Agregar Plato Saludable</h3>\n    </div>\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <label for=\"\">Plato saludable:</label>\n          <input [(ngModel)]=\"persona.drugName\" name=\"name\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Calorias del Plato:</label>\n          <input [(ngModel)]=\"persona.stock\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <button (click)=\"Guardar()\" class=\"btn btn-danger\">Guardar</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n<br>\n\n</div>\n"

/***/ }),

/***/ "./src/app/Medicina/adda/adda.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Medicina/adda/adda.component.ts ***!
  \*************************************************/
/*! exports provided: AddaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddaComponent", function() { return AddaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Modelo_Medicina__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Modelo/Medicina */ "./src/app/Modelo/Medicina.ts");
/* harmony import */ var src_app_Service_service1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/service1.service */ "./src/app/Service/service1.service.ts");





var AddaComponent = /** @class */ (function () {
    function AddaComponent(router, service) {
        this.router = router;
        this.service = service;
        this.persona = new src_app_Modelo_Medicina__WEBPACK_IMPORTED_MODULE_3__["Medicina"]();
    }
    AddaComponent.prototype.ngOnInit = function () {
    };
    AddaComponent.prototype.Guardar = function () {
        var _this = this;
        this.service.createPersona(this.persona)
            .subscribe(function (data) {
            alert("Se Agrego con Exito...!!!");
            _this.router.navigate(["listara"]);
        });
    };
    AddaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adda',
            template: __webpack_require__(/*! ./adda.component.html */ "./src/app/Medicina/adda/adda.component.html"),
            styles: [__webpack_require__(/*! ./adda.component.css */ "./src/app/Medicina/adda/adda.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Service_service1_service__WEBPACK_IMPORTED_MODULE_4__["Service1Service"]])
    ], AddaComponent);
    return AddaComponent;
}());



/***/ }),

/***/ "./src/app/Medicina/edita/edita.component.css":
/*!****************************************************!*\
  !*** ./src/app/Medicina/edita/edita.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01lZGljaW5hL2VkaXRhL2VkaXRhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Medicina/edita/edita.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Medicina/edita/edita.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Modificar Datos</h3>\n    </div>\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <label for=\"\">Pastilla:</label>\n          <input [(ngModel)]=\"persona.drugName\" name=\"name\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.stock\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <button (click)=\"Actualizar(persona)\" class=\"btn btn-danger\">Actualizar</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Medicina/edita/edita.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Medicina/edita/edita.component.ts ***!
  \***************************************************/
/*! exports provided: EditaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaComponent", function() { return EditaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Modelo_Medicina__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Modelo/Medicina */ "./src/app/Modelo/Medicina.ts");
/* harmony import */ var src_app_Service_service1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/service1.service */ "./src/app/Service/service1.service.ts");





var EditaComponent = /** @class */ (function () {
    function EditaComponent(router, service) {
        this.router = router;
        this.service = service;
        this.persona = new src_app_Modelo_Medicina__WEBPACK_IMPORTED_MODULE_3__["Medicina"]();
    }
    EditaComponent.prototype.ngOnInit = function () {
        this.Editar();
    };
    EditaComponent.prototype.Editar = function () {
        var _this = this;
        var id = localStorage.getItem("id");
        this.service.getPersonaId(+id)
            .subscribe(function (data) {
            _this.persona = data;
        });
    };
    EditaComponent.prototype.Actualizar = function (persona) {
        var _this = this;
        this.service.updatePersona(persona)
            .subscribe(function (data) {
            _this.persona = data;
            alert("Se Actualizo con Exito...!!!");
            _this.router.navigate(["listar"]);
        });
    };
    EditaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edita',
            template: __webpack_require__(/*! ./edita.component.html */ "./src/app/Medicina/edita/edita.component.html"),
            styles: [__webpack_require__(/*! ./edita.component.css */ "./src/app/Medicina/edita/edita.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Service_service1_service__WEBPACK_IMPORTED_MODULE_4__["Service1Service"]])
    ], EditaComponent);
    return EditaComponent;
}());



/***/ }),

/***/ "./src/app/Medicina/listara/listara.component.css":
/*!********************************************************!*\
  !*** ./src/app/Medicina/listara/listara.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01lZGljaW5hL2xpc3RhcmEvbGlzdGFyYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Medicina/listara/listara.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Medicina/listara/listara.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('https://cdn.pixabay.com/photo/2016/11/29/11/15/fruits-1869132_1280.jpg');\">\n<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Agregar Plato Saludable</h3>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr class=\"text-center\">\n            <th>ID</th>\n            <th>Plato saludable</th>\n            <th>Calorias del Plato</th>\n            <th>ACCIONES</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let persona of personas\" class=\"text-center\">\n            <td>{{persona.id}}</td>\n            <td>{{persona.drugName}}</td>\n            <td>{{persona.stock}}</td>\n            <td>\n              <button (click)=\"Editar(persona)\" class=\"btn btn-warning\">Editar</button>\n              <button (click)=\"Delete(persona)\" class=\"btn btn-danger\" style=\"margin-left: 10px;\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n\n      <!-- The four columns -->\n\n\n\n\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" style=\"width: 700px;\">\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">1 / 6</div>\n    <img src=\"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2020/01/jugos-saludables.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">2 / 6</div>\n    <img src=\"https://icontinental.edu.pe/wp-content/uploads/2022/12/jugos_para-desintoxicacion.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">3 / 6</div>\n    <img src=\"https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_1280.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">4 / 6</div>\n    <img src=\"https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014_1280.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">5 / 6</div>\n    <img src=\"https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">6 / 6</div>\n    <img src=\"https://cdn.pixabay.com/photo/2016/09/12/08/22/breakfast-1663295_1280.jpg\" style=\"width:100%\">\n  </div>\n\n  <a class=\"prev\" onclick=\"plusSlides(-1)\">❮</a>\n  <a class=\"next\" onclick=\"plusSlides(1)\">❯</a>\n\n  <div class=\"caption-container\">\n    <p id=\"caption\"></p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2020/01/jugos-saludables.jpg\" style=\"width:100%\" onclick=\"currentSlide(1)\" alt=\"The Woods\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://icontinental.edu.pe/wp-content/uploads/2022/12/jugos_para-desintoxicacion.jpg\" style=\"width:100%\" onclick=\"currentSlide(2)\" alt=\"Cinque Terre\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_1280.jpg\" style=\"width:100%\" onclick=\"currentSlide(3)\" alt=\"Mountains and fjords\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014_1280.jpg\" style=\"width:100%\" onclick=\"currentSlide(4)\" alt=\"Northern Lights\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg\" style=\"width:100%\" onclick=\"currentSlide(5)\" alt=\"Nature and sunrise\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"https://cdn.pixabay.com/photo/2016/09/12/08/22/breakfast-1663295_1280.jpg\" style=\"width:100%\" onclick=\"currentSlide(6)\" alt=\"Snowy Mountains\">\n    </div>\n  </div>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n</div>\n"

/***/ }),

/***/ "./src/app/Medicina/listara/listara.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Medicina/listara/listara.component.ts ***!
  \*******************************************************/
/*! exports provided: ListaraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaraComponent", function() { return ListaraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_service1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/service1.service */ "./src/app/Service/service1.service.ts");




var ListaraComponent = /** @class */ (function () {
    function ListaraComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ListaraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPersonas()
            .subscribe(function (data) {
            _this.personas = data;
        });
    };
    ListaraComponent.prototype.Editar = function (persona) {
        localStorage.setItem("id", persona.id.toString());
        this.router.navigate(["edita"]);
    };
    ListaraComponent.prototype.Delete = function (persona) {
        var _this = this;
        this.service.deletePersona(persona)
            .subscribe(function (data) {
            _this.personas = _this.personas.filter(function (p) { return p !== persona; });
            alert("Usuario eliminado...");
        });
    };
    ListaraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listara',
            template: __webpack_require__(/*! ./listara.component.html */ "./src/app/Medicina/listara/listara.component.html"),
            styles: [__webpack_require__(/*! ./listara.component.css */ "./src/app/Medicina/listara/listara.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Service_service1_service__WEBPACK_IMPORTED_MODULE_3__["Service1Service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListaraComponent);
    return ListaraComponent;
}());



/***/ }),

/***/ "./src/app/Modelo/Appointment.ts":
/*!***************************************!*\
  !*** ./src/app/Modelo/Appointment.ts ***!
  \***************************************/
/*! exports provided: Appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    return Appointment;
}());



/***/ }),

/***/ "./src/app/Modelo/Medicina.ts":
/*!************************************!*\
  !*** ./src/app/Modelo/Medicina.ts ***!
  \************************************/
/*! exports provided: Medicina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Medicina", function() { return Medicina; });
var Medicina = /** @class */ (function () {
    function Medicina() {
    }
    return Medicina;
}());



/***/ }),

/***/ "./src/app/Modelo/Paciente.ts":
/*!************************************!*\
  !*** ./src/app/Modelo/Paciente.ts ***!
  \************************************/
/*! exports provided: Paciente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paciente", function() { return Paciente; });
var Paciente = /** @class */ (function () {
    function Paciente() {
    }
    return Paciente;
}());



/***/ }),

/***/ "./src/app/Modelo/Persona.ts":
/*!***********************************!*\
  !*** ./src/app/Modelo/Persona.ts ***!
  \***********************************/
/*! exports provided: Persona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());



/***/ }),

/***/ "./src/app/Paciente/addc/addc.component.css":
/*!**************************************************!*\
  !*** ./src/app/Paciente/addc/addc.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhY2llbnRlL2FkZGMvYWRkYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Paciente/addc/addc.component.html":
/*!***************************************************!*\
  !*** ./src/app/Paciente/addc/addc.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Agregar Pacientes</h3>\n    </div>\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <label for=\"\">nombre</label>\n          <input [(ngModel)]=\"persona.name\" name=\"name\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Edad:</label>\n          <input [(ngModel)]=\"persona.age\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Peso:</label>\n          <input [(ngModel)]=\"persona.blood\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Descripcion Nutricional:</label>\n          <input [(ngModel)]=\"persona.prescription\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Tipo de Sangre:</label>\n          <input [(ngModel)]=\"persona.dose\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Descripcion Sintomatologica:</label>\n          <input [(ngModel)]=\"persona.fees\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Urgencia:</label>\n          <input [(ngModel)]=\"persona.urgency\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <button (click)=\"Guardar()\" class=\"btn btn-danger\">Guardar</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Paciente/addc/addc.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Paciente/addc/addc.component.ts ***!
  \*************************************************/
/*! exports provided: AddcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcComponent", function() { return AddcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Modelo_Paciente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Modelo/Paciente */ "./src/app/Modelo/Paciente.ts");
/* harmony import */ var src_app_Service_service3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/service3.service */ "./src/app/Service/service3.service.ts");





var AddcComponent = /** @class */ (function () {
    function AddcComponent(router, service) {
        this.router = router;
        this.service = service;
        this.persona = new src_app_Modelo_Paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"]();
    }
    AddcComponent.prototype.ngOnInit = function () {
    };
    AddcComponent.prototype.Guardar = function () {
        var _this = this;
        this.service.createPersona(this.persona)
            .subscribe(function (data) {
            alert("Se Agrego con Exito...!!!");
            _this.router.navigate(["listarc"]);
        });
    };
    AddcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addc',
            template: __webpack_require__(/*! ./addc.component.html */ "./src/app/Paciente/addc/addc.component.html"),
            styles: [__webpack_require__(/*! ./addc.component.css */ "./src/app/Paciente/addc/addc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Service_service3_service__WEBPACK_IMPORTED_MODULE_4__["Service3Service"]])
    ], AddcComponent);
    return AddcComponent;
}());



/***/ }),

/***/ "./src/app/Paciente/editc/editc.component.css":
/*!****************************************************!*\
  !*** ./src/app/Paciente/editc/editc.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhY2llbnRlL2VkaXRjL2VkaXRjLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Paciente/editc/editc.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Paciente/editc/editc.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Modificar Datos</h3>\n    </div>\n    <!--\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <label for=\"\">Pastilla:</label>\n          <input [(ngModel)]=\"persona.name\" name=\"name\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.age\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.blood\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.prescription\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.dose;\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.fees;\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">stock:</label>\n          <input [(ngModel)]=\"persona.urgency;\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <button (click)=\"Actualizar(persona)\" class=\"btn btn-danger\">Actualizar</button>\n      </form>\n    </div>\n    -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Paciente/editc/editc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Paciente/editc/editc.component.ts ***!
  \***************************************************/
/*! exports provided: EditcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcComponent", function() { return EditcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Modelo_Paciente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Modelo/Paciente */ "./src/app/Modelo/Paciente.ts");
/* harmony import */ var src_app_Service_service3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/service3.service */ "./src/app/Service/service3.service.ts");





var EditcComponent = /** @class */ (function () {
    function EditcComponent(router, service) {
        this.router = router;
        this.service = service;
        this.persona = new src_app_Modelo_Paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"]();
    }
    EditcComponent.prototype.ngOnInit = function () {
        this.Editar();
    };
    EditcComponent.prototype.Editar = function () {
        var _this = this;
        var id = localStorage.getItem("id");
        this.service.getPersonaId(+id)
            .subscribe(function (data) {
            _this.persona = data;
        });
    };
    EditcComponent.prototype.Actualizar = function (persona) {
        var _this = this;
        this.service.updatePersona(persona)
            .subscribe(function (data) {
            _this.persona = data;
            alert("Se Actualizo con Exito...!!!");
            _this.router.navigate(["listac"]);
        });
    };
    EditcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editc',
            template: __webpack_require__(/*! ./editc.component.html */ "./src/app/Paciente/editc/editc.component.html"),
            styles: [__webpack_require__(/*! ./editc.component.css */ "./src/app/Paciente/editc/editc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Service_service3_service__WEBPACK_IMPORTED_MODULE_4__["Service3Service"]])
    ], EditcComponent);
    return EditcComponent;
}());



/***/ }),

/***/ "./src/app/Paciente/listc/listc.component.css":
/*!****************************************************!*\
  !*** ./src/app/Paciente/listc/listc.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhY2llbnRlL2xpc3RjL2xpc3RjLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Paciente/listc/listc.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Paciente/listc/listc.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Pacientes</h3>\n    </div>\n    <div class=\"card-body\">\n\n      <table class=\"table table-hover\">\n        <thead>\n          <tr class=\"text-center\">\n            <th>ID</th>\n            <th>nombre</th>\n            <th>Edad</th>\n            <th>Peso</th>\n            <th>Descripcion Nutricional</th>\n            <th>Tipo de Sangre</th>\n            <th>Descripcion Sintomatologica</th>\n            <th>Urgencia</th>\n            <th>ACCIONES</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let persona of personas\" class=\"text-center\">\n            <td>{{persona.id}}</td>\n            <td>{{persona.name}}</td>\n            <td>{{persona.age}}</td>\n            <td>{{persona.blood}}</td>\n            <td>{{persona.prescription}}</td>\n            <td>{{persona.dose}}</td>\n            <td>{{persona.fees}}</td>\n            <td>{{persona.urgency}}</td>\n            <td>\n              <button (click)=\"Editar(persona)\" class=\"btn btn-warning\">Editar</button>\n              <button (click)=\"Delete(persona)\" class=\"btn btn-danger\" style=\"margin-left: 10px;\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Paciente/listc/listc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Paciente/listc/listc.component.ts ***!
  \***************************************************/
/*! exports provided: ListcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcComponent", function() { return ListcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_service3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/service3.service */ "./src/app/Service/service3.service.ts");




var ListcComponent = /** @class */ (function () {
    function ListcComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ListcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPersonas()
            .subscribe(function (data) {
            _this.personas = data;
        });
    };
    ListcComponent.prototype.Editar = function (persona) {
        localStorage.setItem("id", persona.id.toString());
        this.router.navigate(["editc"]);
    };
    ListcComponent.prototype.Delete = function (persona) {
        var _this = this;
        this.service.deletePersona(persona)
            .subscribe(function (data) {
            _this.personas = _this.personas.filter(function (p) { return p !== persona; });
            alert("Usuario eliminado...");
        });
    };
    ListcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listc',
            template: __webpack_require__(/*! ./listc.component.html */ "./src/app/Paciente/listc/listc.component.html"),
            styles: [__webpack_require__(/*! ./listc.component.css */ "./src/app/Paciente/listc/listc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Service_service3_service__WEBPACK_IMPORTED_MODULE_3__["Service3Service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListcComponent);
    return ListcComponent;
}());



/***/ }),

/***/ "./src/app/Persona/add/add.component.css":
/*!***********************************************!*\
  !*** ./src/app/Persona/add/add.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BlcnNvbmEvYWRkL2FkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Persona/add/add.component.html":
/*!************************************************!*\
  !*** ./src/app/Persona/add/add.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Agregar Personas</h3>\n    </div>\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <label for=\"\">Nombres:</label>\n          <input [(ngModel)]=\"persona.name\" name=\"name\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Apellidos:</label>\n          <input [(ngModel)]=\"persona.apellidos\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <button (click)=\"Guardar()\" class=\"btn btn-danger\">Guardar</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Persona/add/add.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Persona/add/add.component.ts ***!
  \**********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/service.service */ "./src/app/Service/service.service.ts");
/* harmony import */ var src_app_Modelo_Persona__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Modelo/Persona */ "./src/app/Modelo/Persona.ts");





var AddComponent = /** @class */ (function () {
    function AddComponent(router, service) {
        this.router = router;
        this.service = service;
        this.persona = new src_app_Modelo_Persona__WEBPACK_IMPORTED_MODULE_4__["Persona"]();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.Guardar = function () {
        var _this = this;
        this.service.createPersona(this.persona)
            .subscribe(function (data) {
            alert("Se Agrego con Exito...!!!");
            _this.router.navigate(["listar"]);
        });
    };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/Persona/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/Persona/add/add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/Persona/edit/edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/Persona/edit/edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BlcnNvbmEvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Persona/edit/edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/Persona/edit/edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Modificar Datos</h3>\n    </div>\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <label for=\"\">Nombres:</label>\n          <input [(ngModel)]=\"persona.name\" name=\"name\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Apellidos:</label>\n          <input [(ngModel)]=\"persona.apellidos\" name=\"apellidos\" type=\"text\" class=\"form-control\">\n        </div>\n        <button (click)=\"Actualizar(persona)\" class=\"btn btn-danger\">Actualizar</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Persona/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/Persona/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/service.service */ "./src/app/Service/service.service.ts");
/* harmony import */ var src_app_Modelo_Persona__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Modelo/Persona */ "./src/app/Modelo/Persona.ts");





var EditComponent = /** @class */ (function () {
    function EditComponent(router, service) {
        this.router = router;
        this.service = service;
        this.persona = new src_app_Modelo_Persona__WEBPACK_IMPORTED_MODULE_4__["Persona"]();
    }
    EditComponent.prototype.ngOnInit = function () {
        this.Editar();
    };
    EditComponent.prototype.Editar = function () {
        var _this = this;
        var id = localStorage.getItem("id");
        this.service.getPersonaId(+id)
            .subscribe(function (data) {
            _this.persona = data;
        });
    };
    EditComponent.prototype.Actualizar = function (persona) {
        var _this = this;
        this.service.updatePersona(persona)
            .subscribe(function (data) {
            _this.persona = data;
            alert("Se Actualizo con Exito...!!!");
            _this.router.navigate(["listar"]);
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/Persona/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/Persona/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/Persona/listar/listar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Persona/listar/listar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BlcnNvbmEvbGlzdGFyL2xpc3Rhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Persona/listar/listar.component.html":
/*!******************************************************!*\
  !*** ./src/app/Persona/listar/listar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3>Personas</h3>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr class=\"text-center\">\n            <th>ID</th>\n            <th>NOMBRES</th>\n            <th>APELLIDOS</th>\n            <th>ACCIONES</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let persona of personas\" class=\"text-center\">\n            <td>{{persona.id}}</td>\n            <td>{{persona.name}}</td>\n            <td>{{persona.apellidos}}</td>\n            <td>\n              <button (click)=\"Editar(persona)\" class=\"btn btn-warning\">Editar</button>\n              <button (click)=\"Delete(persona)\" class=\"btn btn-danger\" style=\"margin-left: 10px;\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Persona/listar/listar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Persona/listar/listar.component.ts ***!
  \****************************************************/
/*! exports provided: ListarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarComponent", function() { return ListarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/service.service */ "./src/app/Service/service.service.ts");




var ListarComponent = /** @class */ (function () {
    function ListarComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ListarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPersonas()
            .subscribe(function (data) {
            _this.personas = data;
        });
    };
    ListarComponent.prototype.Editar = function (persona) {
        localStorage.setItem("id", persona.id.toString());
        this.router.navigate(["edit"]);
    };
    ListarComponent.prototype.Delete = function (persona) {
        var _this = this;
        this.service.deletePersona(persona)
            .subscribe(function (data) {
            _this.personas = _this.personas.filter(function (p) { return p !== persona; });
            alert("Usuario eliminado...");
        });
    };
    ListarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listar',
            template: __webpack_require__(/*! ./listar.component.html */ "./src/app/Persona/listar/listar.component.html"),
            styles: [__webpack_require__(/*! ./listar.component.css */ "./src/app/Persona/listar/listar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListarComponent);
    return ListarComponent;
}());



/***/ }),

/***/ "./src/app/Service/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/Service/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.Url = 'http://localhost:8080/ejemplo01/personas';
    }
    ServiceService.prototype.getPersonas = function () {
        return this.http.get(this.Url);
    };
    ServiceService.prototype.createPersona = function (persona) {
        return this.http.post(this.Url, persona);
    };
    ServiceService.prototype.getPersonaId = function (id) {
        return this.http.get(this.Url + "/" + id);
    };
    ServiceService.prototype.updatePersona = function (persona) {
        return this.http.put(this.Url + "/" + persona.id, persona);
    };
    ServiceService.prototype.deletePersona = function (persona) {
        return this.http.delete(this.Url + "/" + persona.id);
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/Service/service1.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/service1.service.ts ***!
  \*********************************************/
/*! exports provided: Service1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service1Service", function() { return Service1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var Service1Service = /** @class */ (function () {
    function Service1Service(http) {
        this.http = http;
        //Url='http://localhost:8090/api/v2/medicines';
        this.Url = 'https://javaaaaas.azurewebsites.net/api/v2/medicines';
    }
    Service1Service.prototype.getPersonas = function () {
        return this.http.get(this.Url);
    };
    Service1Service.prototype.createPersona = function (persona) {
        return this.http.post(this.Url, persona);
    };
    Service1Service.prototype.getPersonaId = function (id) {
        return this.http.get(this.Url + "/" + id);
    };
    Service1Service.prototype.updatePersona = function (persona) {
        return this.http.put(this.Url + "/" + persona.id, persona);
    };
    Service1Service.prototype.deletePersona = function (persona) {
        return this.http.delete(this.Url + "/" + persona.id);
    };
    Service1Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service1Service);
    return Service1Service;
}());



/***/ }),

/***/ "./src/app/Service/service2.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/service2.service.ts ***!
  \*********************************************/
/*! exports provided: Service2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service2Service", function() { return Service2Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var Service2Service = /** @class */ (function () {
    function Service2Service(http) {
        this.http = http;
        //Url='http://localhost:8899/api/v3/appointments';
        this.Url = 'https://javamedicineazure.azurewebsites.net/api/v3/appointments';
    }
    Service2Service.prototype.getPersonas = function () {
        return this.http.get(this.Url);
    };
    Service2Service.prototype.createPersona = function (persona) {
        return this.http.post(this.Url, persona);
    };
    Service2Service.prototype.getPersonaId = function (id) {
        return this.http.get(this.Url + "/" + id);
    };
    Service2Service.prototype.updatePersona = function (persona) {
        return this.http.put(this.Url + "/" + persona.id, persona);
    };
    Service2Service.prototype.deletePersona = function (persona) {
        return this.http.delete(this.Url + "/" + persona.id);
    };
    Service2Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service2Service);
    return Service2Service;
}());



/***/ }),

/***/ "./src/app/Service/service3.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/service3.service.ts ***!
  \*********************************************/
/*! exports provided: Service3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service3Service", function() { return Service3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var Service3Service = /** @class */ (function () {
    function Service3Service(http) {
        this.http = http;
        this.Url = 'http://localhost:8080/api/v1/patients';
    }
    Service3Service.prototype.getPersonas = function () {
        return this.http.get(this.Url);
    };
    Service3Service.prototype.createPersona = function (persona) {
        return this.http.post(this.Url, persona);
    };
    Service3Service.prototype.getPersonaId = function (id) {
        return this.http.get(this.Url + "/" + id);
    };
    Service3Service.prototype.updatePersona = function (persona) {
        return this.http.put(this.Url + "/" + persona.id, persona);
    };
    Service3Service.prototype.deletePersona = function (persona) {
        return this.http.delete(this.Url + "/" + persona.id);
    };
    Service3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service3Service);
    return Service3Service;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pagina_pagina_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagina/pagina.component */ "./src/app/pagina/pagina.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Persona_listar_listar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Persona/listar/listar.component */ "./src/app/Persona/listar/listar.component.ts");
/* harmony import */ var _Persona_add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Persona/add/add.component */ "./src/app/Persona/add/add.component.ts");
/* harmony import */ var _Persona_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Persona/edit/edit.component */ "./src/app/Persona/edit/edit.component.ts");
/* harmony import */ var _Medicina_listara_listara_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Medicina/listara/listara.component */ "./src/app/Medicina/listara/listara.component.ts");
/* harmony import */ var _Medicina_adda_adda_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Medicina/adda/adda.component */ "./src/app/Medicina/adda/adda.component.ts");
/* harmony import */ var _Medicina_edita_edita_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Medicina/edita/edita.component */ "./src/app/Medicina/edita/edita.component.ts");
/* harmony import */ var _Apointment_addb_addb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Apointment/addb/addb.component */ "./src/app/Apointment/addb/addb.component.ts");
/* harmony import */ var _Apointment_editb_editb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Apointment/editb/editb.component */ "./src/app/Apointment/editb/editb.component.ts");
/* harmony import */ var _Apointment_listarb_listarb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Apointment/listarb/listarb.component */ "./src/app/Apointment/listarb/listarb.component.ts");
/* harmony import */ var _Paciente_addc_addc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Paciente/addc/addc.component */ "./src/app/Paciente/addc/addc.component.ts");
/* harmony import */ var _Paciente_editc_editc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Paciente/editc/editc.component */ "./src/app/Paciente/editc/editc.component.ts");
/* harmony import */ var _Paciente_listc_listc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Paciente/listc/listc.component */ "./src/app/Paciente/listc/listc.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./estadistica/estadistica.component */ "./src/app/estadistica/estadistica.component.ts");


















var routes = [
    { path: 'listar', component: _Persona_listar_listar_component__WEBPACK_IMPORTED_MODULE_4__["ListarComponent"] },
    { path: 'add', component: _Persona_add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"] },
    { path: 'edit', component: _Persona_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"] },
    { path: 'listara', component: _Medicina_listara_listara_component__WEBPACK_IMPORTED_MODULE_7__["ListaraComponent"] },
    { path: 'adda', component: _Medicina_adda_adda_component__WEBPACK_IMPORTED_MODULE_8__["AddaComponent"] },
    { path: 'edita', component: _Medicina_edita_edita_component__WEBPACK_IMPORTED_MODULE_9__["EditaComponent"] },
    { path: 'pagina', component: _pagina_pagina_component__WEBPACK_IMPORTED_MODULE_1__["PaginaComponent"] },
    { path: 'addb', component: _Apointment_addb_addb_component__WEBPACK_IMPORTED_MODULE_10__["AddbComponent"] },
    { path: 'editb', component: _Apointment_editb_editb_component__WEBPACK_IMPORTED_MODULE_11__["EditbComponent"] },
    { path: 'listarb', component: _Apointment_listarb_listarb_component__WEBPACK_IMPORTED_MODULE_12__["ListarbComponent"] },
    { path: 'addc', component: _Paciente_addc_addc_component__WEBPACK_IMPORTED_MODULE_13__["AddcComponent"] },
    { path: 'editc', component: _Paciente_editc_editc_component__WEBPACK_IMPORTED_MODULE_14__["EditcComponent"] },
    { path: 'listarc', component: _Paciente_listc_listc_component__WEBPACK_IMPORTED_MODULE_15__["ListcComponent"] },
    { path: 'registro', component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_16__["RegistroComponent"] },
    { path: 'estadistica', component: _estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_17__["EstadisticaComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---->\n<nav class=\"navbar navbar-expand-sm bg-light navbar-light\">\n  <div class=\"container-fluid\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <button class=\"nav-link active\" (click)=\"pagina()\" >Inicio</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=\"Listara()\">Listar Platos Saludables</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=\"Nuevoa()\">Agregar Platos Saludables</button>\n      </li>\n\n      <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=\"Listarb()\">Listar Jugos Saludables</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=\"Nuevob()\">Agregar Jugos Saludables</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=\"Listarc()\">Listar Estado de Salud de Pacientes</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=\"Nuevoc()\">Agregar Estado de Salud de Pacientes</button>\n      </li>\n\n      <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=\"estadistica()\">Estadisticas de Salud del Paciente</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"nav-link\" (click)=\"registro()\">registro</button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>\n\n\n\n<!--\n<div class=\"container text-center\">\n  <button (click)=\"Listar()\" class=\"btn btn-info\">Listar</button>\n  <button (click)=\"Nuevo()\" class=\"btn btn-info\" style=\"margin-left: 10px;\">Nuevo</button>\n</div>\n\n<div class=\"container text-center\">\n  <button (click)=\"Listara()\" class=\"btn btn-info\">Listar</button>\n  <button (click)=\"pagina()\" class=\"btn btn-info\">INICIO</button>\n  <button (click)=\"Nuevoa()\" class=\"btn btn-info\" style=\"margin-left: 10px;\">Nuevo</button>\n</div>\n<a href=\"\">Hola SinFloo todos somos hinchas</a>\n<hr>\n<router-outlet></router-outlet>\n-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.Listar = function () {
        this.router.navigate(["listar"]);
    };
    AppComponent.prototype.Nuevo = function () {
        this.router.navigate(["add"]);
    };
    AppComponent.prototype.Listara = function () {
        this.router.navigate(["listara"]);
    };
    AppComponent.prototype.Nuevoa = function () {
        this.router.navigate(["adda"]);
    };
    AppComponent.prototype.pagina = function () {
        this.router.navigate(["pagina"]);
    };
    AppComponent.prototype.Listarb = function () {
        this.router.navigate(["listarb"]);
    };
    AppComponent.prototype.Nuevob = function () {
        this.router.navigate(["addb"]);
    };
    AppComponent.prototype.Listarc = function () {
        this.router.navigate(["listarc"]);
    };
    AppComponent.prototype.Nuevoc = function () {
        this.router.navigate(["addc"]);
    };
    AppComponent.prototype.estadistica = function () {
        this.router.navigate(["estadistica"]);
    };
    AppComponent.prototype.registro = function () {
        this.router.navigate(["registro"]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Persona_listar_listar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Persona/listar/listar.component */ "./src/app/Persona/listar/listar.component.ts");
/* harmony import */ var _Persona_add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Persona/add/add.component */ "./src/app/Persona/add/add.component.ts");
/* harmony import */ var _Persona_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Persona/edit/edit.component */ "./src/app/Persona/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_Service_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/Service/service.service */ "./src/app/Service/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Medicina_adda_adda_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Medicina/adda/adda.component */ "./src/app/Medicina/adda/adda.component.ts");
/* harmony import */ var _Medicina_edita_edita_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Medicina/edita/edita.component */ "./src/app/Medicina/edita/edita.component.ts");
/* harmony import */ var _Medicina_listara_listara_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Medicina/listara/listara.component */ "./src/app/Medicina/listara/listara.component.ts");
/* harmony import */ var _Service_service1_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Service/service1.service */ "./src/app/Service/service1.service.ts");
/* harmony import */ var _pagina_pagina_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pagina/pagina.component */ "./src/app/pagina/pagina.component.ts");
/* harmony import */ var _Apointment_listarb_listarb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Apointment/listarb/listarb.component */ "./src/app/Apointment/listarb/listarb.component.ts");
/* harmony import */ var _Apointment_addb_addb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Apointment/addb/addb.component */ "./src/app/Apointment/addb/addb.component.ts");
/* harmony import */ var _Apointment_editb_editb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Apointment/editb/editb.component */ "./src/app/Apointment/editb/editb.component.ts");
/* harmony import */ var _Service_service2_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Service/service2.service */ "./src/app/Service/service2.service.ts");
/* harmony import */ var _Paciente_addc_addc_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Paciente/addc/addc.component */ "./src/app/Paciente/addc/addc.component.ts");
/* harmony import */ var _Paciente_editc_editc_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Paciente/editc/editc.component */ "./src/app/Paciente/editc/editc.component.ts");
/* harmony import */ var _Paciente_listc_listc_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Paciente/listc/listc.component */ "./src/app/Paciente/listc/listc.component.ts");
/* harmony import */ var _Service_service3_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Service/service3.service */ "./src/app/Service/service3.service.ts");
/* harmony import */ var _estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./estadistica/estadistica.component */ "./src/app/estadistica/estadistica.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Persona_listar_listar_component__WEBPACK_IMPORTED_MODULE_5__["ListarComponent"],
                _Persona_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
                _Persona_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _Medicina_adda_adda_component__WEBPACK_IMPORTED_MODULE_11__["AddaComponent"],
                _Medicina_edita_edita_component__WEBPACK_IMPORTED_MODULE_12__["EditaComponent"],
                _Medicina_listara_listara_component__WEBPACK_IMPORTED_MODULE_13__["ListaraComponent"],
                _pagina_pagina_component__WEBPACK_IMPORTED_MODULE_15__["PaginaComponent"],
                _Apointment_listarb_listarb_component__WEBPACK_IMPORTED_MODULE_16__["ListarbComponent"],
                _Apointment_addb_addb_component__WEBPACK_IMPORTED_MODULE_17__["AddbComponent"],
                _Apointment_editb_editb_component__WEBPACK_IMPORTED_MODULE_18__["EditbComponent"],
                _Paciente_addc_addc_component__WEBPACK_IMPORTED_MODULE_20__["AddcComponent"],
                _Paciente_editc_editc_component__WEBPACK_IMPORTED_MODULE_21__["EditcComponent"],
                _Paciente_listc_listc_component__WEBPACK_IMPORTED_MODULE_22__["ListcComponent"],
                _estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_24__["EstadisticaComponent"],
                _registro_registro_component__WEBPACK_IMPORTED_MODULE_25__["RegistroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [_app_Service_service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"], _Service_service1_service__WEBPACK_IMPORTED_MODULE_14__["Service1Service"], _Service_service2_service__WEBPACK_IMPORTED_MODULE_19__["Service2Service"], _Service_service3_service__WEBPACK_IMPORTED_MODULE_23__["Service3Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/estadistica/estadistica.component.css":
/*!*******************************************************!*\
  !*** ./src/app/estadistica/estadistica.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdGFkaXN0aWNhL2VzdGFkaXN0aWNhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/estadistica/estadistica.component.html":
/*!********************************************************!*\
  !*** ./src/app/estadistica/estadistica.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Estadisticas Del Paciente</h2>\n  <p>La tabla Muestra El Estado del Paciente:</p>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Primer Nombre</th>\n        <th>Apellido</th>\n        <th>Correo</th>\n        <th>Estadistica de Salud</th>\n        <th>Estado de Salud</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>John</td>\n        <td>Doe</td>\n        <td>john@example.com</td>\n        <td>\n          <!---\n          <div id=\"myPlot\" style=\"width:150%;max-width:300px\"></div>\n        -->\n          <img  src=\"https://auditoriamedica.files.wordpress.com/2009/06/estadisticas_1.jpg\" width=\"250px\" height=\"200px\">\n\n        </td>\n        <td>\n            <img  src=\"https://images.emojiterra.com/google/android-pie/512px/1f60a.png\" width=\"50px\" height=\"50px\">\n\n        </td>\n      </tr>\n      <tr>\n        <td>Mary</td>\n        <td>Moe</td>\n        <td>john@example.com</td>\n        <td>\n          <img  src=\"https://cdn.statcdn.com/Statistic/1035000/1037965-blank-754.png\" width=\"250px\" height=\"200px\">\n<!---\n          <div id=\"myPlote\" style=\"width:80%;max-width:500px\"></div>\n-->\n        </td>\n        <td>\n          <img  src=\"https://images.emojiterra.com/google/android-pie/512px/1f60a.png\" width=\"50px\" height=\"50px\">\n\n      </td>\n      </tr>\n      <tr>\n        <td>July</td>\n        <td>Dooley</td>\n        <td>john@example.com</td>\n        <td>\n          <!---\n          <div id=\"myPlotww\" style=\"width:80%;max-width:400px\"></div>\n          -->\n\n          <img  src=\"https://cdn.statcdn.com/Statistic/560000/561516-blank-355.png\" width=\"250px\" height=\"200px\">\n        </td>\n        <td>\n          <img  src=\"https://images.emojiterra.com/google/android-pie/512px/1f60a.png\" width=\"50px\" height=\"50px\">\n\n      </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/estadistica/estadistica.component.ts":
/*!******************************************************!*\
  !*** ./src/app/estadistica/estadistica.component.ts ***!
  \******************************************************/
/*! exports provided: EstadisticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaComponent", function() { return EstadisticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EstadisticaComponent = /** @class */ (function () {
    function EstadisticaComponent() {
    }
    EstadisticaComponent.prototype.ngOnInit = function () {
    };
    EstadisticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estadistica',
            template: __webpack_require__(/*! ./estadistica.component.html */ "./src/app/estadistica/estadistica.component.html"),
            styles: [__webpack_require__(/*! ./estadistica.component.css */ "./src/app/estadistica/estadistica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EstadisticaComponent);
    return EstadisticaComponent;
}());



/***/ }),

/***/ "./src/app/pagina/pagina.component.css":
/*!*********************************************!*\
  !*** ./src/app/pagina/pagina.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS9wYWdpbmEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagina/pagina.component.html":
/*!**********************************************!*\
  !*** ./src/app/pagina/pagina.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body class=\"w3-light-grey\" background=\"https://cdn.pixabay.com/photo/2018/07/10/10/38/edge-3528319_1280.jpg\">\n\n  <!-- Navigation bar with social media icons -->\n  <div class=\"w3-bar w3-black w3-hide-small\">\n    <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-facebook-official\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-instagram\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-snapchat\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-flickr\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\" class=\"w3-bar-item w3-button w3-right\"><i class=\"fa fa-search\"></i></a>\n  </div>\n\n  <!-- w3-content defines a container for fixed size centered content,\n  and is wrapped around the whole page content, except for the footer in this example -->\n  <div class=\"w3-content\" style=\"max-width:1600px\">\n\n    <!-- Header -->\n    <header class=\"w3-container w3-center w3-padding-48 w3-white\" style=\"background-image:url('https://cdn.pixabay.com/photo/2016/07/30/20/52/vintage-1557993_1280.jpg') ; width:1280px;\">\n      <h1 class=\"w3-xxxlarge\" style=\"color:yellow ;\"><b>Portal de Salud Ekilu  </b></h1>\n      <h6 style=\"color:yellow ;\">Bienvenido a Nuestro Sitio Web de Salud <span class=\"w3-tag\">Ekilu </span></h6>\n    </header>\n\n    <!-- Image header -->\n    <header class=\"w3-display-container w3-wide\" id=\"home\">\n      <img class=\"w3-image\" src=\"https://cdn.pixabay.com/photo/2020/02/09/16/24/apple-4833764_1280.jpg\" alt=\"Fashion Blog\" width=\"1279\" height=\"900\">\n      <div class=\"w3-display-left w3-padding-large\">\n        <h1 class=\"w3-text-white\">Ekilu</h1>\n        <h1 class=\"w3-jumbo w3-text-white w3-hide-small\"><b>Mejora tu salud y Bienestar </b>\n          <b>  </b>\n        </h1>\n        <h1 class=\"w3-jumbo w3-text-white w3-hide-small\"><b> </b>\n          <b> con Nuestras Aplicaciones </b>\n        </h1>\n        <h6><button class=\"w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off\" onclick=\"document.getElementById('subscribe').style.display='block'\">Registrate</button></h6>\n      </div>\n    </header>\n\n    <!-- Grid -->\n    <div class=\"w3-row w3-padding w3-border\">\n\n      <!-- Blog entries -->\n      <div class=\"w3-col l8 s12\">\n\n        <!-- Blog entry -->\n        <div class=\"w3-container w3-white w3-margin w3-padding-large\">\n          <div class=\"w3-center\">\n            <h3>Comidas Saludables</h3>\n            <h5>Consulta Dietas Para Mejorar Tu Salud <span class=\"w3-opacity\">Dietas en Base a Postres Saludables</span></h5>\n          </div>\n\n          <div class=\"w3-justify\">\n            <img src=\"https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg\" alt=\"Girl Hat\" style=\"width:100%\" class=\"w3-padding-16\">\n            <p><strong>Alimentacion Saludable!</strong> Llevar una alimentación sana y equilibrada debería ser la norma general en nuestro día a día (aunque de vez en cuando nos demos algún que otro capricho). Es algo que parece muy fácil ponerlo en práctica, pero no siempre es sencillo de cumplir; los distintos ritmos de vida, las obligaciones... pueden volverse en nuestra contra a la hora de encontrar la inspiración que necesitamos para cocinar. Por esta razón, te dejamos una lista con 37 comidas saludables para que puedas elegir la que más te guste y dar rienda suelta a tu faceta de 'cocinillas'. ¡Tienes para todo el mes!</p>\n            <p class=\"w3-left\"><button class=\"w3-button w3-white w3-border\" onclick=\"likeFunction(this)\"><b><i class=\"fa fa-thumbs-up\"></i> Like</b></button></p>\n            <p class=\"w3-right\"><button class=\"w3-button w3-black\" onclick=\"myFunction('demo1')\" id=\"myBtn\"><b>Respuestas </b> <span class=\"w3-tag w3-white\">1</span></button></p>\n            <p class=\"w3-clear\"></p>\n            <div class=\"w3-row w3-margin-bottom\" id=\"demo1\" style=\"display:none\">\n              <hr>\n                <div class=\"w3-col l2 m3\">\n                  <img src=\"https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014_1280.jpg\" style=\"width:90px;\">\n                </div>\n                <div class=\"w3-col l10 m9\">\n                  <h4>George <span class=\"w3-opacity w3-medium\">May 3, 2015, 6:32 PM</span></h4>\n                  <p>Great blog post! Following</p>\n                </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n\n        <!-- Blog entry -->\n        <div class=\"w3-container w3-white w3-margin w3-padding-large\">\n          <div class=\"w3-center\">\n            <h3>Jugos Saludables</h3>\n            <h5>Consulta los Mejores Jugos Saludables  <span class=\"w3-opacity\">2023</span></h5>\n          </div>\n\n          <div class=\"w3-justify\">\n            <img src=\"https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014_1280.jpg\" alt=\"Men in Hats\" style=\"width:100%\" class=\"w3-padding-16\">\n            <p><strong>Jugos!</strong> Los jugos son una de las opciones más saludables que puedes añadir a tu dieta, hoy te presentamos 3 recetas para que elijas tu favorita. El cuerpo humano requiere de vitaminas y minerales para su buen funcionamiento. Muchos alimentos pueden brindarle esto a tu organismo, sin embargo los jugos naturales también pueden aportarte muchos nutrientes. La mejor opción para preparar jugos es usar ingredientes 100% naturales, puedes combinar frutas con verduras y hasta especias. Incluir jugos naturales dentro de tu alimentación, te aporta una gran cantidad de nutrientes, antioxidantes, vitaminas y minerales que mejoran el funcionamiento del organismo en general. Un beneficio de estas bebidas es que son más fáciles de digerir que los alimentos enteros, además resultan una opción práctica y fácil de preparar..</p>\n            <p class=\"w3-left\"><button class=\"w3-button w3-white w3-border\" onclick=\"likeFunction(this)\"><b><i class=\"fa fa-thumbs-up\"></i> Like</b></button></p>\n            <p class=\"w3-right\"><button class=\"w3-button w3-black\" onclick=\"myFunction('demo2')\"><b>Replies  </b> <span class=\"w3-tag w3-white\">2</span></button></p>\n            <p class=\"w3-clear\"></p>\n\n            <!-- Example of comment field -->\n            <div id=\"demo2\" style=\"display:none\">\n              <div class=\"w3-row\">\n                <hr>\n                <div class=\"w3-col l2 m3\">\n                  <img src=\"https://cdn.pixabay.com/photo/2017/03/20/00/51/dr-2157993_1280.jpg\" style=\"width:90px;\">\n                </div>\n                <div class=\"w3-col l10 m9\">\n                  <h4>Amber <span class=\"w3-opacity w3-medium\">April 26, 2015, 10:52 PM</span></h4>\n                  <p>Love your blog page! Simply the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br>\n                </div>\n              </div>\n              <div class=\"w3-row w3-margin-bottom\">\n                <div class=\"w3-col l2 m3\">\n                  <img src=\"https://cdn.pixabay.com/photo/2017/03/20/00/51/dr-2157993_1280.jpg\" style=\"width:90px;\">\n                </div>\n                <div class=\"w3-col l10 m9\">\n                  <h4>Angie <span class=\"w3-opacity w3-medium\">April 23, 2015, 9:12 PM</span></h4>\n                  <p>Love hats!!</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Blog entry -->\n        <div class=\"w3-container w3-white w3-margin w3-padding-large\">\n          <div class=\"w3-center\">\n            <h3>Los Mejores Medicos Especializados En Nutricion</h3>\n            <h5>Title description, <span class=\"w3-opacity\">April 7, 2016</span></h5>\n          </div>\n\n          <div class=\"w3-justify\">\n            <img src=\"https://cdn.pixabay.com/photo/2017/03/20/00/51/dr-2157993_1280.jpg\" alt=\"Runway\" style=\"width:100%\" class=\"w3-padding-16\">\n            <p><strong>Nutricionistas!</strong>Con distinta denominación y estudios en cada país, requiere generalmente de titulación universitaria de cuatro o más años.!</p>\n            <p>Un nutricionista, dietista-nutricionista, nutriólogo, dietista o dietólogo es un profesional sanitario experto en alimentación, nutrición y dietética. Se encarga principalmente del diagnóstico nutricional-dietético general y específico, así como del tratamiento nutricional-dietético de enfermedades, como por ejemplo diabetes, malnutrición, insuficiencia renal, obesidad, enfermedad de Crohn, del tratamiento con nutrición artificial enteral y parenteral en hospitales, o a domicilio, de la prevención de patologías mediante la alimentación, nutrición y dietética, decidir colaborativamente en el tratamiento del paciente oncológico etc., además de adecuar la alimentación, nutrición y dietética de cada persona a cualquier situación fisiológica, como embarazo, lactancia, deporte, etc, y patológica con carácter de primera intención, como facultativo en su área propia de conocimiento, cual es la Nutrición y la Dietética. Así mismo interviene en la gestión de control de calidad y seguridad alimentaria, el diseño y planificación de menús adaptados a patologías en hospitales, comedores escolares o residencias de ancianos o en la intervención, diseño y desarrollo de actividades y políticas relacionadas con la salud pública.</p>\n            <p class=\"w3-left\"><button class=\"w3-button w3-white w3-border\" onclick=\"likeFunction(this)\"><b><i class=\"fa fa-thumbs-up\"></i> Like</b></button></p>\n            <p class=\"w3-right\"><button class=\"w3-button w3-black\" onclick=\"myFunction('demo3')\"><b>Replies  </b> <span class=\"w3-tag w3-white\">3</span></button></p>\n            <p class=\"w3-clear\"></p>\n\n            <!-- Example of comment field -->\n            <div id=\"demo3\" style=\"display:none\">\n              <hr>\n              <div class=\"w3-row w3-margin-bottom\">\n                <div class=\"w3-col l2 m3\">\n                  <img src=\"https://cdn.pixabay.com/photo/2017/06/18/19/35/x-ray-of-the-jaw-2416944_1280.jpg\" style=\"width:90px;\">\n                </div>\n                <div class=\"w3-col l10 m9\">\n                  <h4>Jane <span class=\"w3-opacity w3-medium\">April 10, 2015, 7:22 PM</span></h4>\n                  <p>That was a great runway show! Thanks for everything.</p>\n                </div>\n              </div>\n              <div class=\"w3-row w3-margin-bottom\">\n                <div class=\"w3-col l2 m3\">\n                  <img src=\"https://cdn.pixabay.com/photo/2017/06/18/19/35/x-ray-of-the-jaw-2416944_1280.jpg\" style=\"width:90px;\">\n                </div>\n                <div class=\"w3-col l10 m9\">\n                  <h4>John <span class=\"w3-opacity w3-medium\">April 8, 2015, 10:32 PM</span></h4>\n                  <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>\n                </div>\n              </div>\n              <div class=\"w3-row w3-margin-bottom\">\n                <div class=\"w3-col l2 m3\">\n                  <img src=\"https://cdn.pixabay.com/photo/2020/04/10/08/53/face-mask-5024701_1280.jpg\" style=\"width:90px;\">\n                </div>\n                <div class=\"w3-col l10 m9\">\n                  <h4>Anja <span class=\"w3-opacity w3-medium\">April 7, 2015, 9:12 PM</span></h4>\n                  <p>Cant wait for the runway to start!</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      <!-- END BLOG ENTRIES -->\n      </div>\n\n      <!-- About/Information menu -->\n      <div class=\"w3-col l4\">\n        <!-- About Card -->\n        <div class=\"w3-white w3-margin\">\n          <img src=\"https://cdn.pixabay.com/photo/2017/01/12/14/22/coffee-1974841_1280.jpg\" alt=\"Jane\" style=\"width:100%\" class=\"w3-grayscale\">\n          <div class=\"w3-container w3-black\">\n            <h4>Desayunos</h4>\n            <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>\n          </div>\n        </div>\n        <hr>\n\n        <!-- Posts -->\n        <div class=\"w3-white w3-margin\">\n          <div class=\"w3-container w3-padding w3-black\">\n            <h4>Postres Saludables</h4>\n          </div>\n          <ul class=\"w3-ul w3-hoverable w3-white\">\n            <li class=\"w3-padding-16\">\n              <img src=\"https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_1280.jpg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:50px\">\n              <span class=\"w3-large\">Denim</span>\n              <br>\n              <span>Sed mattis nunc</span>\n            </li>\n            <li class=\"w3-padding-16\">\n              <img src=\"https://cdn.pixabay.com/photo/2020/12/20/10/53/apple-5846664_1280.jpg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:50px\">\n              <span class=\"w3-large\">Sweaters</span>\n              <br>\n              <span>Praes tinci sed</span>\n            </li>\n            <li class=\"w3-padding-16\">\n              <img src=\"https://cdn.pixabay.com/photo/2020/12/20/10/53/apple-5846664_1280.jpg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:50px\">\n              <span class=\"w3-large\">Workshop</span>\n              <br>\n              <span>Ultricies congue</span>\n            </li>\n            <li class=\"w3-padding-16\">\n              <img src=\"https://cdn.pixabay.com/photo/2020/12/20/10/53/apple-5846664_1280.jpg\" alt=\"Image\" class=\"w3-left w3-margin-right w3-sepia\" style=\"width:50px\">\n              <span class=\"w3-large\">Trends</span>\n              <br>\n              <span>Lorem ipsum dipsum</span>\n            </li>\n          </ul>\n        </div>\n        <hr>\n\n        <!-- Advertising -->\n        <div class=\"w3-white w3-margin\">\n          <div class=\"w3-container w3-padding w3-black\">\n            <h4>Advertise</h4>\n          </div>\n          <div class=\"w3-container w3-white\">\n            <div class=\"w3-container w3-display-container w3-light-grey w3-section\" style=\"height:200px\">\n              <span class=\"w3-display-middle\">\n\n              </span>\n            </div>\n          </div>\n        </div>\n        <hr>\n\n        <!-- Tags -->\n        <div class=\"w3-white w3-margin\">\n          <div class=\"w3-container w3-padding w3-black\">\n            <h4>Tags</h4>\n          </div>\n          <div class=\"w3-container w3-white\">\n            <p>\n              <span class=\"w3-tag w3-black w3-margin-bottom\">Fashion</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">New York</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">London</span>\n              <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Hats</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Norway</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Sweaters</span>\n              <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Ideas</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Deals</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Accessories</span>\n              <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">News</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Clothing</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Shopping</span>\n              <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Jeans</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Trends</span>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n        <!-- Inspiration -->\n        <div class=\"w3-white w3-margin\">\n          <div class=\"w3-container w3-padding w3-black\">\n            <h4>Inspiration</h4>\n          </div>\n          <div class=\"w3-row-padding w3-white\">\n            <div class=\"w3-col s6\">\n              <p><img src=\"https://i.ytimg.com/vi/V4hnM97Bq0A/maxresdefault.jpg\" alt=\"Jeans\" style=\"width:100%\"></p>\n              <p><img src=\"https://hoyaragon.es/wp-content/uploads/2021/06/carlos-melara_ekilu_1-2021-06-22-23-32-53-e1624436085786.jpg\" alt=\"Jeans\" style=\"width:100%\"></p>\n            </div>\n            <div class=\"w3-col s6\">\n              <p><img src=\"https://hoyaragon.es/wp-content/uploads/2021/06/carlos-melara_ekilu_1-2021-06-22-23-32-53-e1624436085786.jpg\" alt=\"Men in Hats\" style=\"width:100%\" class=\"w3-grayscale\"></p>\n              <p><img src=\"https://i.ytimg.com/vi/V4hnM97Bq0A/maxresdefault.jpg\" alt=\"Jeans\" style=\"width:100%\"></p>\n           </div>\n          </div>\n        </div>\n        <hr>\n\n        <div class=\"w3-white w3-margin\">\n          <div class=\"w3-container w3-padding w3-black\">\n            <h4>Follow Me</h4>\n          </div>\n          <div class=\"w3-container w3-xlarge w3-padding\">\n            <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n            <i class=\"fa fa-instagram w3-hover-opacity\"></i>\n            <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\n            <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\n            <i class=\"fa fa-twitter w3-hover-opacity\"></i>\n            <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n          </div>\n        </div>\n        <hr>\n\n        <!-- Subscribe -->\n        <div class=\"w3-white w3-margin\">\n          <div class=\"w3-container w3-padding w3-black\">\n            <h4>Registrate</h4>\n          </div>\n          <div class=\"w3-container w3-white\">\n            <p>Enter your e-mail below and get notified on the latest blog posts.</p>\n            <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter e-mail\" style=\"width:100%\"></p>\n            <p><button type=\"button\" onclick=\"document.getElementById('subscribe').style.display='block'\" class=\"w3-button w3-block w3-red\">Subscribe</button></p>\n          </div>\n        </div>\n\n      <!-- END About/Intro Menu -->\n      </div>\n\n    <!-- END GRID -->\n    </div>\n\n  <!-- END w3-content -->\n  </div>\n\n  <!-- Subscribe Modal -->\n  <div id=\"subscribe\" class=\"w3-modal w3-animate-opacity\">\n    <div class=\"w3-modal-content\" style=\"padding:32px\">\n      <div class=\"w3-container w3-white\">\n        <i onclick=\"document.getElementById('subscribe').style.display='none'\" class=\"fa fa-remove w3-transparent w3-button w3-xlarge w3-right\"></i>\n        <h2 class=\"w3-wide\">SUBSCRIBE</h2>\n        <p>Join my mailing list to receive updates on the latest blog posts and other things.</p>\n        <p><input class=\"w3-input w3-border\" type=\"text\" placeholder=\"Enter e-mail\"></p>\n        <button type=\"button\" class=\"w3-button w3-block w3-padding-large w3-red w3-margin-bottom\" onclick=\"document.getElementById('subscribe').style.display='none'\">Subscribe</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <footer class=\"w3-container w3-dark-grey\" style=\"padding:32px\">\n    <a href=\"#\" class=\"w3-button w3-black w3-padding-large w3-margin-bottom\"><i class=\"fa fa-arrow-up w3-margin-right\"></i>To the top</a>\n    <p>Powered by <a href=\"https://www.w3schools.com/w3css/default.asp\" target=\"_blank\">w3.css</a></p>\n  </footer>\n\n  <script>\n  // Toggle between hiding and showing blog replies/comments\n  document.getElementById(\"myBtn\").click();\n  function myFunction(id) {\n    var x = document.getElementById(id);\n    if (x.className.indexOf(\"w3-show\") == -1) {\n      x.className += \" w3-show\";\n    } else {\n      x.className = x.className.replace(\" w3-show\", \"\");\n    }\n  }\n\n  function likeFunction(x) {\n    x.style.fontWeight = \"bold\";\n    x.innerHTML = \"✓ Liked\";\n  }\n  </script>\n\n  </body>\n"

/***/ }),

/***/ "./src/app/pagina/pagina.component.ts":
/*!********************************************!*\
  !*** ./src/app/pagina/pagina.component.ts ***!
  \********************************************/
/*! exports provided: PaginaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaComponent", function() { return PaginaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginaComponent = /** @class */ (function () {
    function PaginaComponent() {
    }
    PaginaComponent.prototype.ngOnInit = function () {
    };
    PaginaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagina',
            template: __webpack_require__(/*! ./pagina.component.html */ "./src/app/pagina/pagina.component.html"),
            styles: [__webpack_require__(/*! ./pagina.component.css */ "./src/app/pagina/pagina.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginaComponent);
    return PaginaComponent;
}());



/***/ }),

/***/ "./src/app/registro/registro.component.css":
/*!*************************************************!*\
  !*** ./src/app/registro/registro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/registro/registro.component.html":
/*!**************************************************!*\
  !*** ./src/app/registro/registro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"/action_page.php\">\n  <div class=\"container\">\n    <h1>Registrate</h1>\n    <p>Porfavor llena este formulario</p>\n    <hr>\n\n    <label for=\"email\"><b>Email</b></label>\n    <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\" required>\n\n    <label for=\"psw\"><b>contrasenia</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" id=\"psw\" required>\n\n    <label for=\"psw-repeat\"><b>repite contrasenia</b></label>\n    <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" id=\"psw-repeat\" required>\n    <hr>\n    <p>By creating an account you agree to our <a href=\"#\">Términos y privacidad .</a>.</p>\n\n    <button type=\"submit\" class=\"registerbtn\">Registrate</button>\n  </div>\n\n  <div class=\"container signin\">\n    <p>Si ya tienes Cuenta Logueate? <a href=\"#\">Logueate</a>.</p>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/registro/registro.component.ts":
/*!************************************************!*\
  !*** ./src/app/registro/registro.component.ts ***!
  \************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistroComponent = /** @class */ (function () {
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/registro/registro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Acer\3D Objects\INGLES\INGLES\clase0001\videosIBM\HospitalAngular\WebService-Angular-Spring-FrontEnd-master (2)\WebService-Angular-Spring-FrontEnd-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map