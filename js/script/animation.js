function reveal() {
    var reveals_9 = document.querySelectorAll(".animation_9");
    var windowHeight = window.innerHeight;

    for (var i = 0; i < reveals_9.length; i++) {
        var elementTop = reveals_9[i].getBoundingClientRect().top;

        // Dans l'écran
        if (elementTop < windowHeight * 0.9) {
            reveals_9[i].classList.add("anim");

            // Au dessous de l'écran
        } else if (elementTop < 0) {
            reveals_9[i].classList.remove("anim");

            // En dessus de l'écran
        } else if (elementTop > windowHeight) {
            reveals_9[i].classList.remove("anim");
        }
    }

    // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

    var reveals_10 = document.querySelectorAll(".animation_10");

    for (var i = 0; i < reveals_10.length; i++) {
        var elementTop = reveals_10[i].getBoundingClientRect().top;

        // Dans l'écran
        if (elementTop < windowHeight) {
            reveals_10[i].classList.add("anim");

            // AU dessous de l'écran
        } else if (elementTop < 0) {
            reveals_10[i].classList.remove("anim");

            // En dessus de l'écran
        } else if (elementTop > windowHeight) {
            reveals_10[i].classList.remove("anim");
        }

    }

    // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

    var reveals_color = document.querySelectorAll(".animationColor");

    for (var i = 0; i < reveals_color.length; i++) {
        var elementTop = reveals_color[i].getBoundingClientRect().top;

        // 45% de l'écran au dessus
        if (elementTop < windowHeight * 0.45) {
            add(reveals_color[i].id, ANIMATION_ADD_OUT_TOP_MID);
            remove(reveals_color[i].id, ANIMATION_REMOVE_OUT_TOP_MID);

            // en dessous
        } else {
            add(reveals_color[i].id, ANIMATION_ADD_OUT_BOTTOM);
            remove(reveals_color[i].id, ANIMATION_REMOVE_OUT_BOTTOM);
        }
    }
}

window.addEventListener("scroll", reveal);

// Ajoute quand il sort au dessus
const ANIMATION_ADD_OUT_TOP = {

};
// Enleve quand il sort au dessus
const ANIMATION_REMOVE_OUT_TOP = {

};

// Ajoute quand il est au dessus
const ANIMATION_ADD_OUT_TOP_MID = {
    "sec1": [
        ["navAPropos", "active"]
    ],
    "formation": [
        ["navFormation", "active"]
    ],
    "expPro": [
        ["navExpPro", "active"]
    ],
    "competence": [
        ["navCompetence", "active"]
    ],
    "projet": [
        ["navProjet", "active"]
    ]
};
// Enleve quand il est au dessus
const ANIMATION_REMOVE_OUT_TOP_MID = {
    "formation": [
        ["navAPropos", "active"]
    ],
    "expPro": [
        ["navFormation", "active"]
    ],
    "competence": [
        ["navExpPro", "active"]
    ],
    "projet": [
        ["navCompetence", "active"]
    ]
};

// Ajoute quand il sort au dessus
const ANIMATION_ADD_OUT_BOTTOM = {

};
// Enleve quand il sort au dessus
const ANIMATION_REMOVE_OUT_BOTTOM = {
    "sec1": [
        ["navAPropos", "active"]
    ],
    "formation": [
        ["navFormation", "active"]
    ],
    "expPro": [
        ["navExpPro", "active"]
    ],
    "competence": [
        ["navCompetence", "active"]
    ],
    "projet": [
        ["navProjet", "active"]
    ]
};

///////////////////////////////////////////////////

function add(id, tab) {

    if (typeof tab[id] === 'undefined') {
        return false;
    }

    listTab = tab[id];

    listTab.forEach(tabIn => {
        document.getElementById(tabIn[0]).classList.add(tabIn[1]);
    });

    return true;
}

function remove(id, tab) {

    if (typeof tab[id] === 'undefined') {
        return false;
    }

    listTab = tab[id];
    listTab.forEach(tabIn => {
        document.getElementById(tabIn[0]).classList.remove(tabIn[1]);
    });

    return true;
}