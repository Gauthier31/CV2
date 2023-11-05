function reveal() {
    var reveals_9 = document.querySelectorAll(".animation_9");

    for (var i = 0; i < reveals_9.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals_9[i].getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.9) {
            reveals_9[i].classList.add("anim");
        } else if (elementTop > windowHeight) {
            reveals_9[i].classList.remove("anim");
        }
    }

    var reveals_10 = document.querySelectorAll(".animation_10");

    for (var i = 0; i < reveals_10.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals_10[i].getBoundingClientRect().top;

        if (elementTop < windowHeight * 1.05) {
            reveals_10[i].classList.add("anim");
        } else if (elementTop > windowHeight) {
            reveals_10[i].classList.remove("anim");
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