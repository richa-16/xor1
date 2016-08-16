

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spa = document.getElementById("close");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spa.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




var mod = document.getElementById('nmod');

// Get the button that opens the modal
var n_p = document.getElementById("n_mod");

// Get the <span> element that closes the modal
var sp =document.getElementById("close");

// When the user clicks on the button, open the modal 
n_p.onclick = function() {
    mod.style.display = "block";
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
sp.onclick = function() {
    mod.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == mod) {
        mod.style.display = "none";
    }
}