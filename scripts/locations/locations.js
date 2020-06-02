/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const locationsConverter = (locationsObject) => {

    const locationsHTMLRepresentation = 
    `<section class="location">
        <div class="">
            <img class="location__picture"
                src="${locationsObject.picture}"
                alt="${locationsObject.altTag} />
        </div>
        <div class="location__details">
            ${locationsObject.detail}
        </div>
    </section>`

    return locationsHTMLRepresentation

}