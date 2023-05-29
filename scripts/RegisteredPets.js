import { getPets, getWalkers } from "./database.js"

const allWalkers = getWalkers()
const pets = getPets()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        const walkerId = clickTarget.dataset.walkerforeignkey

        for (const walker of allWalkers) {
            if (walker.id === (parseInt(walkerId))) {
                window.alert(`This pet is being walked by ${walker.name}`)
            }
        }

        //Find the whole walker object based on the walkerID from above
    }

)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

