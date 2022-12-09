button = document.getElementById('btn');
button4 = document.getElementById('btn4');

// change button color to white if your on the page it links to
if (window.location.pathname == "https://fischernils06.github.io/PRWR_Projekt/contact.html" || window.location.pathname == "127.0.0.1:5500/contact.html") {
    button.classList.add('active');
}
else if (window.location.pathname == "index.html") {
    //add active to button after loading next page
    button.classList.add('active');
    
} else if (window.location.pathname == "01_vor_videospielen.html") {
    button4.classList.add('active');
}






