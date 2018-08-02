/* show and hide the navigation bar */
function toggleNav() {
    var x = document.getElementById("topNav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}