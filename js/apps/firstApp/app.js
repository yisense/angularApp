/**
 * Created by ANGULAR-X on 2016/1/15.
 */
var myApp = angular.module('ynApp',[]);
myApp.directive('hello',function() {
    return {
        restrict : 'E',
        template : '<div>Hi everyone!</div>',
        replace : true
    }
});

