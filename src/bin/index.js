var app = angular.module('nanbenda',['ngFileUpload'])
app.controller('nbController',function ($scope,Upload, $http,$window) { 
    // console.log('Okay')

    // var dialogSuccess = $mdDialog.confirm()
    // .title('Success')
    // .textContent('Submitted Successfully')
    // .ok('Okay')
    // . clickOutsideToClose(true)
    // $scope.nullMe = function () { 
    //     console.log("ohhhh")
    //     // return true
    //  }
    
    $scope.submit = function () { 
        var audio_,group_pic,pic1={},pic2={};
      
            audio_ = $scope.audio; 
            group_pic = $scope.group_pic;        
            pic1 = $scope.pic1; 
            pic2 = $scope.pic2; 
            pic1.name = pic1.name.replace(/[\s]/g, '')
            // console.log($scope.namef)
            // console.log($scope.namet)
            // console.log($scope.message)
            // console.log(group_pic)
            // console.log(audio_)
            console.log(pic1)
           
            // console.log(pic2)
            if(pic1 == undefined || pic2 == undefined){
                alert("Please Include Pictures and Submit")
                return false
            }

            // let myBlob = localStorage.getItem('myBlob')
            // let blobUrl = myBlob.substring(5);
            // console.log(blobUrl)
            // document.querySelector('.overlay').style.display = "block";
            // var config = { responseType : 'blob'}

            // $http.get(blobUrl, config).then(function onSuccess(response) {
            //     var blob = response.data;
            //     var contentType = response.headers("content-type");
            //     var fileURL = URL.createObjectURL(blob);
            //     window.open(fileURL); 
            //   })
            document.querySelector('.overlay').style.display = "block";
       Upload.upload({
         url : '/add',
         method : 'POST',
         data : {
             namef : $scope.namef,
             namet : $scope.namet,
             message : $scope.message,
             group_pic : group_pic,
            //  audio : myBlob,
             pic1 : pic1,
             pic2 : pic2
         }
     }).then((result) => {
        document.querySelector('.overlay').style.display = "none";
         console.log(result)
         alert("successfully submitted")
         window.location.reload()
     }).catch((err) => {
         console.log(err)
         alert("Something Went Wrong Try Again")
     });
    }

    $scope.getaudio = function () { 
        console.log("hiii")
        console.log("before")
        $window.open("/audio.html", "popup", "width=500,height=200,left=10,top=150");
        console.log("after")

     }
    // $scope.pic1_change = function (ev) { 
    //     console.log("hooooo")

    //     $scope.pic1 = "Added"
    //  }

    $scope.downMe1  = function () {  
        console.log("inside ang")
        function downMe(){
            console.log("in")
            $('.picInput1').css({
                'opacity' :0,
                'background-color': 'beige',
                'border': 'none',
            })
            $('.BigBox1').css({
                'background' : 'url("/images/added.png") center center','background-size': 'cover','background-size':'cover'
            })
        }
        downMe()
    }
    $scope.downMe2  = function () {  
        console.log("inside ang")
        function downMe2(){
            $('.picInput2').css({
                'opacity': 0,
                'background-color': 'beige',
                'border': 'none',
            })
            $('.BigBox2').css({
                'background' : 'url("/images/addedto.png") center center','background-size': 'cover','background-size':'cover'
            })
        }
        downMe2()
    }


 })
    // $scope.popupOptions = {
    //     width: 300,
    //     height: 250,
    //     contentTemplate: "info",
    //     showTitle: true,
    //     title: "Information",    
    //     dragEnabled: false,
    //     closeOnOutsideClick: true,
    //     bindingOptions: {
    //         visible: "visiblePopup",
    //     }
    // };
    
    // $scope.showInfo = function (data) {
    //     $scope.currentEmployee = data.model.employee;
    //     $scope.visiblePopup = true;
    // };
//  app.controller('whatsYourNameCtrl',function($scope,$modalInstance,data){
//     $scope.user = {name : ''};
  
//     $scope.cancel = function(){
//       $modalInstance.dismiss('canceled');  
//     }; // end cancel
    
//     $scope.save = function(){
//       $modalInstance.close($scope.user.name);
//     }; 

//  })









