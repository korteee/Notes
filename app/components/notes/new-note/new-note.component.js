class NewNoteController {
    constructor() {}


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}

    addNote(note) {
        this.onNoteAdd({
            note
        });
        this.note = {};
    }
}
export default {
    templateUrl: "./components/notes/new-note/new-note.html",
    controller: NewNoteController,
    bindings: {
        availableCategories: '<',
        onNoteAdd: "&"
    }
};