const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeControl = document.getElementById('volumeControl');
const progressControl = document.getElementById('progressControl');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

progressControl.addEventListener('input', () => {
    audio.currentTime = (progressControl.value / 100) * audio.duration;
});

audio.addEventListener('timeupdate', () => {
    progressControl.value = (audio.currentTime / audio.duration) * 100;
});
