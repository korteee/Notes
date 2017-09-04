class SingleNoteController {
    constructor(NOTES_COLORS) {
        this.isOnEditCategory = false;
        this.colors = NOTES_COLORS;
    }


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}

    textAreaAdjust(event) {
        var o = event.target;
        o.style.height = "1px";
        o.style.height = (25 + o.scrollHeight) + "px";
    }

    pickColor(color) {
        this.note.color = color;
        this.onNoteChange();
    }


}
export default {
    templateUrl: "./components/notes/single-note/single-note.html",
    controller: SingleNoteController,
    bindings: {
        note: '<',
        availableCategories: '<',
        onNoteChange: '&',
        onNoteRemove: '&'
    }
};