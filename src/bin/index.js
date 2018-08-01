var app = angular.module('nanbenda',['ngFileUpload'])
app.controller('nbController', function ($scope,Upload,$http) { 
    // console.log('Okay')

    // name, audio, message, audio
    $scope.submit = function () { 
        // console.log($scope.name)
        // console.log($scope.message)
        // console.log($scope.audio)
        // console.log(localStorage.getItem('audio_'))
        var audio_,group_pic;
        try {
            audio_ = $scope.audio;
            group_pic = $scope.group_pic;
            // audio_ = localStorage.getItem('audio_') 
        }
        catch(e){
            console.log('Not available Audio')
            audio_ = 'undefined';
            group_pic = 'undefined';
        }
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

       Upload.upload({
         url : '/add',
         method : 'POST',
         data : {
             name : $scope.name,
             message : $scope.message,
             group_pic : group_pic,
             audio : audio_,
         }
     }).then((result) => {
         console.log(result)
     }).catch((err) => {
         console.log(err)
     });
    }
 })











var callAudio = document.querySelector('.callAudio')
callAudio.addEventListener('click',function (e) {  
    console.log('done')
})
$('iframe').hide()
$('.callAudio').click(function () { 
    console.log('done')
    // $('iframe').show()
    // $('.speakContainer').remove('.speakpic')
    $('.speakContainer').append('<iframe src="/audio.html" width="300" height="200" frameborder="0"></iframe>')
    return false
 })
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
