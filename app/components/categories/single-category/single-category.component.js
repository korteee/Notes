class SingleCategoryController {
    constructor() {}


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}

    removeCategory(event, categoryIndex) {
        event.stopPropagation();
        this.onCategoryRemove(categoryIndex);
    }
}
export default {
    templateUrl: "./components/categories/single-category/single-category.html",
    controller: SingleCategoryController,
    bindings: {
        category: '<',
        onCategoryRemove: '&'
    }
};