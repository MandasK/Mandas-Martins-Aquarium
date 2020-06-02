/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

const tipsList = () => {
    // Iterate the collection of fish objects
    for (const currentTipsObject of tipsCollection) {

        // Convert the current fish to its HTML representation
        const tipsHTML = tipsConverter(currentTipsObject)

        // Find the <article> element in index.html
        const tipsArticleElement = document.querySelector(".tipList")

        // Put the fish HTML representation inside the <article> element
        tipsArticleElement.innerHTML += tipsHTML
    }
}