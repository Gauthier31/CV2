function reveal() {
    var reveals_9 = document.querySelectorAll(".animation_9");
    var windowHeight = window.innerHeight;

    for (var i = 0; i < reveals_9.length; i++) {
        var elementTop = reveals_9[i].getBoundingClientRect().top;

        // Dans l'écran
        if (elementTop < windowHeight * 0.9) {

            addBool = add(reveals_9[i].id, ANIMATION_ADD_IN);
            removeBool = remove(reveals_9[i].id, ANIMATION_REMOVE_IN);

            if (!addBool || !removeBool) {
                reveals_9[i].classList.add("anim");
            }

            // Au dessus de l'écran
        } else if (elementTop > windowHeight) {

            addBool = add(reveals_9[i].id, ANIMATION_ADD_OUT_TOP);
            removeBool = remove(reveals_9[i].id, ANIMATION_REMOVE_OUT_TOP);

            if (!addBool || !removeBool) {
                reveals_9[i].classList.remove("anim");
            }

            // En dessous de l'écran
        } else if (elementTop < 0) {
            addBool = add(reveals_9[i].id, ANIMATION_ADD_OUT_BOTTOM);
            removeBool = remove(reveals_9[i].id, ANIMATION_REMOVE_OUT_BOTTOM);

            if (!addBool || !removeBool) {
                reveals_9[i].classList.remove("anim");
            }
        }
    }

    var reveals_10 = document.querySelectorAll(".animation_10");

    for (var i = 0; i < reveals_10.length; i++) {
        var elementTop = reveals_10[i].getBoundingClientRect().top;

        // Dans l'écran
        if (elementTop < windowHeight * 1) {

            addBool = add(reveals_10[i].id, ANIMATION_ADD_IN);
            removeBool = remove(reveals_10[i].id, ANIMATION_REMOVE_IN);

            if (!addBool || !removeBool) {
                reveals_10[i].classList.add("anim");
            }

            // Au dessus de l'écran
        } else if (elementTop > windowHeight) {

            addBool = add(reveals_10[i].id, ANIMATION_ADD_OUT_TOP);
            removeBool = remove(reveals_10[i].id, ANIMATION_REMOVE_OUT_TOP);

            if (!addBool || !removeBool) {
                reveals_10[i].classList.remove("anim");
            }

            // En dessous de l'écran
        } else if (elementTop < 0) {
            addBool = add(reveals_10[i].id, ANIMATION_ADD_OUT_BOTTOM);
            removeBool = remove(reveals_10[i].id, ANIMATION_REMOVE_OUT_BOTTOM);

            if (!addBool || !removeBool) {
                reveals_10[i].classList.remove("anim");
            }
        }
    }
}

window.addEventListener("scroll", reveal);


// Ajoute quand il apparait en dessous
const ANIMATION_ADD_OUT_TOP = {

};

// Ajoute quand il apparait au dessus
const ANIMATION_ADD_OUT_BOTTOM = {
    "aPropos": [
        ["animNav", "blanc"]
    ]
};

// Enleve quand il apparait
const ANIMATION_REMOVE_IN = {

};

// Enleve quand il sort en dessous
const ANIMATION_REMOVE_OUT_TOP = {

};

// Enleve quand il sort au dessus
const ANIMATION_REMOVE_OUT_BOTTOM = {

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