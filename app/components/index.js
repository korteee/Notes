import angular from 'angular';

import notes from './notes/notes.component';
import newNote from './notes/new-note/new-note.component';
import notesList from './notes/notes-list/notes-list.component';
import singleNote from './notes/single-note/single-note.component';

import categories from './categories/categories.component';
import newCategory from './categories/new-category/new-category.component';
import categoriesList from './categories/categories-list/categories-list.component';
import singleCategory from './categories/single-category/single-category.component';


var components = angular.module('components', []);

components
    .component('notes', notes)
    .component('newNote', newNote)
    .component('notesList', notesList)
    .component('singleNote', singleNote)
    .component('categories', categories)
    .component('newCategory', newCategory)
    .component('categoriesList', categoriesList)
    .component('singleCategory', singleCategory);


export default components;