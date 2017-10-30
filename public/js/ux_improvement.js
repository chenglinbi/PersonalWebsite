window.onscroll = function() {scrollFunction()};
//window.onload = function() {alertUser()};

function alertUser() {
    alert("This site uses Bootstrap 4, which is still in beta.2. Any changed made by BS developer could render site not working");
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}