window.onload = function() {
	var myAudio = document.getElementById('my-audio');
	var play = document.getElementById('playAudioBtn');
	var pause = document.getElementById('pauseAudioBtn');

	// sociate functions with the 'onclick' events;
	play.onclick = playAudioStream;
	pause.onclick = pauseAudioStream;

	function playAudioStream() {
		myAudio.play();
		return false;
	};

	function pauseAudioStream() {
		myAudio.pause();
		return false;
	};
}