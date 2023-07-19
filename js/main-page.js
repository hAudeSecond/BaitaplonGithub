var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);

function timkiem() {
    var k = document.getElementById("search").value;
    var v = document.querySelectorAll(".admission-container .type");

    for (let i = 0; i < v.length; i++) {
        var h = v[i].textContent;
        if (h.indexOf(k) >= 0) {
            v[i].setAttribute("style", "color:red;");
        }
    }
}
function recolor() {
    for (let i = 0; i < v.length; i++) {
        var h = v[i].textContent;
        if (h.indexOf(k) >= 0) {
            v[i].setAttribute("style", "color:white;");
        }
    }
}



