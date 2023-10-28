const FORMATION = [
    [
        "C:\\User\\Étudiant\\Lycée\\Lycée Stéphanne Hessel>",
        "BAC S, option Sience de l'ingénieur.",
        "Cet enseignement aborde les grands domaines techniques de la mécanique, l'automatisme, l'informatique l'électronique et l'électrotechnique.",
        "La formation s'adresse à des élèves souhaitant acquérir une formation scientifique et des compétences technologiques. Elle lui permettra aussi de maitriser les nouvelles technologies.",
        10,
    ],
    [
        "C:\\User\\Étudiant\\IUT\\Informatique>",
        "Diplôme Universitaire de Technologie à l'Université Toulouse Capitole dispensé a Rodez.",
        "Ce DUT m'a permis d'acquérir de nombreuses compétences en matière informatique: les langages informatiques tels que java, css, php, javascript et sql pour le développement et la gestion de base de données.",
        "Mais aussi des compétences en mathématique et en statistique qui sont utiles pour les branches techniques de l'informatique (IA, GPS, Moteur de recherche…).",
        40,
    ],
    [
        "C:\\User\\Alternance\\Licence professionnelle\\MIASHS>",
        "Licence MIASHS parcours MIAGE en alternance à l'Université Toulouse Capitole.",
        "Cette formation est centrée sur la modélisation, l'analyse de données, la programmation et le traitement de données permettant de modéliser les systèmes d'information et de développer des solutions d'informatisation adaptées.",
        "Consolidation des compétences informatiques et Mathématiques apprise durant mon DUT Informatique.",
        60,
    ],
    [
        "C:\\User\\Alternance\\Master professionnelle\\MIAGE>",
        "Master MIAGE option IDA en alternance toujours à l'Université Toulouse Capitole.",
        "Master centrée sur la gestion des données.",
        "En cours ...",
        80,
    ],
]

var numFormation = -1
var tabIdTimeOut = [-1]
var timerId

const pourcentageTxt = document.getElementById("pourcentageTxt");
const progressionBloc = document.getElementById("progression");
const progEncours = document.getElementById("progEncours");
const terminalElement = document.getElementById("terminal");

function progression(val) {

    // Barre de progressio
    numFormation = (numFormation + val < 0 || numFormation + val > FORMATION.length) ? numFormation : numFormation + val;

    if (numFormation == 0) {
        document.getElementById("progLeft").style.visibility = "hidden"
    } else if (numFormation == FORMATION.length - 1) {
        document.getElementById("progRight").style.visibility = "hidden"
    } else {
        document.getElementById("progLeft").style.visibility = "visible"
        document.getElementById("progRight").style.visibility = "visible"
    }
    progressionBloc.style.width = FORMATION[numFormation][FORMATION[numFormation].length - 1] + "%";


    // Arrêtez toutes les minuteries en cours
    while (tabIdTimeOut.length > 1) {
        window.clearTimeout(tabIdTimeOut[tabIdTimeOut.length - 1]);
        tabIdTimeOut.pop()
    }


    // Ecriture dans le temrinal
    const formation = FORMATION[numFormation];
    progEncours.innerHTML = "Progression en cours ...";

    let progress = 0;
    let speed = 15; // Vitesse de frappe (en millisecondes par caractère)

    var phrase

    function typeText() {

        // On écrit le répertoire / titre
        if (progress == 0) {
            phrase = formation[progress];
            terminalElement.innerHTML += "<br/><br/><br/><span class='repertoire'>" + phrase + "</span><br/>"
            progress++
        }

        if (progress < formation.length - 1) {

            phrase = formation[progress];
            let i = 0;

            function typePhrase() {

                if (i < phrase.length) {
                    terminalElement.innerHTML += phrase.charAt(i);
                    i++;
                    terminalElement.scrollTop = terminalElement.scrollHeight;
                    timerId = setTimeout(typePhrase, speed);
                    tabIdTimeOut.push(timerId)
                } else {

                    if (progress != 0 && progress < formation.length - 2) {
                        terminalElement.innerHTML += "<br/><br/>";
                    }
                    progress++;
                    timerId = setTimeout(typeText, speed);
                    tabIdTimeOut.push(timerId)
                }
            }
            typePhrase();
        } else {
            progEncours.innerHTML = "";
        }
    }
    typeText();
}

function afficherTailleBloc() {
    const largeurEnPourcentage = (progressionBloc.offsetWidth / (progressionBloc.parentElement.offsetWidth - 15)) * 100;
    pourcentageTxt.innerHTML = largeurEnPourcentage.toFixed(0) + "%";
}

