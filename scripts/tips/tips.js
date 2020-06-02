/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const tipsConverter = (tipsObject) => {

    const tipsHTMLRepresentation = `<section class="tip">${tipsObject.tip}.</section>`

    return tipsHTMLRepresentation

}