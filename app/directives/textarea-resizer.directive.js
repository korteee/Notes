
class textAreaResizer {
    constructor() {
        return {
            link: link,
            restrict: 'A',
            require: 'ngModel'
        }
    }
}

function link(scope, element, attrs, ngModel) {
    scope.$watch(() => {
        return ngModel.$modelValue;
    }, (newVal) => {
        element.css('height', element[0].scrollHeight + 'px');
    })
}

export default textAreaResizer;