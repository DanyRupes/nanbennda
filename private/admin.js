var app = angular.module('adminApp', [])
app.controller('adminController', function ($scope,$http) { 


    $http({
        method : 'GET',
        url : '/adminData',
    }).then((out)=>{
        // console.log(out.data)
        $scope.datas = out.data;
    }).catch((err)=>{console.log(err)})
 })