var app = angular.module('feedApp', [])
app.controller('feedController', function ($scope,$http) { 

     $http({
        method : 'GET',
        url : '/item_data',
    }).then((out)=>{
        console.log(out.data)
        $scope.datas = out.data;
    }).catch((err)=>{console.log(err)})


    sessionStorage.setItem('item_load',null)
    document.querySelector('.overlay').style.display = "none";
    $scope.item = function (e) { 
        document.querySelector('.overlay').style.display = "block";
        console.log(e._id)
        sessionStorage.setItem('item_load',e._id)
        window.location.href = '/admin.html'
     }


     $scope.playAudio = function (d) {
         let ul = '/'+d.audio;  
         window.location.assign(ul);
      }
 })