var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);

function timkiem() {
    let k1 = document.getElementById("search").value;
    let v1 = document.querySelectorAll(".admission-container .type");

    for (let i = 0; i < v1.length; i++) {
        var h1 = v1[i].textContent;
        if (h1.indexOf(k1) >= 0) {
            v1[i].setAttribute("style", "color:red;");
        }
    }
}
function recolor() {
    let
    for (let i = 0; i < v.length; i++) {
        var h = v[i].textContent;
        if (h.indexOf(k) >= 0) {
            v[i].setAttribute("style", "color:white;");
        }
    }
}



