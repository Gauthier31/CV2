/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Lancement automatique /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/*
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

    // console.log("")
    // console.log("Ajustement :   ", ajustement)
    // console.log("Souris :       ", event.clientX, event.clientY)
    // console.log("Centre image : ", Math.round(positionTop, 0), Math.round(positionLeft, 0))
    // console.log("Degre :", angleDegres)
}
*/

/////////////////////////////////////////////////////////////////////////////////////////

function introLoad() {

    const INTRO = [
        "Bonjour, je suis Gauthier BOË,",
        "Étudiant en 1ère année de Master MIAGE option IDA à l’Université Toulouse Capitole en alternance dans l’ESN SOPRA STERIA en tant que Data Ingénieur.",
        //"Le développement des domaines informatiques et l'objectif d'anticiper leurs futures synergies, suscitent un fort intérêt pour moi.",
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
                        intro.innerHTML += "<br/>"
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
                intro.innerHTML = intro.innerHTML.replace("</span> BOË,", " BOË,</span>");
                introTransformation += 1;
                break;
            case 6:
                intro.innerHTML = intro.innerHTML.replace("Gauthier BOË,", "<a id='nom'>Gauthier BOË,</a>");
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

function testFonctionPerformance() {
    const startTime = performance.now();

    // Do the normal stuff for this function

    const duration = performance.now() - startTime;
    console.log(`testFonctionPerformance took ${duration}ms`);
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Lancement automatique FIN ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////