let fishCollection = []

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfFish) => {
            fishCollection = arrayOfFish
        }
    )
}

// 3, 6, 9, 12, etc... fish
const mostHolyFish = (fishObject) => {
    const holyFish = []

    for(const fishObject of fishCollection) {
        if (fishObject.length % 3 === 0 ) {
            holyFish.push(fishObject)
        }
    }

    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = (fishObject) => {
    const soldiers = []
    for(const fishObject of fishCollection) {
    if (fishObject.length % 5 === 0 && fishObject.length % 3 !== 0) {
        soldiers.push(fishObject)
    }
}
    return soldiers
}
const nonHolyFish = (fishObject) => {
    const regularFish = []
    for(const fishObject of fishCollection) {
    if (fishObject.length % 3 !== 0 && fishObject.length % 5 !== 0) {
        regularFish.push(fishObject)
    }
}
    
    return regularFish
}