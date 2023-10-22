const FORMATION = [
    [
        "Lycée Stéphanne Hessel",
        "BAC S, option Sience de l'ingénieur.",
        "Cet enseignement aborde les grands domaines techniques de la mécanique, l'automatisme, l'informatique l'électronique et l'électrotechnique.",
        "La formation s'adresse à des élèves souhaitant acquérir une formation scientifique et des compétences technologiques. Elle lui permettra aussi de maitriser les nouvelles technologies.",
        "10%",
    ],
    [
        "DUT Informatique",
        "Diplôme Universitaire de Technologie à l'Université Toulouse Capitole dispensé a Rodez.",
        "Ce DUT m'a permis d'acquérir de nombreuses compétences en matière informatique: les langages informatiques tels que java, css, php, javascript et sql pour le développement et la gestion de base de données",
        "Mais aussi des compétences en mathématique et en statistique qui sont utiles pour les branches techniques de l'informatique (IA, GPS, Moteur de recherche…).",
        "40%",
    ],
    [
        "3ème année de Licence professionnelle",
        "Licence MIASHS parcours MIAGE en alternance à l'Université Toulouse Capitole.",
        "Cette formation est centrée sur la modélisation, l'analyse de données, la programmation et le traitement de données permettant de modéliser les systèmes d'information et de développer des solutions d'informatisation adaptées.",
        "Consolidation des compétences informatiques et Mathématiques apprise durant mon DUT Informatique",
        "60%",
    ],
    [
        "1ère année de Master",
        "Master MIAGE option IDA en alternance toujours à l'Université Toulouse Capitole.",
        "Licence centrée sur la gestion des données",
        "En cours ...",
        "80%",
    ],
]

var numFormation = -1

function progression(val) {

    numFormation = (numFormation + val < 0 || numFormation + val > FORMATION.length) ? numFormation : numFormation + val;

    if (numFormation == 0) {
        document.getElementById("progLeft").style.visibility = "hidden"
    } else if (numFormation == FORMATION.length - 1) {
        document.getElementById("progRight").style.visibility = "hidden"
    } else {
        document.getElementById("progLeft").style.visibility = "visible"
        document.getElementById("progRight").style.visibility = "visible"
    }

    // Arrêtez toutes les minuteries en cours
    var id = window.setTimeout(function () { }, 0);
    while (id--) {
        window.clearTimeout(id);
    }

    const terminalElement = document.getElementById("terminal");

    document.getElementById("progression").style.width = FORMATION[numFormation][FORMATION[numFormation].length - 1];
    document.getElementById("pourcentageTxt").innerHTML = FORMATION[numFormation][FORMATION[numFormation].length - 1];

    const formation = FORMATION[numFormation];
    terminalElement.innerHTML = "";

    let progress = 0;
    let speed = 15; // Vitesse de frappe (en millisecondes par caractère)

    function typeText() {
        if (progress < formation.length - 1) {
            const sentence = formation[progress];
            let i = 0;

            function typeSentence() {

                if (i < sentence.length) {
                    terminalElement.innerHTML += sentence.charAt(i);
                    i++;
                    setTimeout(typeSentence, speed);
                } else {

                    if (progress < formation.length - 2) {
                        terminalElement.innerHTML += "<br/><br/>";
                    }
                    progress++;
                    setTimeout(typeText, speed);
                }
            }
            typeSentence();
        }
    }
    typeText();
}


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