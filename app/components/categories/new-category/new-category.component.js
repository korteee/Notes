class NewCategoryController { 
    constructor() {} 


     $onInit() {}

     $onChanges(changesObj) {}

     $onDestroy() {}

     addCategory(category) {
         this.onCategoryAdd({category});
         this.category = {};
     }
}
export default {
    templateUrl: "./components/categories/new-category/new-category.html" , 
    controller: NewCategoryController,
    bindings: {
        onCategoryAdd:'&'
    }
};