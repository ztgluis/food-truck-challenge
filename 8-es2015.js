(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UoYK:function(e,t,i){"use strict";i.r(t),i.d(t,"AboutModule",(function(){return p}));var a=i("tyNb"),o=i("M0ag"),s=i("fXoL"),n=i("Wp6s"),r=i("ofXK");function c(e,t){if(1&e&&(s.Rb(0,"div",2),s.Rb(1,"mat-card-subtitle"),s.zc(2),s.Qb(),s.Rb(3,"mat-card-content"),s.zc(4),s.Qb(),s.Qb()),2&e){const e=t.$implicit;s.Ab(2),s.Ac(e.title),s.Ab(2),s.Ac(e.description)}}function l(e,t){if(1&e&&(s.Rb(0,"div",2),s.Rb(1,"mat-card-subtitle"),s.zc(2),s.Qb(),s.Rb(3,"mat-card-content"),s.zc(4),s.Qb(),s.Qb()),2&e){const e=t.$implicit;s.Ab(2),s.Ac(e.title),s.Ab(2),s.Ac(e.description)}}let d=(()=>{class e{constructor(){this.features=[{title:"Angular Google Maps",description:"Angular Google Maps is used as a component wrapper around the Google Maps API, this allows us to display a map of San Francisco, overlay location markers on the map to display the 5 closest food truck results and to draw an area circle which displays the area of coverage."},{title:"San Francisco Data API (powered by Socrata)",description:"The San Francisco Data API (https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat) allows us to query the food trucks registered in San Francisco and their locations, additionally it allows us to specify SoQL queries which are used in this application to filter down the 5 closest entries for a given latitude/longitude."},{title:"Angular",description:"Built with Angular as the web application framework for its ease of use and powerful capabilities."},{title:"Angular Material",description:"The Angular Material component library is used as the primary library for UI components in this project for the high quality and extensive documentation available."},{title:"Bootstrap",description:"Bootstrap is included to be used primarly for its utility classes which enable easily customizing the UI through CSS classes."},{title:"Theming",description:"This project is themable, a regular and a dark themes are included. Adding more themes is as easy as adding one more SCSS file with the desired palette of colors"},{title:"Layout",description:"Interchangeable navigation layout, allows for the main navigation to be switched from a sidenav to top nav"},{title:"Responsive",description:"Application adapts to the size of the viewport to optimize user experience"}],this.devFeatures=[{name:"cicd",title:"CI/CD",description:"CI/CD is integrated as part of this repository, as a pre-requisite to commiting changes, all staged files will get code styling rules applied through Prettier. As a pre-requisite to pushing changes to Github, a series of checks will run which include: all linting rules must pass, all tests must pass, a minimun of 80% threshold on code coverage is achieved, a prod build completes successfully and a copy of the compiled webpage is pushed to Github Pages."},{name:"husky",title:"Husky",description:"Husky is used to add development cycle hooks, such as pre-commit and pre-push hooks used for the CI/CD process."},{name:"prettier",title:"Prettier",description:"Prettier is set up as a dev dependency to ensure consistent formatting of the code."},{name:"tslint",title:"TSLint",description:"TSLint has been extended to enable ensure coding standards, enforcing strict linting rules based on the Airbnb styleguide."}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Fb({type:e,selectors:[["ftc-about"]],decls:15,vars:2,consts:[[1,"page-container"],["class","my-4",4,"ngFor","ngForOf"],[1,"my-4"]],template:function(e,t){1&e&&(s.Rb(0,"div",0),s.Rb(1,"mat-card"),s.Rb(2,"mat-card-title"),s.zc(3,"Introduction"),s.Qb(),s.Rb(4,"mat-card-content"),s.Rb(5,"p"),s.zc(6," This project is a coding challenge with the objective to help anyone in San Francisco find the five closest food trucks to them. "),s.Qb(),s.Qb(),s.Qb(),s.Rb(7,"mat-card"),s.Rb(8,"mat-card-title"),s.zc(9,"Features"),s.Qb(),s.xc(10,c,5,2,"div",1),s.Qb(),s.Rb(11,"mat-card"),s.Rb(12,"mat-card-title"),s.zc(13,"Development"),s.Qb(),s.xc(14,l,5,2,"div",1),s.Qb(),s.Qb()),2&e&&(s.Ab(10),s.hc("ngForOf",t.features),s.Ab(4),s.hc("ngForOf",t.devFeatures))},directives:[n.a,n.f,n.c,r.j,n.e],styles:[".page-container[_ngcontent-%COMP%]{margin:1em 0}"]}),e})(),p=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[o.a,a.c.forChild([{path:"",component:d}])]]}),e})()}}]);