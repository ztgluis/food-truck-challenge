(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-container\">\n    <mat-card>\n        <mat-card-title>Introduction</mat-card-title>\n        <mat-card-content>\n            <p>\n                This project is a coding challenge with the objective to help\n                anyone in San Francisco find the five closest food trucks to\n                them.\n            </p>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-title>Features</mat-card-title>\n        <div *ngFor=\"let feature of features\" class=\"my-4\">\n            <mat-card-subtitle>{{ feature.title }}</mat-card-subtitle>\n            <mat-card-content>{{ feature.description }}</mat-card-content>\n        </div>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-title>Development</mat-card-title>\n        <div *ngFor=\"let feature of devFeatures\" class=\"my-4\">\n            <mat-card-subtitle>{{ feature.title }}</mat-card-subtitle>\n            <mat-card-content>{{ feature.description }}</mat-card-content>\n        </div>\n    </mat-card>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-container {\n  margin: 1em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzL2Rldi9mb29kLXRydWNrLWNoYWxsZW5nZS9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuIiwiLnBhZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxZW0gMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.features = [
            {
                title: 'Angular Google Maps',
                description: 'Angular Google Maps is used as a component wrapper around the Google Maps API, this allows us to display a map of San Francisco, overlay location markers on the map to display the 5 closest food truck results and to draw an area circle which displays the area of coverage.'
            },
            {
                title: 'San Francisco Data API (powered by Socrata)',
                description: 'The San Francisco Data API (https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat) allows us to query the food trucks registered in San Francisco and their locations, additionally it allows us to specify SoQL queries which are used in this application to filter down the 5 closest entries for a given latitude/longitude.'
            },
            {
                title: 'Angular',
                description: 'Built with Angular as the web application framework for its ease of use and powerful capabilities.'
            },
            {
                title: 'Angular Material',
                description: 'The Angular Material component library is used as the primary library for UI components in this project for the high quality and extensive documentation available.'
            },
            {
                title: 'Bootstrap',
                description: 'Bootstrap is included to be used primarly for its utility classes which enable easily customizing the UI through CSS classes.'
            },
            {
                title: 'Theming',
                description: 'This project is themable, a regular and a dark themes are included. Adding more themes is as easy as adding one more SCSS file with the desired palette of colors'
            },
            {
                title: 'Layout',
                description: 'Interchangeable navigation layout, allows for the main navigation to be switched from a sidenav to top nav'
            },
            {
                title: 'Responsive',
                description: 'Application adapts to the size of the viewport to optimize user experience'
            }
        ];
        this.devFeatures = [
            {
                name: 'cicd',
                title: 'CI/CD',
                description: 'CI/CD is integrated as part of this repository, as a pre-requisite to commiting changes, all staged files will get code styling rules applied through Prettier. As a pre-requisite to pushing changes to Github, a series of checks will run which include: all linting rules must pass, all tests must pass, a minimun of 80% threshold on code coverage is achieved, a prod build completes successfully and a copy of the compiled webpage is pushed to Github Pages.'
            },
            {
                name: 'husky',
                title: 'Husky',
                description: 'Husky is used to add development cycle hooks, such as pre-commit and pre-push hooks used for the CI/CD process.'
            },
            {
                name: 'prettier',
                title: 'Prettier',
                description: 'Prettier is set up as a dev dependency to ensure consistent formatting of the code.'
            },
            {
                name: 'tslint',
                title: 'TSLint',
                description: 'TSLint has been extended to enable ensure coding standards, enforcing strict linting rules based on the Airbnb styleguide.'
            }
        ];
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ftc-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");





let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
                }
            ])
        ],
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]]
    })
], AboutModule);



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module-es2015.js.map