window.onload = function() {
	var myAudio = document.getElementById('my-audio');
	var controlBar = document.getElementById('control-bar');
	var play = document.getElementById('playAudioBtn');
	var pause = document.getElementById('pauseAudioBtn');

	// add eventListeners
	myAudio.addEventListener('timeupdate', updatePlayed, false);
	myAudio.addEventListener('progress', updateBuffered, false);
	

	// sociate functions with the 'onclick' events;
	play.onclick = playAudioStream;
	pause.onclick = pauseAudioStream;

	function updatePlayed() {
		var played = parseInt(((myAudio.currentTime / myAudio.duration) * 100), 10);
		// turns it into a percentage
		addBars(played, 'played-bar');
	};

	function updateBuffered() {
		var loaded = parseInt(((myAudio.buffered.end(0) / myAudio.duration) * 100), 10);
		// turns it into a percentage
		addBars(loaded, 'buffer-bar');
	};

	function addBars(amount, element) {
		var bars = "00";
		// since bars in increments of 10
		for (i = 10; i < 100; i = i + 10) {
			if (i <= amount) {
				bars = bars + " " + i;
			};
		};
		var bar = document.getElementById(element);
		bar.innerHTML = bars;
	};

	controlBar.onclick = setTime;

	function setTime(e) {
		var playPosition = e.target.getAttribute('href'); // from 00 to 90
		myAudio.currentTime = (myAudio.duration * playPosition)/100;
		myAudio.play();
		return false;
	};

	function playAudioStream() {
		myAudio.play();
		return false;
	};

	function pauseAudioStream() {
		myAudio.pause();
		return false;
	};
}