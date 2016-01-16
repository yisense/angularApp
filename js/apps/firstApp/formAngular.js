/**
 * Created by YN on 2016/1/16.
 */
var module = angular.module('formApp',[]);
module.controller('testFormCtrl',['$scope',function($scope){
    $scope.user = {
        name : '',
        password : ''
    }
    $scope.save = function(){
        alert('ok!');
    }
}]);