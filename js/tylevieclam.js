var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);
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
