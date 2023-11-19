function reveal() {
    var reveals_9 = document.querySelectorAll(".animation_9");
    var windowHeight = window.innerHeight;

    for (var i = 0; i < reveals_9.length; i++) {
        var elementTop = reveals_9[i].getBoundingClientRect().top;

        // Dans l'écran
        if (elementTop < windowHeight * 0.9) {
            reveals_9[i].classList.add("anim");

            // Au dessus de l'écran
        } else if (elementTop > windowHeight) {
            reveals_9[i].classList.remove("anim");

            // En dessous de l'écran
        } else if (elementTop < 0) {
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

            // Au dessus de l'écran
        } else if (elementTop > windowHeight) {
            reveals_10[i].classList.remove("anim");

            // En dessous de l'écran
        } else if (elementTop < 0) {
            reveals_10[i].classList.remove("anim");
        }
    }

    // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

    var reveals_color = document.querySelectorAll(".animationColor");

    for (var i = 0; i < reveals_color.length; i++) {
        var elementTop = reveals_color[i].getBoundingClientRect().top;

        // 80% de l'écran
        if (elementTop < windowHeight * 0.45) {
            add(reveals_color[i].id, ANIMATION_ADD_OUT_TOP_6);
            remove(reveals_color[i].id, ANIMATION_REMOVE_OUT_TOP_6);

            // Au dessus de l'écran
        } if (elementTop < 0) {
            add(reveals_color[i].id, ANIMATION_ADD_OUT_TOP);
            remove(reveals_color[i].id, ANIMATION_REMOVE_OUT_TOP);
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

// Ajoute quand il sort au dessus
const ANIMATION_ADD_OUT_TOP_6 = {
    "sec2": [
        ["animNav", "blanc"],
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"],
        ["sec1", "bg2"],
        ["sec2", "bg2"],
        ["sec3", "bg2"]
    ]
};
// Enleve quand il sort au dessus
const ANIMATION_REMOVE_OUT_TOP_6 = {
    "aPropos": [
        ["animNav", "blanc"],
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"],
        ["sec1", "bg2"],
        ["sec2", "bg2"],
        ["sec3", "bg2"]
    ],
    "sec3": [
        ["animNav", "blanc"],
        ["AnimInfoGauche", "blanc"],
        ["AnimInfoDroite", "blanc"],
        ["sec1", "bg2"],
        ["sec2", "bg2"],
        ["sec3", "bg2"]
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