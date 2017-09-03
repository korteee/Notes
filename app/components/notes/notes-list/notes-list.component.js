class NotesListController {
    constructor() {}


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}
}
export default {
    templateUrl: "./components/notes/notes-list/notes-list.html",
    controller: NotesListController,
    bindings: {
        notes: '<',
        availableCategories: '<',
        onNoteChange:'&',
        onNoteRemove:'&'
    }
};