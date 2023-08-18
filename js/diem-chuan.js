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
        timdiemchuan();
    }
}
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


        v2[i].setAttribute("style", "color:#004B40; font-weight:normal; text-shadow:none");

    }
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


/*=====================NẠP DATA VÀO TRANG ĐIỂM CHUẨN======= */
/*Nạp dữ liệu điểm thi thpt  */
function loadthpt() {
    fetch("/data/diemchuanthpt.json").then(res => res.json()).then(data => {
        let h = "";
        for (let d of data)
            h += `
        <tr class="dulieu">
            <td>${d.Stt}</td>
            <td>${d.Id}</td>
            <td>${d.name}</td>
            <td>${d.toHop}</td>
            <td>${d.diemChuan}</td>
            <td></td>
        </tr>
        `;

        let e = document.getElementById("markthpt");
        if (e !== null) {
            e.innerHTML += h;
        }
    })
}

/*Nạp dữ liệu điểm học bạ*/
function loadhocba() {
    fetch("/data/diemchuanhocba.json").then(res => res.json()).then(data => {
        let h = "";
        for (let d of data)
            h += `
        <tr class="dulieu">
            <td>${d.Stt}</td>
            <td>${d.Id}</td>
            <td>${d.name}</td>
            <td>${d.toHop}</td>
            <td>${d.diemChuan}</td>
            <td></td>
        </tr>
        `;

        let e = document.getElementById("mark-hocba");
        if (e !== null) {
            e.innerHTML += h;
        }
    })
}

/*Nạp dữ liệu điểm chuẩn đánh giá năng lực */
function loaddgnl() {
    fetch("/data/diemchuandgnl.json").then(res => res.json()).then(data => {
        let h = "";
        for (let d of data)
            h += `
        <tr class="dulieu">
            <td>${d.Stt}</td>
            <td>${d.Id}</td>
            <td>${d.name}</td>
            <td>${d.toHop}</td>
            <td>${d.diemChuan}</td>
            <td></td>
        </tr>
        `;

        let e = document.getElementById("mark-dgnl");
        if (e !== null) {
            e.innerHTML += h;
        }
    })
}



/*thực hiện hàm khi load xong */
window.onload = function () {
    loadthpt();
    loadhocba();
    loaddgnl();
}


/*THỰC HIỆN MENU CHO BẢNG ĐIỂM CHUẨN BẰNG JQUERY */
$(document).ready(() => {
    $("#menu-content a").click(function () {
        $("#menu-content a").removeClass("active");
        $(this).addClass("active");

        let h = $(this).attr("href");
        $(".tab-content > div").hide();
        $(h).show();
    });
});
/*========================================================== */


