var navToggled = true;
var smallestWidth = 700;
var submitAlertText = "Under construction, submission failed";

window.addEventListener("load", (event) => {
    if (window.innerWidth < smallestWidth) {
        closeNav()
        navToggled = true;
    }
});

window.addEventListener("resize", function() {
console.log(window.innerWidth);
    if (window.innerWidth > smallestWidth) {
        document.getElementById("nav").style.display = "flex";
    }
    if (window.innerWidth < smallestWidth) {
        closeNav()
        navToggled = true;
    }
});

function Nav() {
    if (window.innerWidth < smallestWidth)
    {
        if (navToggled) {
            openNav();
            navToggled = false;
        } else {
            closeNav();
            navToggled = true;
        }
    }
}

function openNav() {
    document.getElementById("nav").style.display = "block";
}

function closeNav() {
    document.getElementById("nav").style.display = "none";
}

function submitAlert() {
    alert(submitAlertText);
    // window.location.reload();
}