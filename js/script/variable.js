// Variable
var numFormation = -1;
var tabIdTimeOut = [-1];
var timerId;

// Interet
var interetBool = false;

// Langue
var idLangue = 0;

var pourcentageTxt = document.getElementById("pourcentageTxt");
var progressionBloc = document.getElementById("progression");
var progEncours = document.getElementById("progEncours");
var terminalElement = document.getElementById("terminal");

// Projet 
var posY = 0
var projIdVue = -1;

// Observer n°3 etique
var feuille = document.getElementsByClassName("feuille")



// Lancement des fonctions
//introLoad();
etiquette();
afficherTailleBloc();
//testFonctionPerformance();
//actualisationLangue();
carousel(0)

function redifineVariable() {
    pourcentageTxt = document.getElementById("pourcentageTxt");
    progressionBloc = document.getElementById("progression");
    progEncours = document.getElementById("progEncours");
    terminalElement = document.getElementById("terminal");

    // Observer n°3 etique
    feuille = document.getElementsByClassName("feuille")

}