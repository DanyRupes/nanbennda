var app = angular.module('adminApp', [])
app.controller('adminController', function ($scope,$http) { 

    let sid = sessionStorage.getItem('item_load');
    // console.log(sid)
    $scope.Data = [];
    if(sid != null){
        console.log(sid)
        $http({
            method : 'POST',
            url : '/adminData',
            data : {
                id : sid,
            }
        }).then((out)=>{
            console.log(out.data[0])
            $scope.Data = out.data[0];
            // $scope.Data.pic1 = 'http://localhost/'+$scope.Data.pic1;
            console.log($scope.Data.pic1)
        }).catch((err)=>{console.log(err)})
        .then(console.log($scope.Data))
    }

    else {
        alert('Bro Select from //feed.html')
    }
 })