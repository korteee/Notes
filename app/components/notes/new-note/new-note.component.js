class NewNoteController {
    constructor(NOTES_COLORS) {
        this.colors = NOTES_COLORS;
        this.resetNote();
    }


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}

    addNote(note) {
        this.onNoteAdd({
            note
        });
        this.resetNote();
    }

    pickColor(color) {
        this.note.color = color;
    }

    resetNote() {
        this.note = {
            color: this.colors[0]
        };
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