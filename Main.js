
function myFunction() {
    var x = document.getElementById("MENU");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
