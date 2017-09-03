import angular from 'angular';
import headerComponent from './app-header/app-header.component';
import footerComponent from './app-footer/app-footer.component';

var common = angular.module('common', [])

common
    .component('appHeader', headerComponent)
    .component('appFooter', footerComponent);

export default common;