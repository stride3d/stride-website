// Script for auto-expanding accordions on the faq page from the url hash
if (location.hash !== null && location.hash !== "") {
    var id = location.hash.slice(1);
    var element = document.getElementById(id)

    // Expand element if it exists
    if (element != null) {
        element.classList.add("show")
        var targets = document.getElementsByClassName(id + "-target");
        for (let i = 0; i < targets.length; ++i) {
            targets[i].classList.remove("collapsed")
            targets[i].setAttribute("aria-expanded", true)
        }
    }
}
