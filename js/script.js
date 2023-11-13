// Variable


// afficherTailleBloc
const FORMATION = [
    [
        [
            "C:\\User\\Étudiant\\Lycée\\Lycée Stéphanne HESSEL>",
            "C:\\User\\Stydent\\College\\College Stéphanne HESSEL>",
        ],
        [
            "BAC S, option Science de l'ingénieur.",
            "Scientific A level, option engineer science.",
        ],
        [
            "Cet enseignement aborde les grands domaines techniques de la mécanique, l'automatisme, l'informatique l'électronique et l'électrotechnique.",
            "This educationn addresses the important technical area of mechanics, automation, IT, electronics and electrical engineering.",
        ],
        [
            10,
            10,
        ]
    ],
    [
        [
            "C:\\User\\Étudiant\\IUT\\Informatique>",
            "C:\\User\\Student\\UT\\IT>",
        ],
        [
            "Diplôme universitaire de Technologie à l'université Toulouse Capitole dispensé a Rodez.",
            "University degree of Thechnology at the university Toulouse Capitole delivered at Rodez.",
        ],
        [
            "Ce DUT m'a permis d'acquérir de nombreuses compétences en matière informatique: les langages informatiques tels que java, css, php, javascript et sql pour le développement et la gestion de base de données.",
            "This diploma allow me to develop many skills in terme of IT : the IT language such as java, css, php, javascript et sql for the development and the database management.",
        ],
        [
            "Mais aussi des compétences en mathématique et en statistique qui sont utiles pour les branches techniques de l'informatique (IA, GPS, Moteur de recherche…).",
            "But also mathematic and statistic skills there are useful for the technical branche (AI , GPS, Search Engine…)",
        ],
        [
            40,
            40,
        ]
    ],
    [
        [
            "C:\\User\\Alternance\\Licence Professionnelle\\MIASHS>",
            "C:\\User\\Sandwich Courses\\Parofessional Bachelor degree\\MIASHS>"
        ],
        [
            "Licence MIASHS parcours MIAGE en alternance à l'Université Toulouse Capitole.",
            "MIASHS Licence path MIAGE in sandwich courses at the University of Toulouse Capitole."
        ],
        [
            "Cette formation est centrée sur la modélisation, l'analyse de données, la programmation et le traitement de données permettant de modéliser les systèmes d'information et de développer des solutions d'informatisation adaptées.",
            "This formation is centered on the modelisation, the data analisis, the programming and on data treatment allowed to modelise the IT system and to develop IT solution adapted."
        ],
        [
            "Consolidation des compétences informatiques et Mathématiques apprise durant mon DUT Informatique.",
            "Consolidation of IT and mathematic skills learn during my IT DUT."
        ],
        [
            60,
            60
        ]
    ],
    [
        [
            "C:\\User\\Alternance\\Master professionnelle\\MIAGE>",
            "C:\\User\\Sandwich Courses\\Professional Master degree\\MIAGE>"
        ],
        [
            "Master MIAGE option IDA (Ingénierie des Données et Apprentissage) en alternance toujours à l'Université Toulouse Capitole.",
            "MIAGE Master degree option IDA (Data Engineering and Learning) in sandwich courses at the University Toulouse Capitole."
        ],
        [
            "Master centrée sur la gestion des données.",
            "Master degree centered on the data management."
        ],
        [
            "En cours ...",
            "In progress ..."
        ],
        [
            80,
            80
        ]
    ]
]

var numFormation = -1;
var tabIdTimeOut = [-1];
var timerId;

var idLangue = 0;

const pourcentageTxt = document.getElementById("pourcentageTxt");
const progressionBloc = document.getElementById("progression");
const progEncours = document.getElementById("progEncours");
const terminalElement = document.getElementById("terminal");

// Lancement des fonctions
introLoad();
etiquette();
afficherTailleBloc();

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Lancement automatique /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
var ajustement = window.innerWidth * 0.05 / 2;

// Coordonnées des points
pointeur = document.getElementById("pointeur");

const positionTop = pointeur.getBoundingClientRect().top + window.scrollY + ajustement;
const positionLeft = pointeur.getBoundingClientRect().left + window.scrollX + ajustement;


