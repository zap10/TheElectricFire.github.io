var audioList = ["476128", "153594", "476613"];
var audioVol = [0, 0.2, 0.4, 0.6. 0.8, 1];
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
    activeAudio += 1;
    document.getElementById("bg-audio").src = "Resources/Tracks/" + audioList[activeAudio] + ".mp3";
    if (activeAudio >= audioList.length) {
        activeAudio = -1;
    }
}