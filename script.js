/* setTitle()
Used to update the text of the <h1> element with the provided string

setDescription()
Used to update the text of the <p> element with the provided string

setBackgroundColor()
Used to update the background color of the <body> element with the provided string

setFontColor()
Used to update the font color for all elements with the provided string

setTheme()
Used to change the page theme to the theme provided. */

// setTitle = "in the console?"

// Changes Title
const changeTitle = document.getElementById('title');

function setTitle(newTitle) {
    if (changeTitle) {title.textContent = newTitle}
}

// Changes Description
const description = document.getElementById('description');

function setDescription(newDescription) {
    if (description) {description.textContent = newDescription}
}

// Changes background color
const background = document.getElementById('background');

function setBackground(newBackground) {
    if (background) {background.style.backgroundColor = newBackground}
}



function setFontcolor(newFont) {
    if (changeTitle) {changeTitle.style.color = newFont}
    if (description) {description.style.color = newFont}
}

/*const changeFontColor = document.getElementById('text-color');

changeFontColor.setAttribute('style', `
color: yellow;
`)
*/



const $theme = document.getElementById('theme')

function theme() {

  $theme.classList.toggle('on')
  $theme.classList.toggle('off')
  
}