document.onmousemove = function () {

    x1 = (positionLeft / window.innerWidth - 0.5) * 2;
    y1 = (positionTop / window.innerHeight - 0.5) * 2;
    x2 = (positionLeft / window.innerHeight - 0.5) * 2;
    y2 = 1;

    x3 = (positionLeft / window.innerWidth - 0.5) * 2;
    y3 = (positionTop / window.innerHeight - 0.5) * 2;
    x4 = (event.clientX / window.innerWidth - 0.5) * 2;
    y4 = (event.clientY / window.innerHeight - 0.5) * 2;

    // Vecteurs des segments
    u = { x: x2 - x1, y: y2 - y1 };
    v = { x: x4 - x3, y: y4 - y3 };

    // Calculez les normes des vecteurs
    normU = Math.sqrt(u.x * u.x + u.y * u.y);
    normV = Math.sqrt(v.x * v.x + v.y * v.y);

    // Calculez le produit scalaire des vecteurs
    dotProduct = u.x * v.x + u.y * v.y;

    // Calculez l'angle en radians
    angleRadians = Math.acos(dotProduct / (normU * normV));

    crossProduct = u.x * v.y - u.y * v.x;

    // Vérifiez le signe du produit vectoriel pour déterminer l'orientation de l'angle
    if (crossProduct < 0) {
        angleRadians = 2 * Math.PI - angleRadians;
    }

    // Convertissez l'angle en degrés
    angleDegres = ((angleRadians * 180) / Math.PI - 1) - 180 + 25;
    pointeur.style.transform = "rotate(" + angleDegres + "deg)";

    // console.log("")
    // console.log("Ajustement :   ", ajustement)
    // console.log("Souris :       ", event.clientX, event.clientY)
    // console.log("Centre image : ", Math.round(positionTop, 0), Math.round(positionLeft, 0))
    // console.log("Degre :", angleDegres)
}

/////////////////////////////////////////////////////////////////////////////////////////

