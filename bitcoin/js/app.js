// Classes
const ui = new UI();
const crypto = new CryptoAPI();

// Variables
const form  = document.querySelector('#form')



// Eventlisteners
eventListenrs()
function eventListenrs(){
    form.addEventListener('submit', getValueation)
}



// functions

// get values from api
function getValueation(e){
    e.preventDefault()
    // Read values after sumit the form
    const currency = document.querySelector('#currency').value
    const cryptocurrency = document.querySelector('#cryptocurrency').value

    // Validate fields
    if (currency === '' || cryptocurrency === '') {
        ui.printMessage('All the fields need to Complete',  'deep-orange darken-4 card-panel')
    } else {
        crypto.queryAPI(currency,cryptocurrency)
        .then(data => ui.createTemplate(data.resultApi[0], currency))

    }
}