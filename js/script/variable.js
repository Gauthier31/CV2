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

// Pointeur
var ajustement = window.innerWidth * 0.05 / 2;  // moitié de la taille du bloc
var pointeur = document.getElementById("pointeur");

var positionTop = pointeur.getBoundingClientRect().top + window.scrollY + ajustement;
var positionLeft = pointeur.getBoundingClientRect().left + window.scrollX + ajustement;


// Lancement des fonctions
introLoad();
etiquette();
afficherTailleBloc();
testFonctionPerformance();
actualisationLangue();

function redifineVariable() {
    pourcentageTxt = document.getElementById("pourcentageTxt");
    progressionBloc = document.getElementById("progression");
    progEncours = document.getElementById("progEncours");
    terminalElement = document.getElementById("terminal");

    // Observer n°3 etique
    feuille = document.getElementsByClassName("feuille")

    pointeur = document.getElementById("pointeur");

    positionTop = pointeur.getBoundingClientRect().top + window.scrollY + ajustement;
    positionLeft = pointeur.getBoundingClientRect().left + window.scrollX + ajustement;
}