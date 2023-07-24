var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);

function timdiemchuan() {
    let k1 = document.getElementById("search").value;
    let v1 = document.getElementsByTagName("tr");
    for (let i = 0; i < v1.length; i++) {
        var h1 = v1[i].textContent;
        h1 = h1.toUpperCase();
        if (h1.indexOf(k1.toUpperCase()) >= 0) {
            v1[i].setAttribute("style", "color:#CC6699; font-weight:bold; text-shadow:1px 1px black;");
        }
    }
}
function recolordiemchuan() {
    let k2 = document.getElementById("search").value;
    let v2 = document.getElementsByTagName("tr");
    for (let i = 0; i < v2.length; i++) {
        var h2 = v2[i].textContent;
        h2 = h2.toUpperCase();
        if (h2.indexOf(k2.toUpperCase()) >= 0) {
            v2[i].setAttribute("style", "color:#004B40; font-weight:normal; text-shadow:none");
        }
    }
}
window.onscroll = function () {
    console.info(document.documentElement.scrollTop);
    var header = document.querySelector(".menu");
    var Topbtn = document.querySelector(".goto-Top");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 50) {
        header.style.position = "fixed";
        header.style.left = 0;
        header.style.right = 0;
        header.style.top = 0;

    }
    else {
        header.style.position = "relative";

    }
}
