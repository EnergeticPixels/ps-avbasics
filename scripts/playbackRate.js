window.onload = function() {
	var v = document.getElementById('pbrVideo');
	var p = document.getElementById('pbr');
	var cp = document.getElementById('currentPbr');

	p.addEventListener('input', function() {
		cp.innerHTML = p.value;
		v.playbackRate = p.value;
	}, false);
};