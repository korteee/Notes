class CategoriesController {
    constructor(Categories) {
        this.Categories = Categories;
        this.categories = this.Categories.list;
    }

    $onInit() {}

    $onChanges(changesObj) {}

    $onDestroy() {}

    addCategory(category) {
        this.Categories.add(category);
    }

    removeCategory(categoryIdx) {
        const category = this.Categories.list[categoryIdx];
        this.Categories.remove(categoryIdx);
    }

 

}
export default {
    templateUrl: "./components/categories/categories.html",
    controller: CategoriesController,
    bindings: {}
};