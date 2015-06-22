function onloadQuestion() {
    document.getElementById("questionDiv").innerHTML = "Does the organism have a nucleus; is it eukaryotic?";
    document.getElementById("responseYes").innerHTML = "Yes"; 
    document.getElementById("responseYes").onclick = eukaryoticYes; 
    document.getElementById("responseNo").innerHTML = "No"; 
    document.getElementById("responseYes").onclick = eukaryoticNo;
}

function eukaryoticYes() {
    document.getElementById("questionDiv").innerHTML = "Does the eukaryote have a nervous system or nerve nets?";
    document.getElementById("responseYes").innerHTML = "Yes"; 
    document.getElementById("responseYes").onclick = nervousYes; 
    document.getElementById("responseNo").innerHTML = "No"; 
    document.getElementById("responseYes").onclick = nervousNo;
}

function nervousYes() {
    document.getElementById("questionDiv").innerHTML = "You are most likely dealing with a member of the kingdom <b>Animalia</b>";
    document.getElementById("responseYes").style.visibility = "hidden";
    document.getElementById("responseNo").style.visibility = "hidden";
}

function nervousNo() {
    document.getElementById("questionDiv").innerHTML = "Does the eukaryote have chloroplasts?";
    document.getElementById("responseYes").innerHTML = "Yes"; 
    document.getElementById("responseYes").onclick = plastYes; 
    document.getElementById("responseNo").innerHTML = "No"; 
    document.getElementById("responseYes").onclick = plastNo;
}

function plastYes() {
    document.getElementById("questionDiv").innerHTML = "Is it algae?";
    document.getElementById("responseYes").innerHTML = "Yes"; 
    document.getElementById("responseYes").onclick = algaeYes; 
    document.getElementById("responseNo").innerHTML = "No"; 
    document.getElementById("responseYes").onclick = algaeNo;
}

function algaeYes() {
    document.getElementById("questionDiv").innerHTML = "You are most likely dealing with a member of the kingdom <b>Protista</b>";
    document.getElementById("responseYes").style.visibility = "hidden";
    document.getElementById("responseNo").style.visibility = "hidden";
}

function algaeNo() {
    document.getElementById("questionDiv").innerHTML = "Is it algae?";
    document.getElementById("responseYes").innerHTML = "Yes"; 
    document.getElementById("responseYes").onclick = algaeYes; 
    document.getElementById("responseNo").innerHTML = "No"; 
    document.getElementById("responseYes").onclick = algaeNo;
}