let locationsCollection = []

const getLocationsData = () => {
    return fetch("http://localhost:8088/locations").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfLocations) => {
            locationsCollection = arrayOfLocations
        }
    )
}