// var callAudio = document.querySelector('.callAudio')
// callAudio.addEventListener('click',function (e) {  
//     console.log('done')
// })
// $('iframe').hide()
// $('.callAudio').click(function () { 
//     console.log('done')
//     $('iframe').show()
//     // $('.speakContainer').remove('.speakpic')
//     $('.speakContainer').append('<iframe src="/audio.html" width="300" height="200" frameborder="0"></iframe>')
//     return false
//  })

         // console.log('Audio' + audio_)

        // let _audio = audio_.split('/')[3]
        // let _audio = audio_.replace('blob:','')
        // console.log(audio_)

        // var config = { responseType: 'blob' };

        // $http.get(audio_, config).then(function onSuccess(response) {
        //     var blob = response.data;
        //     var contentType = response.headers("content-type");
        //     var fileURL = URL.createObjectURL(blob);
        //     console.log(fileURL)
        //     window.open(fileURL); 
        // });
        // var fd = new FormData();
        // fd.append('audio', audio_, 'blobby.txt');
// // <script>
// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '1628870487239986',
//     cookie     : true,
//     xfbml      : true,
//     version    : 'v3.1'
//   });
    
//   FB.AppEvents.logPageView();   
//   FB.getLoginStatus(function(response) {
//     //   console.log(response)
//       if(response.authResponse != undefined){
//         console.log(response)
//           statusChangeCallback(response);
//       }
//       else {
//           FB.login(function(res){
//               console.log(res)
//               statusChangeCallback(res);
//           },{scope : 'public_profile,email'})

//       }

// });

// function statusChangeCallback(res) {
//     console.log(res)
//     var uid = res.authResponse.userID;
//     var accessToken = 'EAAXJcvbG7TIBADTKJOnSFbcBOrZCv29fUgRiQI7E2KYcFayjWu36IZBhe5MgsprJ9we4ZBU76v0SsOkUoP9iPT6dfe8OXjgZAo7jjZAtk06iMWZBjJZBa5gZC5GKzHl1Di5zJXLDcDdITH81PKPY2hnwYUmrHZA5enNGeMlIMklTZAfkIqHxMEjNSQW49YUYR4sGcZD';
//     // FB.ui({
//     //     method : 'feed',
//     //     link: 'https://developers.facebook.com/docs/',
//     //     caption: 'An example caption',
//     //     description : "Hello nanbas",
//     //     from : res.authResponse.userID,
//     //     to : '1628870487239986'
//     // }, function(response){
//     //     console.log(response)
//     // })
//     var linkData = {
//         'message' : 'yes I Do'
//         }
//         // FB.post('/me/feed', linkData, accessToken,function (Res) { 
//         //     console.log(Res)
//         //  })
//         FB.api("/254078838745764/feed/", 'POST',{message : "Hello world"},{accessToken : accessToken}, function (Res) {
//             console.log(Res)
//           })
       
//   }
// };

// // (function(d, s, id){
// //    var js, fjs = d.getElementsByTagName(s)[0];
// //    if (d.getElementById(id)) {return;}
// //    js = d.createElement(s); js.id = id;
// //    js.src = "https://connect.facebook.net/en_US/sdk.js";
// //    fjs.parentNode.insertBefore(js, fjs);
// //  }(document, 'script', 'facebook-jssdk'));

 

// // </script>


// // $(document).ready(function() {
// //     console.log("hi")
// //     $.ajaxSetup({ cache: true });
// //     $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){

// //     FB.getLoginStatus(function (res) { 
// //         console.log(res)
// //         statusChangeCallback(res)
// //      })
// //     //   FB.init({
// //     //     appId: '1628870487239986',
// //     //     version: 'v2.7' // or v2.1, v2.2, v2.3, ...
// //     //   }); 
// //     //   FB.ui({
// //     //     method: 'share',
// //     //     href: 'https://developers.facebook.com/docs/'
// //     //   }, function(response){});    
// //     //   $('#loginbutton,#feedbutton').removeAttr('disabled');
// //     //   FB.getLoginStatus(updateStatusCallback);
// //     // FB.login(function(response) {
// //     //     if (response.authResponse) {
// //     //      console.log('Welcome!  Fetching your information.... ');
// //     //      FB.api('/me', function(response) {
// //     //        console.log('Good to see you, ' + response.name + '.');
// //     //      });
// //     //     } else {
// //     //      console.log('User cancelled login or did not fully authorize.');
// //     //     }
// //     // });
// //     });
// //   });
