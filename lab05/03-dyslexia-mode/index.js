/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  // use local storage to see if someone already same to site and toggled to dyslexia mode
  // --> this will get the user's preference

  const isPressed = window.localStorage.getItem('dyslexic') === 'true';
  if(isPressed) {
      document.body.classList.add('dyslexia-mode');
  }

  // set the button to pressed if appropriate
  const toggle = document.getElementById('dyslexia-toggle');
  if(isPressed) {
      toggle.setAttribute('aria-pressed', 'true');
  }

  toggle.addEventListener('click', toggleEventHandler)
};


const toggleEventHandler = (ev) => {
  let pressed = ev.currentTarget.getAttribute('aria-pressed') === 'true';
  // set attribute to either be true or falce
  ev.currentTarget.setAttribute('aria-pressed', String(!pressed));

  document.body.classList.toggle("dyslexia-mode");
  // save reference for future visits to your web page
  window.localStorage.setItem('dyslexic', String(!pressed));
};

// add a call to initPage to invoke our function
initPage();