function introLoad() {

    const INTRO = [
        "Bonjour, je suis Gauthier BOË--GUIROLA,",
        "Étudiant en 1ère année de Master MIAGE option IDA à l’Université Toulouse Capitole en alternance dans l’ESN SOPRA STERIA en tant que Data Ingénieur.",
        "Le développement des domaines informatiques et l'objectif d'anticiper leurs futures synergies, suscitent un fort intérêt pour moi.",
        //"De plus, travailler sur les nouvelles technologies dans des secteurs tels que : la conception et/ou le développement Web, logiciels ou encore dans le Conseil, la Cybersécurité, la Data sont en adéquation avec mon cursus universitaire et mon ambition professionnelle.",
    ]

    const intro = document.getElementById("intro")
    const introCache = document.getElementById("introCache")

    function introText() {
        intro.style.height = introCache.offsetHeight + "px"
    }
    introText()

    var introPhrase = 0
    var introLettre = 0
    var introSpeed = 0

    function TypeTexte2() {

        if (introPhrase < INTRO.length) {

            function TypePhrase2() {

                if (introLettre < INTRO[introPhrase].length) {
                    intro.innerHTML += INTRO[introPhrase].charAt(introLettre);

                    introLettre++
                    setTimeout(TypePhrase2, introSpeed);
                } else {
                    introPhrase++
                    introLettre = 0
                    if (introPhrase < INTRO.length) {
                        intro.innerHTML += "<br/><br/>"
                    }
                    setTimeout(TypeTexte2, introSpeed);
                }
            }
            TypePhrase2()

        } else {
            addClassIntro()

            intro.style.height = "auto"
            introCache.remove()
        }
    }
    TypeTexte2()


    // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

    var delai = 150;
    var introTransformation = 1;

    function addClassIntro() {

        switch (introTransformation) {
            case 1:
                intro.innerHTML = intro.innerHTML.replace("Bonjour,", "<span class='h1'>Bonjour,</span>");
                introTransformation += 1;
                break;
            case 2:
                intro.innerHTML = intro.innerHTML.replace("</span> je", " je</span>");
                introTransformation += 1;
                break;
            case 3:
                intro.innerHTML = intro.innerHTML.replace("</span> suis", " suis</span>");
                introTransformation += 1;
                break;
            case 4:
                intro.innerHTML = intro.innerHTML.replace("</span> Gauthier", " Gauthier</span>");
                introTransformation += 1;
                break;
            case 5:
                intro.innerHTML = intro.innerHTML.replace("</span> BOË--GUIROLA,", " BOË--GUIROLA,</span>");
                introTransformation += 1;
                break;
            case 6:
                intro.innerHTML = intro.innerHTML.replace("Gauthier BOË--GUIROLA,", "<a id='nom'>Gauthier BOË--GUIROLA,</a>");
                introTransformation += 1;
                break;
            case 7:
                intro.innerHTML = intro.innerHTML.replace("l’Université Toulouse Capitole", "<a href='#'><b>l’Université Toulouse Capitole</b></a>");
                introTransformation += 1;
                break;
            case 8:
                intro.innerHTML = intro.innerHTML.replace("SOPRA STERIA", "<a href='#'><b>SOPRA STERIA</b></a>");
                introTransformation += 1;
                break;
            default:
                introTransformation = -1;
                setInterval(toggleNomClass, 2000);
                addLangue();
                return;
        }

        if (introTransformation != -1) {
            setTimeout(addClassIntro, delai);
        }
    }

    function toggleNomClass() {
        document.getElementById("nom").classList.toggle("nom"); // Ajoute ou supprime la classe "nom"
    }

    function addLangue() {
        document.getElementById("navListe").innerHTML +=
            `<li>
                <select onchange="changementLangue(this)" id="langueSelect" name="langue">
                    <option value='0'>Français</option>
                    <option value='1'>Anglais</option>
                </select>
            </li>`;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

function afficherTailleBloc() {
    const largeurEnPourcentage = (progressionBloc.offsetWidth / (progressionBloc.parentElement.offsetWidth - 15)) * 100;
    pourcentageTxt.innerHTML = largeurEnPourcentage.toFixed(0) + "%";
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Lancement automatique FIN ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Function ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

var interetBool = false;
function introInteret(bloc) {
    interet = document.getElementById("introInteretBloc")

    if (interetBool) {
        interet.style.maxHeight = "0px"
        bloc.classList.value = bloc.classList.value.replace("down", "up")
        interetBool = false
    } else {
        interet.style.maxHeight = "250px"
        bloc.classList.value = bloc.classList.value.replace("up", "down")
        interetBool = true
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

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
    progEncours.style.visibility = "block";

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
            progEncours.style.visibility = "hidden";
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

function navInfoAdd() {
    document.getElementById("navInfoBloc").classList.add("navInfoAffiche");
}

function navInfoRemove() {
    document.getElementById("navInfoBloc").classList.remove("navInfoAffiche");
}

/////////////////////////////////////////////////////////////////////////////////////////

function etiquette() {
    var feuille = document.getElementsByClassName("feuille")
    var projTexte = document.getElementsByClassName("projTexte")
    var maxLongueur = feuille[0].offsetWidth;
    var etiquette = document.getElementsByClassName("etiquette");
    var distance = -1;
    var hauteur = 0;
    projIdVue = -1
    for (i = 0; i < etiquette.length; i++) {

        if ((distance + etiquette[i].offsetWidth - 5) > maxLongueur - 20) {
            distance = 0;
            hauteur += 34;
        }

        etiquette[i].style.transform = "translate(" + distance + "px, -34px)";
        feuille[i].style.transform = "translateY(" + hauteur + "px)";
        if (hauteur > 0) {
            projTexte[i].style.height = "60px"
        } else {
            projTexte[i].style.height = "260px"
        }
        distance += etiquette[i].offsetWidth - 5;

    }

    // pochetteDos
    document.getElementsByClassName("pochetteDos")[0].style.borderTopWidth = 275 - 70 - hauteur + "px"
}

/////////////////////////////////////////////////////////////////////////////////////////

var posY = 0
var projIdVue = -1;      // identifiant du projet précédent
function afficheProj(obj) {

    // Si un bloc est affiché on le cache
    if (projIdVue != -1) {
        const projIdBloc = document.getElementById(projIdVue)
        projIdBloc.style.transform = "translateY(" + posY + "px)";
        if (posY > 0) {
            projIdBloc.getElementsByClassName("projTexte")[0].style.height = "60px"
        }
    }

    // Si le bloc est différent de celui affiché on l'affiche
    if (obj.id != projIdVue) {
        posY = position(document.getElementById(obj.id).style.transform)

        const objIdBloc = document.getElementById(obj.id);
        if (objIdBloc) {
            const projTexte = objIdBloc.getElementsByClassName("projTexte")[0];
            if (projTexte && posY > 0) {
                projTexte.style.height = "260px";
            }
            setTimeout(function () {
                objIdBloc.style.transform = "translateY(-375px)";
            }, 0);
        }

        projIdVue = obj.id;
    } else {
        projIdVue = -1;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

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

function changementLangue(obj) {

    var bodyText = document.body.innerHTML;
    var expReg

    LANGUE.forEach(element => {
        expReg = new RegExp(element[idLangue]);

        if (!bodyText.includes(element[idLangue])) {
            console.log(element[idLangue])
        }
        bodyText = bodyText.replace(expReg, element[obj.value]);
    });

    document.body.innerHTML = bodyText;
    idLangue = obj.value;

    if (idLangue == 0) {
        document.getElementById("langueSelect").innerHTML =
            `<option value='0' selected>Français</option>
            <option value='1'>Anglais</option>`;

        document.getElementById("terminal").innerHTML =
            `GauCV [version 68.2]
            <br/>(c) Gau Corporation. Tous droits réservés.`;

    } else if (idLangue == 1) {
        document.getElementById("langueSelect").innerHTML =
            `<option value='0'>French</option>
            <option value='1' selected>English</option>`;

        document.getElementById("terminal").innerHTML =
            `GauCV [version 68.2]
            <br/>(c) Gau Corporation. All right reserved.`;
    }


}

function actualisationLangue() {
    tab = document.body.textContent.split("  ")

    var tableauFiltre = tab.filter(function (element) {
        return !(element === "") && !(element === "\n") && !(element === "\n\n");
    });

    console.log(tableauFiltre);
}

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Function FIN /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Function Rezise ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

const observer2 = new ResizeObserver(afficherTailleBloc);
observer2.observe(progressionBloc);

/////////////////////////////////////////////////////////////////////////////////////////

var feuille = document.getElementsByClassName("feuille")
const observer3 = new ResizeObserver(etiquette);
observer3.observe(feuille[0]);

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// Rezise FIN //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////