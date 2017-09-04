class ofActiveCategory {
    constructor() {
        return (notes, categories) => {
            if (!notes || !notes.length) return;

            const activeCategories = categories.filter(c => c.isActive);

            if (!activeCategories.length) return notes;

            return notes.filter(note => !!activeCategories.find(ac => {
                if (note.category)
                    return ac.title === note.category.title
                return false;
            }));
        }
    }
}
export default ofActiveCategory;