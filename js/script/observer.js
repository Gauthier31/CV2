/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Function Rezise ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

const observer2 = new ResizeObserver(afficherTailleBloc);
observer2.observe(progressionBloc);

/////////////////////////////////////////////////////////////////////////////////////////

const observer3 = new ResizeObserver(etiquette);
observer3.observe(feuille[0]);

/////////////////////////////////////////////////////////////////////////////////////////

const observer4 = new ResizeObserver(heightTerminal);
observer4.observe(terminalElement);

function heightTerminal() {
    terminalElement.scrollTop = terminalElement.scrollHeight;
}

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// Rezise FIN //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////