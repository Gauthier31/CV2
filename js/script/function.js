/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Function ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

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

    // Flèche choix
    if (numFormation == 0) {
        document.getElementById("progLeft").style.visibility = "hidden"
    } else if (numFormation == FORMATION.length - 1) {
        document.getElementById("progRight").style.visibility = "hidden"
    } else {
        document.getElementById("progLeft").style.visibility = "visible"
        document.getElementById("progRight").style.visibility = "visible"
    }
    progressionBloc.style.width = FORMATION[numFormation][FORMATION[numFormation].length - 1][idLangue] + "%";

    // Arrêtez toutes les minuteries en cours
    while (tabIdTimeOut.length > 1) {
        window.clearTimeout(tabIdTimeOut[tabIdTimeOut.length - 1]);
        tabIdTimeOut.pop()
    }

    // Ecriture dans le temrinal
    const formation = FORMATION[numFormation];
    progEncours.style.visibility = "visible";

    let progress = 0;
    let speed = 10; // Vitesse de frappe (en millisecondes par caractère)

    var phrase

    function typeText() {

        // On écrit le répertoire / titre
        if (progress == 0) {
            phrase = formation[progress][idLangue];
            terminalElement.innerHTML += "<br/><br/><br/><span class='repertoire'>" + phrase + "</span><br/>";
            terminalElement.scrollTop = terminalElement.scrollHeight;
            progress++
        }

        if (progress < formation.length - 1) {

            phrase = formation[progress][idLangue];
            let i = 0;

            function typePhrase() {

                if (i < phrase.length) {
                    terminalElement.innerHTML += phrase.charAt(i);
                    terminalElement.scrollTop = terminalElement.scrollHeight;
                    i++;
                    timerId = setTimeout(typePhrase, speed);
                    tabIdTimeOut.push(timerId)
                } else {

                    if (progress != 0 && progress < formation.length - 2) {
                        terminalElement.innerHTML += "<br/><br/>";
                        terminalElement.scrollTop = terminalElement.scrollHeight;
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
    var index;
    var indexCoupe;
    var bodyTextAvant = "";
    var bodyText;

    LANGUE.forEach(element => {

        index = bodyText.indexOf(element[idLangue]);

        if (index != -1) {
            bodyText = bodyText.replace(element[idLangue], element[obj.value]);

            indexCoupe = index + element[obj.value].length

            bodyTextAvant += bodyText.substring(0, indexCoupe);
            bodyText = bodyText.substring(indexCoupe);

            // si pas trouvé
        } else {
            console.log(element[idLangue]);
            //console.log(bodyText)
            return 0;
        }
    });

    document.body.innerHTML = bodyTextAvant + bodyText;
    idLangue = obj.value;

    redifineVariable();

    if (idLangue == 0) {
        document.getElementById("langueSelect").innerHTML =
            `<option value='0' selected>Français</option>
            <option value='1'>Anglais</option>`;

        terminalElement.innerHTML =
            `GauCV [version 68.2]
            <br/>(c) Gau Corporation. Tous droits réservés.`;

    } else if (idLangue == 1) {
        document.getElementById("langueSelect").innerHTML =
            `<option value='0'>French</option>
            <option value='1' selected>English</option>`;

        terminalElement.innerHTML =
            `GauCV [version 68.2]
            <br/>(c) Gau Corporation. All right reserved.`;
    }

}

function actualisationLangue() {
    tab = document.body.textContent.split("  ")

    LANGUE_COPIE = LANGUE

    tableauFiltre = filtreTab(tab);
    //console.log(tableauFiltre)

    for (i = 0; i < tableauFiltre.length; i++) {
        find1 = false
        find2 = false

        for (j = 0; j < LANGUE_COPIE.length && !find1; j++) {
            if (tableauFiltre[i].includes(LANGUE_COPIE[j][0])) {
                find1 = true
                //console.log("L :", LANGUE_COPIE[j][0], "==", tableauFiltre[i])
                delete LANGUE_COPIE[j][0];
            } else {
                //console.log("L :", LANGUE_COPIE[j][0], "!=", tableauFiltre[i])
            }
        }

        if (find1) {
            j -= 1;
            //console.log("L 2 :", LANGUE_COPIE[j][0], "==", tableauFiltre[i])

        } else {

            for (k = 0; k < NO_LANGUE.length && !find2; k++) {
                if (tableauFiltre[i].includes(NO_LANGUE[k])) {
                    find2 = true
                    //console.log("L_No :", NO_LANGUE[k], "==", tableauFiltre[i])
                } else {
                    //console.log("L_No :", NO_LANGUE[k], "!=", tableauFiltre[i])
                }
            }

            if (find2) {
                k -= 1;
                //console.log("L_No 2 :", NO_LANGUE[k], "==", tableauFiltre[i])
            } else {
                console.log("No Find :", i, tableauFiltre[i])
            }
        }
    }
}

function filtreTab(tab) {
    newTab = []

    for (i = 0; i < tab.length; i++) {

        tab[i] = tab[i].replaceAll("\n", "");
        if (tab[i] !== "") {
            newTab.push(tab[i])
        }
    }

    return newTab;
}

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Function FIN /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////