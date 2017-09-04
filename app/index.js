import angular from 'angular';

import common from './common';
import components from './components';
import services from './services';
import filters from './filters';
import directives from './directives';
import styles from './styles/sass/index.scss';

var ngModule = angular.module('app', [common.name, components.name, services.name, filters.name, directives.name]);

class AppController {
    constructor() {}
    $onInit() {}
    $onChanges(changesObj) {}
    $onDestroy() {}
}

ngModule.component('app', {
    template: `
        <app-header></app-header>
        <main>
            <categories></categories>
            <notes></notes>
        </main>
        <app-footer></app-footer>
    `,
    controller: AppController,
    bindings: {}
});

ngModule.constant('NOTES_COLORS', ['#fff', '#fb9a39', '#9afb53', '#eac2ca', '#90dcc0', '#ff82b2', '#eef04f'])

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['app']))