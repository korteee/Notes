class NotesController {
    constructor(Notes, Categories) {
        this.Notes = Notes;
        this.notes = this.Notes.list;
        this.categories = Categories.list;
    }


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}

    addNote(note) {
        this.Notes.add(note);
    }

    changeNote() {
        this.Notes.update();
    }

    removeNote(noteIdx) {
        this.Notes.remove(noteIdx);
    }


}
export default {
    templateUrl: "./components/notes/notes.html",
    controller: NotesController,
    bindings: {}
};