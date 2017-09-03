class SingleNoteController {
    constructor() {
        this.isOnEditCategory = false;
    }


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}

    textAreaAdjust(event) {
        var o = event.target;
        o.style.height = "1px";
        o.style.height = (25 + o.scrollHeight) + "px";
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