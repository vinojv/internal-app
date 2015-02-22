/**
*   rb enter directive
**/

angular.module('rbook')
    .directive('rbEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    console.log("bz enter", attrs.rbEnter);
                    scope.$eval(attrs.rbEnter);
                });

                event.preventDefault();
            }
        });
    };
});
