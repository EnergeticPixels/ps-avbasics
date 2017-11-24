window.onload = function() {

	var myAudio = document.createElement('audio');
	var playlistItems = document.getElementsByClassName('playlist-item');
	var playlist = document.getElementsByClassName('playlist');
	var currentTrack = '';

	for(i = 0; i < playlistItems.length; i++) {
		playlistItems[i].onclick = playTrackHandler;
	}

	function playTrackHandler() {
		var src = this.getAttribute('href');
		currentTrack = src;
		playTrack(src);
		return(false);
	};

	function playTrack(src) {
		if (myAudio.canPlayType('audio/ogg; codecs="vorbis"')) {
			src = 'http://jPlayer.org/audio/ogg/' + src + '.ogg';
		} else {
			src = 'http://jPlayer.org/audio/mp3/' + src + '.mp3';
		}

		myAudio.setAttribute('src', src);
		myAudio.play();
	}

	// ended first event fires when the media has finished playing
	myAudio.addEventListener('ended', function() {
		for(i=0; i < playlistItems.length; i++) {
			if (playlistItems[i].getAttribute('href') == currentTrack) {
				if (i < (playlistItems.length - 1)) {
					playTrack(playlistItems[i+1].getAttribute('href'));
				} else {
					// start from beginnign (loop it to jonesy)
					playTrack(playlistItems[0].getAttribute('href'));
				}
			}
		}
	}, false);

	// assuming an element with id shuffle
	
	var shuffleButton = document.getElementById('shuffle');
	shuffleButton.onclick = shufflePlaylist;

	function shuffle(els) {
		var array = Array.prototype.slice.call(els, 0);

		return array.sort(function() {
			return 0.5 - Math.random();
		});
	}

	// apply the shuffle to playlist items on DOM

	function shufflePlaylist() {
		var tracklist = document.getElementById('tracklist');
		tracklist.innerHTML = '';
		playlist = shuffle(playlist);

		for (var i = 0; i < playlist.length; i++) {
			tracklist.appendChild(playlist[i]);
		}

		playlistItems = document.getElementsByClassName('playlist-item');

		return false;
	}
}