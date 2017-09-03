import angular from 'angular';

import ofActiveCategory from './ofActiveCategory.filter';

var filters = angular.module('filters', []);

filters.filter('ofActiveCategory', ofActiveCategory);

export default filters;