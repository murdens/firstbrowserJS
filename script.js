let ourForm = document.getElementById('ourForm')
let ourInput = document.getElementById('ourInput')
let ourList = document.getElementById('ourList')
ourForm.addEventListener('submit',(e) => {
  e.preventDefault()
  createItem(ourField.value)
})

function createItem(x) {
  let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
  ourList.insertAdjacentHTML('beforeend',ourHTML)
  ourField.value = ''
  ourField.focus()
}

function deleteItem(elementToDelete){
  elementToDelete.parentElement.remove()
}
//preventdefault stops reload of page as JS will try to send data off.

//to keep input need to store on a database, db does not understand elements in browser.  Need to manage 2 things, db/server wants raw data, user need visual UI.