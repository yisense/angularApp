/**
 * Created by YN on 2016/1/15.
 */
angular.module('ynApp')
    .controller('helloAngularCtrl',['$scope',function($scope){
        $scope.loadData = function(){
            console.log('加载数据中...');
        }
        $scope.greeting = function(name){
            alert(name);
        }
        $scope.text = '你二妹的';
        console.log($scope.text);
    }])
    .directive('hello',function($templateCache){
        return {
            restrict : 'ECMA',
            transclude : true,
            template : '<div>hello hong hong<div ng-transclude></div></div>'
        }
    })
    .directive('loader',function(){
        return {
            restrict : "AE",
            link : function(scope, element, attr){
                element.bind('mouseenter',function(){
                    //scope.loadData();
                    //scope.$apply('loadData()');
                    scope.$apply(attr.howtoload);
                });
            }
        }
    })
    .directive('superman',function(){
        return {
            restrict : 'AE',
            scope : {},
            controller : function($scope){
                $scope.allData = [];
                this.addStrength = function() {
                    $scope.allData.push('strength');
                };
                this.addSpeed = function(){
                    $scope.allData.push('speed');
                }
                this.addLight = function() {
                    $scope.allData.push('ligth');
                }
            },
            link : function(scope,element,attrs) {
                element.addClass('btn btn-primary');
                element.bind('mouseenter',function(){
                    console.log(scope.allData);
                });
            }
        }
    })
    .directive('strength',function() {
        return {
            require : '^superman',
            link : function(scope,element,attrs,supermanCtrl) {
                supermanCtrl.addStrength();
            }
        }
    })
    .directive('speed',function(){
        return {
            require : '^superman',
            link : function(scope,element,attrs,supermanCtrl){
                supermanCtrl.addSpeed();
            }
        }
    })
    .directive('ligth',function(){
        return {
            require : '^superman',
            link : function(scope,element,attrs,supermanCtrl){
                supermanCtrl.addLight();
            }
        }
    })
    .directive('drink',function(){
        return {
            restrict : 'AE',
            scope : {
                greet : '=',
                double : '='
            },
            //template : '<input type="text" class="form-control" ng-model="atext"/>'
            template : '<br><b>greet</b><input type="text" class="form-control" ng-model="greet"/>'+
                       '<br><b>double</b><input type="text" class="form-control" ng-model="double"/>'
        }
    })
    .directive('drink2',function(){
        return {
            restrict : 'AE',
            scope : {
                first : '@'
            },
            //template : '<input type="text" class="form-control" ng-model="atext"/>'
            template : '<br><b>first</b><input type="text" class="form-control" ng-model="first"/>'
        }
    })
