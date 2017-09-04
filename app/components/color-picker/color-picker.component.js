class ColorPickerController {
    constructor() {}


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}
}
export default {
    templateUrl: "./components/color-picker/color-picker.html",
    controller: ColorPickerController,
    bindings: {
        onColorPick: '&',
        availableColors: '<'
    }
};