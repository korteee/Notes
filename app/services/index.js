import angular from 'angular';

import categories from './categories.service';
import notes from './notes.service';

var services = angular.module('services', []);

services.service('Categories', categories)
    .service('Notes', notes);

export default services;