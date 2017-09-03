import angular from 'angular';

import textareaResizer from './textarea-resizer.directive';

var directives = angular.module('directives', []);

directives.directive('textareaResizer', textareaResizer);

export default directives;