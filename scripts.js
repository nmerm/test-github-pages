const article = document.getElementsByTagName('article').item(0)
let firstLevelHeadings = document.getElementsByTagName('h1')
const button = document.getElementsByClassName('submit-button').item(0)
const input = document.getElementById('text-input')

button.addEventListener('click', addFirstLevelHeading)

function addFirstLevelHeading(){
    let newTitle = document.createElement('h1') 
    newTitle.innerText = input.value
    article.appendChild(newTitle)
}
