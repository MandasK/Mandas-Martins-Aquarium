let quotesCollection = []

const getQuotesData = () => {
    return fetch("http://localhost:8088/quotes").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfQuotes) => {
            quotesCollection = arrayOfQuotes
        }
    )
}


