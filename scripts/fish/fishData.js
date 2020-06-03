const fishCollection = [
    {
        species: "Trigger Fish",
        length: 12,
        location: "Bay of Bengal",
        picture: "./images/triggerfish.jpg",
        food: "Baby squid",
        name: "Bubbles"
    },
    {
        species: "Parrot Fish",
        length: 8,
        location: "Sea of Google",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        food: "Popcorn",
        name: "Angus"
    },
    {
        species: "Swordfish",
        length: 320,
        location: "Atlantic Ocean",
        picture: "./images/chester.jpeg",
        food: "Herring",
        name: "Chester"
    },
    {
        species: "Angel Fish",
        length: 8,
        location: "Pacific Ocean",
        picture: "./images/angelfish.jpg",
        food: "Plankton",
        name: "Michael"
    },
    {
        species: "Elegant Corydoras",
        length: 3,
        location: "Caribbean Sea",
        food: "Algae",
        name: "Sweet",
        picture: "./images/pink.jpg"
    },
    {
        species: "Orange Roughy",
        length: 16,
        location: "Southern Ocean",
        picture: "./images/roughy.jpeg",
        food: "Anchovies",
        name: "Michael"
    }
]

// 3, 6, 9, 12, etc... fish
const mostHolyFish = (fishObject) => {
    const holyFish = []

    for(const fishObject of fishCollection) {
        if (fishObject.length % 3 === 0) {
            holyFish.push(fishObject)
        }
    }

    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = (fishObject) => {
    const soldiers = []
    for(const fishObject of fishCollection) {
    if (fishObject.length % 5 === 0) {
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