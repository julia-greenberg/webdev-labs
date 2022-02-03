let currentFont = 1.4;

const makeBigger = () => {
   // alert('make bigger!');
   // make the font bigger
   currentFont += 0.2;
   // set the font to be that way on the page
   setFont();
};

const makeSmaller = () => {
   // alert('make smaller!');
   // make the font smaller
   currentFont -= 0.2;
   // set the font to be that way on the page
   setFont();
};

const setFont = () => {
   document.querySelector('.content').style.fontSize = `${currentFont}em`;
   document.querySelector('h1').style.fontSize = `${currentFont + 0.5}em`
}


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

