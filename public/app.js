var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope){

    var teamMembers = ['tm1','tm2','tm3'];
    
    $scope.teamMembers = teamMembers;

    $scope.message = "From Controller";
    $scope.addDetail = function() {
        $scope.teamMembers.push('tmNew');
    };
});

