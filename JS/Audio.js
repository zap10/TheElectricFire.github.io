var host = "theelectricfire.github.io";
if (window.location.host == host && window.location.protocol != "https:") {window.location.protocol = "https:";

var audioList = ["476128", "153594", "383793", "476613"];
var audioVol = 1;
var activeAudio = 0;

function playAudio() {
    "use strict";   
    document.getElementById("bg-audio").play();
    document.getElementById("aud-control").innerHTML = "<a href=\"#\">Pause Audio</a>";
    document.getElementById("aud-control").onclick = pauseAudio;
}

function pauseAudio() {
    "use strict";
    document.getElementById("bg-audio").pause();
    document.getElementById("aud-control").onclick = playAudio;
    document.getElementById("aud-control").innerHTML = "<a href=\"#\">Play Audio</a>";
}

function switchAudio() {
    "use strict";
    pauseAudio();
    activeAudio += 1;
    document.getElementById("bg-audio").src = "Resources/Tracks/" + audioList[activeAudio] + ".mp3";
    if (activeAudio >= audioList.length) {
        activeAudio = -1;
    }
}

function controlVolume(increment) {
    "use strict";
    
    audioVol += increment;
    
    if (audioVol > 1) {
        audioVol = 1;
    }
    
    if (0 > audioVol) {
        audioVol = 0;
    }
    
    document.getElementById("bg-audio").volume(controlVolume);
}