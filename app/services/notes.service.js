import angular from 'angular';

class Notes {
    constructor() {
        this.list = localStorage.getItem('notes') ? angular.fromJson(localStorage.getItem('notes')) : [];
    }

    add(note) {
        this.list.push(angular.copy(note));
        localStorage.setItem('notes', angular.toJson(this.list));
    }

    remove(noteIdx) {
        this.list.splice(noteIdx, 1);
        localStorage.setItem('notes', angular.toJson(this.list));
    }

    update() {
        localStorage.setItem('notes', angular.toJson(this.list))
    }

}

export default Notes;