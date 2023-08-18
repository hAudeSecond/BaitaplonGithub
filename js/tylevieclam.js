var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);

function menuFixed() {
    //khóa thanh menu ở vị trí cố định
    let header = document.querySelector(".menu");
    header.style.position = "fixed";
    header.style.left = 0;
    header.style.right = 0;
    header.style.top = 0;
    header.style.opacity = 0.65;
}

function menuBack() {
    //trả thanh menu về vị trí ban đầu
    let header = document.querySelector(".menu");
    header.style.position = "relative";
    header.style.opacity = 1;
}
/*Hàm điều chỉnh opacity của thanh menu khi rê chuột*/
function hoverMenu() {
    let header = document.querySelector(".menu");
    header.style.opacity = 1;
}
window.onscroll = function () {
    console.info(document.documentElement.scrollTop);

    //lấy chiều rộng hiện tại của màn hình
    const screenWidth = window.innerWidth;

    //giá trị chiều rộng mà bạn muốn thực hiện hàm
    const targetWidth = 450;

    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 50) {
        if (screenWidth > targetWidth) {
            menuFixed();
        }
    }
    else {
        if (screenWidth > targetWidth) {
            menuBack();
        }
    }
}

//Responsive menu cho điện thoại

//trượt menu vào màn hình
function menuSwipeIn() {
    let menu1 = document.querySelector(".menu .menu1");
    menu1.style.left = "0%";
}

//trượt menu ra khỏi màn hình
function menuSwipeOut() {
    let menu1 = document.querySelector(".menu .menu1");
    menu1.style.left = "-60%";
    PullupList();
    PullupInfo();
}

//hiện các trang khoa ngành

function DropdownList() {
    let major = document.getElementById("major");
    major.style.display = "block";
    major.style.position = "relative";
}
//ẩn các trang khoa ngành
function PullupList() {
    let major = document.getElementById("major");
    if (major.style.display === "block") {
        major.style.display = "none";
    }
}

//hiện các trang thông tin liên quan

function DropdownInfo() {
    let Info = document.getElementById("Info");
    Info.style.display = "block";
    Info.style.position = "relative";
}
//ẩn các trang thông tin liên quan

function PullupInfo() {
    let Info = document.getElementById("Info");
    if (Info.style.display === "block") {
        Info.style.display = "none";
    }
}

