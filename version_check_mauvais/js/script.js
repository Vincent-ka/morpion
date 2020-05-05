const valider1 = document.getElementById("validerNom1")
const player1 = document.getElementById("play1")
const choice1 = document.getElementById("choiceName1")
const valider2 = document.getElementById("validerNom2")
const player2 = document.getElementById("play2")
const choice2 = document.getElementById("choiceName2")
const commencerX = document.getElementById("startX")
const commencerO = document.getElementById("startO")

const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")
const c7 = document.getElementById("c7")
const c8 = document.getElementById("c8")
const c9 = document.getElementById("c9")

    
function choosePlayer(valide, player, choice) {
    valide.addEventListener("click", function() {
        if (choice.value.length > 1) {
            player.textContent = choice.value
            choice.value = ""
        } else {
            alert("Veuillez choisir un nom supérieur à 1 caractère")
        }
    })
}

function startGame() {
    const start = document.getElementById("startGame")
    start.addEventListener("click", function() {
        const consigne = document.getElementById("panneau")
        consigne.style.display = "none"
    })
}

function ajouterX() {
    const cases = document.querySelectorAll(".caseJeu")
    cases.forEach(carre => carre.addEventListener("click", function() {
    carre.textContent = "X"
    carre.className = "pionX"
    ajouterO()
        if (c1.classList.contains("pionX") && c2.classList.contains("pionX") && c3.classList.contains("pionX")
        || c4.classList.contains("pionX") && c5.classList.contains("pionX") && c6.classList.contains("pionX")
        || c7.classList.contains("pionX") && c8.classList.contains("pionX") && c9.classList.contains("pionX")
        || c1.classList.contains("pionX") && c4.classList.contains("pionX") && c7.classList.contains("pionX")
        || c2.classList.contains("pionX") && c5.classList.contains("pionX") && c8.classList.contains("pionX")
        || c3.classList.contains("pionX") && c6.classList.contains("pionX") && c9.classList.contains("pionX")
        || c1.classList.contains("pionX") && c5.classList.contains("pionX") && c9.classList.contains("pionX")
        || c3.classList.contains("pionX") && c5.classList.contains("pionX") && c7.classList.contains("pionX")) {
        player1.textContent = "a gagne"
    }
}))
}

function ajouterO() {
    const cases = document.querySelectorAll(".caseJeu")
    cases.forEach(carre => carre.addEventListener("click", function() {
    carre.textContent = "O"
    carre.className = "pionO"
    if (c1.classList.contains("pionO") && c2.classList.contains("pionO") && c3.classList.contains("pionO")
        || c4.classList.contains("pionO") && c5.classList.contains("pionO") && c6.classList.contains("pionO")
        || c7.classList.contains("pionO") && c8.classList.contains("pionO") && c9.classList.contains("pionO")
        || c1.classList.contains("pionO") && c4.classList.contains("pionO") && c7.classList.contains("pionO")
        || c2.classList.contains("pionO") && c5.classList.contains("pionO") && c8.classList.contains("pionO")
        || c3.classList.contains("pionO") && c6.classList.contains("pionO") && c9.classList.contains("pionO")
        || c1.classList.contains("pionO") && c5.classList.contains("pionO") && c9.classList.contains("pionO")
        || c3.classList.contains("pionO") && c5.classList.contains("pionO") && c7.classList.contains("pionO")) {
        player2.textContent = "a gagne"

    } 
        ajouterX()
}))
}

function cacherChoix() {
    document.getElementById("choixDepart").style.opacity = "0"
}

function jouons() {
    commencerX.addEventListener("click", cacherChoix)
    commencerO.addEventListener("click", cacherChoix)
    commencerX.addEventListener("click", ajouterX)
    commencerO.addEventListener("click", ajouterO)
}

choosePlayer(valider1, player1, choice1)
choosePlayer(valider2, player2, choice2)
startGame()
jouons()


