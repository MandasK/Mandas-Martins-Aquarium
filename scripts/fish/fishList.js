/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

// const fishList = () => {
//     // Iterate the collection of fish objects
//     for (const currentFishObject of fishCollection) {

//         // Convert the current fish to its HTML representation
//         const fishHTML = fishConverter(currentFishObject)

//         // Find the <article> element in index.html
//         const fishArticleElement = document.querySelector(".fishList")

//         // Put the fish HTML representation inside the <article> element
//         fishArticleElement.innerHTML += fishHTML
//     }
// }

const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show soldier fish in the browser
const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show common fish in the browser
const showRegularFish = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }

}
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", changeEvent => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    } else if (userChoice === "soldier") {
        clearFishList()
        showSoldierFish()
    } else if (userChoice === "plebs") {
        clearFishList()
        showRegularFish()
    } else if (userChoice === "all") {
        clearFishList()
        fishList() 
    }
}
)

const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {

    document.querySelector(".fishList").classList.toggle("hidden")
}
)



const fishList = () => {
    // Invoke all three functions here
    showHolyFish()
    showSoldierFish()
    showRegularFish()
}


