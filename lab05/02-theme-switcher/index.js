/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

// Going to have four separate functions

const oceanTheme = (ev) => {
   document.querySelector('body').className = 'ocean';
}

const desertTheme = (ev) => {
   document.querySelector('body').className = 'desert';
}

const defaultTheme = (ev) => {
   document.querySelector('body').className = 'default';
}

const highContrastTheme = (ev) => {
   document.querySelector('body').className = 'high-contrast';
}

// #ocean is the identifier
//  when we click, activate ocean theme function to get ocean theme
document.querySelector("#ocean").addEventListener('click', oceanTheme)

document.querySelector("#desert").addEventListener('click', desertTheme)

document.querySelector("#default").addEventListener('click', defaultTheme)

document.querySelector("#high-contrast").addEventListener('click', highContrastTheme)