// Appeler la fonction initiale pour afficher la taille au chargement de la page
afficherTailleBloc();

const observer = new ResizeObserver(afficherTailleBloc);
observer.observe(progressionBloc);


/////////////////////////////////////////////////////////////////////////////////////////

function bgCompetenceCategorieAdd(categorie) {
    listBgCat = document.getElementsByClassName(categorie + "Hover");

    for (i = 0; i < listBgCat.length; i++) {
        listBgCat[i].classList.add(categorie);
    }
}

function bgCompetenceCategorieRemove(categorie) {

    listBgDev = document.getElementsByClassName(categorie + "Hover");

    for (i = 0; i < listBgCat.length; i++) {
        listBgCat[i].classList.remove(categorie);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
var numFormation = -1
function formationAffiche(num) {

    // Si on clic sur celui qui est déjà ouvert
    if (num == numFormation) {
        formationCache(num)
        numFormation = -1
        return

        // Si on ouvre un autre et qu'il y en a déjà un d'ouvert
    } else if (numFormation != -1) {
        formationCache(numFormation)
    }

    numFormation = num

    formation = document.getElementsByClassName("formation")
    max = formation[num].clientHeight

    formationBloc = document.getElementsByClassName("formationBloc")
    formationBloc[num].style.height = "calc(3.5vw + " + max + "px)"
    document.getElementById("AnimFormation").style.height = "calc(3.5vw + " + max + "px)"
    formation[num].style.opacity = 1
}

function formationCache(num) {

    formationBloc = document.getElementsByClassName("formationBloc")
    document.getElementById("AnimFormation").style.height = ""
    formationBloc[num].style.height = ""
}


/////////////////////////////////////////////////////////////////////////////////////////

function navInfoAdd() {
    document.getElementById("navInfoBloc").classList.add("navInfoAffiche");
}

function navInfoRemove() {
    document.getElementById("navInfoBloc").classList.remove("navInfoAffiche");
}

/////////////////////////////////////////////////////////////////////////////////////////

const element = document.getElementById("nom"); // Sélectionnez l'élément par son ID

function toggleNomClass() {
    element.classList.toggle("nom"); // Ajoute ou supprime la classe "nom"
}

setInterval(toggleNomClass, 2000); // Appel de la fonction toutes les 5 secondes (5000 millisecondes)

/////////////////////////////////////////////////////////////////////////////////////////

function etiquette() {
    var feuille = document.getElementsByClassName("feuille")
    var maxLongueur = feuille[0].offsetWidth;
    var etiquette = document.getElementsByClassName("etiquette");
    var distance = -1;
    var hauteur = 0;
    for (i = 0; i < etiquette.length; i++) {

        if ((distance + etiquette[i].offsetWidth - 5) > maxLongueur - 20) {
            distance = 0;
            hauteur += 34;
        }

        etiquette[i].style.transform = "translate(" + distance + "px, -34px)";
        feuille[i].style.transform = "translateY(" + hauteur + "px)";
        distance += etiquette[i].offsetWidth - 5;

    }

    // pochetteDos
    document.getElementsByClassName("pochetteDos")[0].style.borderTopWidth = 275 - 70 - hauteur + "px"
}

var feuille = document.getElementsByClassName("feuille")
etiquette()
const observer2 = new ResizeObserver(etiquette);
observer2.observe(feuille[0]);

var posY = 0
var projIdVue = -1;      // identifiant du projet précédent
function afficheProj(obj) {

    // Si un bloc est affiché on le cache
    if (projIdVue != -1) {
        projIdBloc = document.getElementById(projIdVue)
        projIdBloc.style.transform = "translateY(" + posY + "px)";
        setTimeout(function () {
            projIdBloc.getElementsByClassName("projTexte")[0].style.height = "60px"
        }, 500);
    }

    // Si le bloc est différent de celui affiché on l'affiche
    if (obj.id != projIdVue) {
        posY = position(document.getElementById(obj.id).style.transform)
        objIdBloc = document.getElementById(obj.id)
        objIdBloc.style.transform = "translateY(-375px)";
        objIdBloc.getElementsByClassName("projTexte")[0].style.height = "260px";

        projIdVue = obj.id;
    } else {
        projIdVue = -1;
    }
}

function position(transformString) {
    const regex = /translateY\(([^,]+)px\)/;
    const matches = transformString.match(regex);

    if (matches) {
        return matches[1];
    } else {
        return 0
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
