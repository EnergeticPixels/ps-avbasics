window.onload = function() {
	var myVideo = document.getElementById('my-video');
	var play = document.getElementById('playVideoBtn');
	var pause = document.getElementById('pauseVideoBtn');

	// sociate functions with the 'onclick' events;
	play.onclick = playVideoStream;
	pause.onclick = pauseVideoStream;

	function playVideoStream() {
		myVideo.play();
		return false;
	};

	function pauseVideoStream() {
		myVideo.pause();
		return false;
	};
}