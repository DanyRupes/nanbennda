var myAudioApp = angular.module('audioApp',['ngFileUpload'])
myAudioApp.controller('audioController', function ($scope,Upload,$http,$window,$timeout) { 

	URL = window.URL || window.webkitURL;

	var gumStream; 						//stream from getUserMedia()
	var rec; 							//Recorder.js object
	var input; 							//MediaStreamAudioSourceNode we'll be recording
	
	
	var AudioContext = window.AudioContext || window.webkitAudioContext;
	var audioContext //audio context to help us record

//webkitURL is deprecated but nevertheless


var recordButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");
var pauseButton = document.getElementById("pauseButton");
stopButton.disabled = true;
pauseButton.disabled = true
// //add events to those 2 buttons
// recordButton.addEventListener("click", startRecording);
// stopButton.addEventListener("click", stopRecording);
// pauseButton.addEventListener("click", pauseRecording);


$scope.startRecording = function startRecording() {
	console.log("recordButton clicked");

    const constraints = window.constraints = {
        audio: true,
        video: false
      };

	recordButton.innerHTML = "Recording...."
	recordButton.disabled = true;
	stopButton.disabled = false;
	pauseButton.disabled = false



	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
		console.log("getUserMedia() success, stream created, initializing Recorder.js ...");
		audioContext = new AudioContext();

		gumStream = stream;

		input = audioContext.createMediaStreamSource(stream);

		rec = new Recorder(input,{numChannels:1})


		rec.record()

		console.log("Recording started");

	}).catch(function(err) {
    	recordButton.disabled = false;
    	stopButton.disabled = true;
    	pauseButton.disabled = true
	});
}

$scope.pauseRecording = function pauseRecording(){
	recordButton.innerHTML = "Record"
	console.log("pauseButton clicked rec.recording=",rec.recording );
	if (rec.recording){
		//pause
		rec.stop();
		pauseButton.innerHTML="Resume";
	}else{
		//resume
		rec.record()
		pauseButton.innerHTML="Pause";

	}
}

$scope.stopRecording = function stopRecording() {
	console.log("stopButton clicked");


	stopButton.disabled = true;
	recordButton.disabled = false;
	pauseButton.disabled = true;
	pauseButton.innerHTML="Pause";

	rec.stop();
	gumStream.getAudioTracks()[0].stop();
	rec.exportWAV(createDownloadLink);
	$('#controls').remove()
}

let createDownloadLink = function createDownloadLink(blob) {
	console.log(blob)
	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');
	var li = document.createElement('li');
	var link = document.createElement('a');
	

	var filename = url.split('/')[3]

	au.controls = true;
	au.src = url;

	link.href = url;
	link.download = filename+".wav"; 
	// link.innerHTML = "Save to disk";
	li.className = 'myAudFile'
	li.appendChild(au);

	// li.appendChild(document.createTextNode(filename+".wav "))

	li.appendChild(link);

	var upload = document.createElement('a');
	upload.href="#";
	upload.innerHTML = "Upload";
	
	localStorage.setItem('myBlob', link)
	li.appendChild(document.createTextNode (" "))//add a space in between
	li.appendChild(upload)//add the upload link to li

	//add the li element to the ol
	recordingsList.appendChild(li);
	let blobLink = link.href;

	

	upload.addEventListener("click", function(event){

		document.querySelector('.overlay').style.display = "block";
				$http({
					url : blobLink,
					method : 'GET',
					responseType : 'blob',
					headers: { 'Content-Type': undefined }
				}).then((res)=>{
					console.log(res)
					console.log(res.data)
					let Audi = res.data;
					Audi.name = filename;
					console.log(Audi)
					Upload.upload({
						url : '/postAudio',
						method : 'POST',
						data : {
							audi : res.data,
						},
					}).then((output)=>{
						console.log("okay")
						$('.myAudFile').text("SuccessFully Addedd This Audio")
						
						$timeout(function () {
							document.querySelector('.overlay').style.display = "none";
							alert('Audio Added Succesfully')
							$window.close()
						  }, 1000)
					}).catch((err)=>{console.log(err)})
				})
			
			
	})

}


})


			// var myBlob = link;
			// console.log(new Blob(link))
			// var fd = new FormData()
			// fd.append('fname', 'test.wav');
			// fd.append('audio', blob);
			// // fd.append('audio', blob, filename)
			// fetch('/postAudio',{
			// 	method : 'POST',
			// 	body : fd,
			// 	processData: false,
			// 	contentType: false
			// }).then((out)=>{
			// 	console.log("Then")
			// })
				// console.log($scope.audio.target)
				// console.log($scope.audio)
				// var config = { headers: { 'Content-Type': undefined } };
				// console.log(blob)
				// console.log(link.href)
				// $http.post('/postAudio', link.href, config)
				// .then(function (response) {
				// 	var data = response.data;
				// 	var status = response.status;
				// 	var statusText = response.statusText;
				// 	var headers = response.headers;
				// 	var config = response.config;

				// 	console.log("Success", status);
				// 	return response; 
				// }).catch(function (errorResponse) {
				// 	console.log("Error", errorResponse.status);
				// 	throw errorResponse;
				// });
				// var fd = new FormData();
				// // fd.append('fname', 'test1.wav');
				// console.log(blob)
				// fd.append('file', blob,'test.wav');
				// $.ajax({
				// 	type: 'POST',
				// 	url: '/postAudio',
				// 	data : fd,
				// 	processData: false,
				// 	contentType: false
				// }).done(function(data) {
				// 	// print the output from the upload.php script
				// 	console.log(data);
				// });
     
			// trigger the read from the reader...

			// var xhr = new XMLHttpRequest();
			// xhr.open('POST','/postAudio', true)
			// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
			// xhr.send(blob)
		//   var xhr=new XMLHttpRequest();
		//   xhr.onload=function(e) {
		//       if(this.readyState === 4) {
		//           console.log("Server returned: ",e.target.responseText);
		//       }
		//   };

		//   var fd=new FormData();
        //   fd.append("audio",blob, filename);
        //   console.log(blob)
		//   xhr.open("POST","postAudio",true);
		//   xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
		// 	console.log(link)
		//   xhr.send(new Blob(link));