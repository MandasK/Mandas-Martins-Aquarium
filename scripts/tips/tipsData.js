const TipsCollection = []

const getTipsData = () => {
    return fetch("http://localhost:8088/tips").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfTips) => {
            tipsCollection = arrayOfTips
        }
    )
}