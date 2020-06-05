/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

const quotesList = () => {
    // Iterate the collection of quote objects
    for (const currentQuotesObject of quotesCollection) {

        // Convert the current quote to its HTML representation
        const quotesHTML = quoteConverter(currentQuotesObject)

        // Find the <article> element in index.html
        const quotesArticleElement = document.querySelector(".quoteList")

        // Put the fish HTML representation inside the <article> element
        quotesArticleElement.innerHTML += quotesHTML
    }
}

const quotesVisibilityButton = document.querySelector(".toggleQuotes")
quotesVisibilityButton.addEventListener("click", clickEvent => {

    document.querySelector(".quoteList").classList.toggle("hidden")
}
)