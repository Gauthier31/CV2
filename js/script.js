const animation = document.querySelectorAll('.animation');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            add(entry.target.id, ANIMATION_ADD_IN);
            remove(entry.target.id, ANIMATION_REMOVE_IN);
        } else {
            add(entry.target.id, ANIMATION_ADD_OUT);
            remove(entry.target.id, ANIMATION_REMOVE_OUT);
        }
    });
}, { treshold: 0 });

animation.forEach(element => {
    observer.observe(element);
})

// Ajout quand il apparait
const ANIMATION_ADD_IN = {
    "AnimFormation": [
        ["AnimCacheDessin", "anim"]
    ],
    "AnimExpPro2": [
        ["AnimExpPro1", "anim"]
    ],
    "AnimExpPro3": [
        ["AnimExpPro2", "anim"],
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"],
    ],
    "AnimExpPro4": [
        ["AnimExpPro3", "anim"]
    ],

    "formation": [
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"]
    ],
    "expPro": [
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"]
    ],
    "competence": [
        ["AnimExpPro4", "anim"]
    ],
    "AnimCacheDessin": [
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"]
    ],
    "bgBleu": [
        ["AnimNav", "blanc"],
    ]
};

// Ajout quand il sort
const ANIMATION_ADD_OUT = {
    "aPropos": [
        ["AnimNav", "blanc"]
    ],
    "projPerso": [
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"]
    ],
    "projPerso": [
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"]
    ]
};

// Enleve quand il apparait
const ANIMATION_REMOVE_IN = {
    "aPropos": [
        ["AnimNav", "blanc"]
    ],
    "projPerso": [
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"]
    ],
    "projEtude": [
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"]
    ],
};

// Enleve quand il sort
const ANIMATION_REMOVE_OUT = {
    "bgBleu": [
        ["AnimNav", "blanc"]
    ],
    "AnimCacheDessin": [
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"]
    ]
};

function add(id, tab) {

    if (typeof tab[id] === 'undefined') {
        return false;
    }

    listTab = tab[id];

    listTab.forEach(tabIn => {
        console.log(tabIn)
        document.getElementById(tabIn[0]).classList.add(tabIn[1]);
    });
}

function remove(id, tab) {

    if (typeof tab[id] === 'undefined') {
        return false;
    }

    listTab = tab[id];

    listTab.forEach(tabIn => {
        document.getElementById(tabIn[0]).classList.remove(tabIn[1]);
    });
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