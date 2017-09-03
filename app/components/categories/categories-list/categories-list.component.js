class CategoriesListController {
    constructor() {}


    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}

    toggleCategoryStatus(category) {
        category.isActive = !category.isActive;
    }

}
export default {
    templateUrl: "./components/categories/categories-list/categories-list.html",
    controller: CategoriesListController,
    bindings: {
        onCategoryRemove: '&',
        categories: '<'
    }
};