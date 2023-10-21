function reveal() {
    var reveals = document.querySelectorAll(".animation");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;

        //console.log(i, Math.round(elementTop), windowHeight * 0.8, windowHeight)
        if (elementTop < windowHeight * 0.8) {
            reveals[i].classList.add("anim");
        } else if (elementTop > windowHeight) {
            reveals[i].classList.remove("anim");
        }
    }
}

window.addEventListener("scroll", reveal);

/*
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
}*/