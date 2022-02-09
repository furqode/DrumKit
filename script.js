window.addEventListener("keydown", function(e) {
    const audio =  document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return; //stop the function if no audio is available
    audio.currentTime=0; // resets the time on audio
    audio.play();

})