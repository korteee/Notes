import angular from 'angular';

class Categories {
    constructor() {
        this.list = localStorage.getItem('categories') ? angular.fromJson(localStorage.getItem('categories')) : [];
    }

    add(category) {
        this.list.push(angular.copy(category));
        localStorage.setItem('categories', angular.toJson(this.list));
    }

    remove(categoryIdx) {
        this.list.splice(categoryIdx, 1);
        localStorage.setItem('categories', angular.toJson(this.list));
    }

}

export default Categories;