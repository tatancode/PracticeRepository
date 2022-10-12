//Welcome alert
alert("Welcome to Mokepon!")

// Pet Selection function
function petSelection() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanPetPlayer = document.getElementById('player-pet')

    // logic to check selected pet
    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = 'Ratigueya'
    } else {
        alert("You must select a Pet to proceed")
    }
    pcPetSelection()
}
function pcPetSelection() {
    let randomAttack = random(1, 3);
    let spanPcPet = document.getElementById('pc-pet');

    if (randomAttack == 1) {
        spanPcPet.innerHTML = 'Hipodoge'
    } else if (randomAttack == 2) {
        spanPcPet.innerHTML = 'Capipepo'
    } else {
        spanPcPet.innerHTML = 'Ratigueya'
    }
}

// random function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Start game function
function startGame() {
    let petOneButton = document.getElementById('button-pet')
    petOneButton.addEventListener('click', petSelection)

}

// listening to page load to start the game
window.addEventListener('load', startGame)

