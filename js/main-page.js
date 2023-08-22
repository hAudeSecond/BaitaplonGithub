var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);
//Hàm trả về kết quả tìm kiếm khi người dùng click phím enter
function checkEnter(event) {
    if (event.key === "Enter")//Nếu nút được ấn xuống là Enter thì thực hiện hàm tìm kiếm
    {
        timkiem();
        timkiemmain();
    }
}
function timkiem() {
    let k1 = document.getElementById("search").value;
    let v1 = document.querySelectorAll(".admission-container .type");

    for (let i = 0; i < v1.length; i++) {
        var h1 = v1[i].textContent;
        h1 = h1.toUpperCase();
        if (h1.indexOf(k1.toUpperCase()) >= 0) {
            v1[i].setAttribute("style", "color:#CC6699; text-shadow:1px 1px black;");
        }
    }
}
function timkiemmain() {
    let k3 = document.getElementById("search").value;
    let v3 = document.querySelectorAll(".main-info");

    for (let i = 0; i < v3.length; i++) {
        var h3 = v3[i].textContent;
        h3 = h3.toUpperCase();
        if (h3.indexOf(k3.toUpperCase()) >= 0) {
            v3[i].setAttribute("style", "color:#CC6699;");
        }
    }
}
function recolormain() {
    let k4 = document.getElementById("search").value;
    let v4 = document.querySelectorAll(".main-info")
    for (let i = 0; i < v4.length; i++) {
        var h4 = v4[i].textContent;
        h4 = h4.toUpperCase();
        if (h4.indexOf(k4.toUpperCase()) >= 0) {
            v4[i].setAttribute("style", "color:darkolivegreen;");
        }
    }
}
function recolor() {
    let k2 = document.getElementById("search").value;
    let v2 = document.querySelectorAll(".admission-container .type")
    for (let i = 0; i < v2.length; i++) {
        var h2 = v2[i].textContent;
        h2 = h2.toUpperCase();
        if (h2.indexOf(k2.toUpperCase()) >= 0) {
            v2[i].setAttribute("style", "color:white; text-shadow:none;");
        }
    }
}

/*các hàm cho menu cuộn trang và nút trở về đầu trang */

function TopbtnAppear() {
    //cho nút trượt về đầu trang hiện ra
    let Topbtn = document.querySelector(".goto-Top");
    Topbtn.style.right = "3%";
}

function TopbtnDisappear() {
    //cho nút trượt về đầu trang ẩn ra ngoài
    let Topbtn = document.querySelector(".goto-Top");
    Topbtn.style.right = "-10%";
}

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
    const targetWidth = 850;

    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 50) {
        if (screenWidth > targetWidth) {
            menuFixed();
        }

        TopbtnAppear();
    }
    else {
        if (screenWidth > targetWidth) {
            menuBack();
        }

        TopbtnDisappear();
    }
}

function goToTop() {
    var timer = setInterval(function () {
        document.documentElement.scrollTop -= 28;
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(timer);
        }
    }, 1);

}

/*hàm sử dụng để check thông tin form đăng kí tư vấn */

function checkInfo() {//Kiểm tra hệ 
    let he = document.getElementById("advis-input").value;
    if (he === "-Hệ-") {

        return false;
    }
    else {
        return true;
    }
}
function checkName() {//kiểm tra họ tên
    let firstname = document.getElementById("advis-input-firstname").value;
    let lastname = document.getElementById("advis-input-lastname").value;
    if (firstname === "" || lastname === "") {
        return false;
    }
    else {
        return true;
    }
}

function checkLuaChon() {//kiểm tra lựa chọn tư vấn
    let ttts = document.getElementById("ttts").checked;
    let tuvan = document.getElementById("tuvan").checked;
    if (!ttts && !tuvan) {
        return false;
    }
    else {
        return true;
    }
}

function checkEmail() {//kiểm tra email
    let email = document.getElementById("advis-input-email").value;
    const regex = /^[a-zA-Z0-9]+@gmail.com$/ //sử dụng biểu thức chính quy để gắn định dạng chuẩn cho regex
    if (regex.test(email)) {//kiểm tra xem người dùng có nhập email đúng định dạng không
        return true;
    } else {
        return false;
    }
}
function checkAll() {
    let warning = document.getElementById("warning");
    let name = document.getElementById("name-warning");
    let choice = document.getElementById("choice");
    let email = document.getElementById("email-warning");
    let success = document.getElementById("success");
    if (checkInfo() === false) {

        warning.innerHTML = "Hãy nhập hệ của bạn!";
    }
    else {
        warning.innerHTML = "";
    }

    if (checkName() === false) {

        name.innerHTML = "Hãy nhập đầy đủ họ tên!";
    }
    else {
        name.innerHTML = "";
    }

    if (checkEmail() === true) {
        email.innerHTML = ""
    }
    else {
        email.innerHTML = "Email không hợp lệ!"
    }
    if (checkLuaChon() === false) {
        choice.innerHTML = "Chọn ít nhất 1 lựa chọn!";
    }
    else {
        choice.innerHTML = "";
    }
    if (checkInfo() === true && checkName() === true && checkLuaChon() === true && checkEmail() === true) {
        success.innerHTML = "ĐĂNG KÍ THÀNH CÔNG!";
    }
    else {
        success.innerHTML = "";
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
//hiện các trang thông tin hoạt động khoa học

function DropdownContent() {
    let Info = document.getElementById("content");
    Info.style.display = "block";
    Info.style.position = "relative";
}
//ẩn các trang thông tin liên quan

function PullupContent() {
    let Info = document.getElementById("content");
    if (Info.style.display === "block") {
        Info.style.display = "none";
    }
}

/*=====================NẠP DATA VÀO TRANG MAIN======= */
/*Nạp dữ liệu điểm thi thpt  */
function loadAdmission() {
    fetch("/data/admission.json").then(res => res.json()).then(data => {
        let h = "";
        for (let d of data)
            h += `
        <div class="${d.class}">
            <a href="#" class="type">${d.name}</a>
            <p>${d.content}</p>
        </div>
        `;

        let e = document.querySelector(".admission-container");
        if (e !== null) {
            e.innerHTML += h;
        }
    })
}
//khởi chạy khi cây dom load xong
window.onload = function () {
    loadAdmission();
}



