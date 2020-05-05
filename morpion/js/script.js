// Récupération des éléments HTML
const valider1 = document.getElementById("validerNom1")
const player1 = document.getElementById("play1")
const choice1 = document.getElementById("choiceName1")
const valider2 = document.getElementById("validerNom2")
const player2 = document.getElementById("play2")
const choice2 = document.getElementById("choiceName2")
const commencerX = document.getElementById("startX")
const commencerO = document.getElementById("startO")
const x = document.getElementById("x")
const o = document.getElementById("o")
const newGame = document.getElementById("rafraichir")
const turnX = document.getElementById("annonceX")
const turnO = document.getElementById("annonceO")


// Choisir le nom des joueurs
function choosePlayer(valide, player, choice) {
    valide.addEventListener("click", function () {
        if (choice.value.length > 1) {
            player.textContent = choice.value
            choice.value = ""
        } else {
            alert("Veuillez choisir un nom supérieur à 1 caractère")
        }
    })
}

// Faire disparaitre le panneau de consigne
function startGame() {
    const start = document.getElementById("startGame")
    start.addEventListener("click", function () {
        const consigne = document.getElementById("panneau")
        consigne.style.opacity = "0"
        setTimeout(function () {
            consigne.style.display = "none"
        }, 1000)
    })
}

// Action joueur X
function ajouterX() {
    const cases = document.querySelectorAll(".caseJeu")
    cases.forEach(carre => carre.addEventListener("click", function () {
        carre.textContent = "X"
        carre.className = "pionX"
        x.style.fontSize = "50px"
        o.style.fontSize = "90px"
        turnX.style.display = "none"
        turnO.style.display = "block"
        ajouterO()

    }))
}

// Action joueur O
function ajouterO() {
    const cases = document.querySelectorAll(".caseJeu")
    cases.forEach(carre => carre.addEventListener("click", function () {
        carre.textContent = "O"
        carre.className = "pionO"
        o.style.fontSize = "50px"
        x.style.fontSize = "90px"
        turnO.style.display = "none"
        turnX.style.display = "block"
        ajouterX()
    }))
}

// Faire disparaitre la consigne de tour
function cacherChoix() {
    document.getElementById("choixDepart").style.display = "none"

}

// Faire disparaitre les boutons de départ et ajouter le bouton recommencer
function changeButtons() {
    commencerX.style.display = "none"
    commencerO.style.display = "none"
    newGame.style.display = "block"
    setTimeout(function () {
        newGame.style.opacity = "1"
    }, 1000)
}

// Action du jeu
function jouons() {
    commencerX.addEventListener("click", function () {
        cacherChoix()
        x.style.fontSize = "90px"
        ajouterX();
        changeButtons()
    })
    commencerO.addEventListener("click", function () {
        cacherChoix()
        o.style.fontSize = "90px"
        ajouterO();
        changeButtons()
    })

}

// Appel des fonctions
choosePlayer(valider1, player1, choice1)
choosePlayer(valider2, player2, choice2)
startGame()
jouons()