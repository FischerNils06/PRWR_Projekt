const object  = document.querySelectorAll('object');
const bttn = document.getElementsByClassName('bttn');
// create a variable for the screen width
var screenWidth = window.innerWidth;
// create a variable for the screen height
var screenHeight = window.innerHeight;

if  (screenWidth < 1000) {
    for (let i = 0; i < bttn.length; i++) {
        bttn[i].addEventListener('click', () => {
            object.classList.add('hide');
        });
    
}
}