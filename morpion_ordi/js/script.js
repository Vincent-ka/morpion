const valider1 = document.getElementById("validerNom1")
const player1 = document.getElementById("play1")
const choice1 = document.getElementById("choiceName1")
const player2 = document.getElementById("play2")
const commencerX = document.getElementById("startX")
const commencerO = document.getElementById("startO")
const x = document.getElementById("x")
const o = document.getElementById("o")
const newGame = document.getElementById("rafraichir")

// Fonction pour choisir le nom de joueurs
function choosePlayer() {
    valider1.addEventListener("click", function() {
        if (choice1.value.length > 1) {
            player1.textContent = choice1.value
            choice1.value = ""
        } else {
            alert("Veuillez choisir un nom supérieur à 1 caractère")
        }
    })
}

// Fonction pour faire disparaitre le panneau des consignes
function startGame() {
    const start = document.getElementById("startGame")
    start.addEventListener("click", function() {
        const consigne = document.getElementById("panneau")
        consigne.style.opacity = "0"
        setTimeout(function() {
            consigne.style.display = "none"
        }, 1000)
    })
}

// Fonction pour que le X joue
function ajouterX() {
    const cases = document.querySelectorAll(".caseJeu")
    cases.forEach(carre => carre.addEventListener("click", function() {
    carre.textContent = "X"
    carre.className = "pionX"
    x.style.fontSize = "50px"
    o.style.fontSize = "90px"
    
}))
}

// Fonction pour que le O joue
function ajouterO() {
    const cases = document.querySelectorAll(".caseJeu")
    const casesListe = Array.from(cases)
    const random = Math.floor(Math.random() * casesListe.length)
    casesListe[random].textContent = "O"
    casesListe[random].className = "pionO"
    o.style.fontSize = "50px"
    x.style.fontSize = "90px"
    ajouterX()
}

// Fonction pour faire disparaitre le choix du joueur qui débute
function cacherChoix() {
    document.getElementById("choixDepart").style.display = "none"

}

// Fonction pour débuter le jeu
function jouons() {
    commencerX.addEventListener("click", function() {
        cacherChoix()
        x.style.fontSize = "90px"
        ajouterX();
        newGame.style.display = "block"
        setTimeout(function() {
            newGame.style.opacity = "1"
        }, 1000)
        commencerO.textContent = "cliquez ici pour que l'ordi joue"
        commencerX.style.visibility = "hidden"
    })
    commencerO.addEventListener("click", function() {
        cacherChoix()
        o.style.fontSize = "90px"
        ajouterO();
        newGame.style.display = "block"
        setTimeout(function() {
            newGame.style.opacity = "1"
        }, 1000)
        commencerO.textContent = "cliquez ici pour que l'ordi joue"
        commencerX.style.visibility = "hidden"
    })
    
}

// Appel des fonctions
choosePlayer()
startGame()
jouons()


