var danNum1 = 1;
var danNum2 = 1;
var danNum3 = 1;
var danNum4 = 1;
// var danNum5 = 1;
var danNum6 = 1;
var danNum7 = 1;
var danNum8 = 1;
// var danNum9 = 1;

var oDang1 = document.getElementById("danger_1");
var oDang2 = document.getElementById("danger_2");
var oDang3 = document.getElementById("danger_3");
var oDang4 = document.getElementById("danger_4");
// var oDang5 = document.getElementById("danger_5");
var oDang6 = document.getElementById("danger_6");
var oDang7 = document.getElementById("danger_7");
var oDang8 = document.getElementById("danger_8");
// var oDang9 = document.getElementById("danger_9");

var oDanRed1 = document.getElementById("danger_red_1");
var oDanNum1 = document.getElementById("danger_num_1");
var oDanAdd1 = document.getElementById("danger_add_1");

var oDanRed2 = document.getElementById("danger_red_2");
var oDanNum2 = document.getElementById("danger_num_2");
var oDanAdd2 = document.getElementById("danger_add_2");

var oDanRed3 = document.getElementById("danger_red_3");
var oDanNum3 = document.getElementById("danger_num_3");
var oDanAdd3 = document.getElementById("danger_add_3");

var oDanRed4 = document.getElementById("danger_red_4");
var oDanNum4 = document.getElementById("danger_num_4");
var oDanAdd4 = document.getElementById("danger_add_4");

// var oDanRed5 = document.getElementById("danger_red_5");
// var oDanNum5 = document.getElementById("danger_num_5");
// var oDanAdd5 = document.getElementById("danger_add_5");

var oDanRed6 = document.getElementById("danger_red_6");
var oDanNum6 = document.getElementById("danger_num_6");
var oDanAdd6 = document.getElementById("danger_add_6");

var oDanRed7 = document.getElementById("danger_red_7");
var oDanNum7 = document.getElementById("danger_num_7");
var oDanAdd7 = document.getElementById("danger_add_7");

var oDanRed8 = document.getElementById("danger_red_8");
var oDanNum8 = document.getElementById("danger_num_8");
var oDanAdd8 = document.getElementById("danger_add_8");

// var oDanRed9 = document.getElementById("danger_red_9");
// var oDanNum9 = document.getElementById("danger_num_9");
// var oDanAdd9 = document.getElementById("danger_add_9");

oDanRed1.onclick = function () {
    if (danNum1 <= 0) {
        danNum1 = 0;
    } else {
        danNum1 = danNum1 - 1
    }
    oDanNum1.innerText = danNum1
    Danger1Format()
}
oDanAdd1.onclick = function () {
    if (danNum1 >= 6) {
        danNum1 = 6;
    } else {
        danNum1 = danNum1 + 1
    }
    oDanNum1.innerText = danNum1
    Danger1Format()
}

oDanRed2.onclick = function () {
    if (danNum2 <= 0) {
        danNum2 = 0;
    } else {
        danNum2 = danNum2 - 1
    }
    oDanNum2.innerText = danNum2
    Danger2Format()
}
oDanAdd2.onclick = function () {
    if (danNum2 >= 6) {
        danNum2 = 6;
    } else {
        danNum2= danNum2 + 1
    }
    oDanNum2.innerText = danNum2
    Danger2Format()
}

oDanRed3.onclick = function () {
    if (danNum3 <= 0) {
        danNum3 = 0;
    } else {
        danNum3 = danNum3 - 1
    }
    oDanNum3.innerText = danNum3
    Danger3Format()
}
oDanAdd3.onclick = function () {
    if (danNum3 >= 6) {
        danNum3 = 6;
    } else {
        danNum3= danNum3 + 1
    }
    oDanNum3.innerText = danNum3
    Danger3Format()
}

oDanRed4.onclick = function () {
    if (danNum4 <= 0) {
        danNum4 = 0;
    } else {
        danNum4 = danNum4 - 1
    }
    oDanNum4.innerText = danNum4
    Danger4Format()
}
oDanAdd4.onclick = function () {
    if (danNum4 >= 6) {
        danNum4 = 6;
    } else {
        danNum4= danNum4 + 1
    }
    oDanNum4.innerText = danNum4
    Danger4Format()
}

// oDanRed5.onclick = function () {
//     if (danNum5 <= 0) {
//         danNum5 = 0;
//     } else {
//         danNum5 = danNum5 - 1
//     }
//     oDanNum5.innerText = danNum5
//     Danger5Format()
// }
// oDanAdd5.onclick = function () {
//     if (danNum5 >= 6) {
//         danNum5 = 6;
//     } else {
//         danNum5= danNum5 + 1
//     }
//     oDanNum5.innerText = danNum5
//     Danger5Format()
// }

oDanRed6.onclick = function () {
    if (danNum6 <= 0) {
        danNum6 = 0;
    } else {
        danNum6 = danNum6 - 1
    }
    oDanNum6.innerText = danNum6
    Danger6Format()
}
oDanAdd6.onclick = function () {
    if (danNum6 >= 6) {
        danNum6 = 6;
    } else {
        danNum6= danNum6 + 1
    }
    oDanNum6.innerText = danNum6
    Danger6Format()
}

oDanRed7.onclick = function () {
    if (danNum7 <= 0) {
        danNum7 = 0;
    } else {
        danNum7 = danNum7 - 1
    }
    oDanNum7.innerText = danNum7
    Danger7Format()
}
oDanAdd7.onclick = function () {
    if (danNum7 >= 6) {
        danNum7 = 6;
    } else {
        danNum7= danNum7 + 1
    }
    oDanNum7.innerText = danNum7
    Danger7Format()
}

oDanRed8.onclick = function () {
    if (danNum8 <= 0) {
        danNum8 = 0;
    } else {
        danNum8 = danNum8 - 1
    }
    oDanNum8.innerText = danNum8
    Danger8Format()
}
oDanAdd8.onclick = function () {
    if (danNum8 >= 6) {
        danNum8 = 6;
    } else {
        danNum8= danNum8 + 1
    }
    oDanNum8.innerText = danNum8
    Danger8Format()
}

// oDanRed9.onclick = function () {
//     if (danNum9 <= 0) {
//         danNum9 = 0;
//     } else {
//         danNum9 = danNum9 - 1
//     }
//     oDanNum9.innerText = danNum9
//     Danger9Format()
// }
// oDanAdd9.onclick = function () {
//     if (danNum9 >= 6) {
//         danNum9 = 6;
//     } else {
//         danNum9= danNum9 + 1
//     }
//     oDanNum9.innerText = danNum9
//     Danger9Format()
// }

function Danger1Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum1; i++) {
        oTxt = oTxt + `<div class="line padding${danNum1}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang1.innerHTML = oTxt;
    if (danNum1 == 0) {
        oDang1.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}
function Danger2Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum2; i++) {
        oTxt = oTxt + `<div class="line padding${danNum2}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang2.innerHTML = oTxt;
    if (danNum2 == 0) {
        oDang2.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}
function Danger3Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum3; i++) {
        oTxt = oTxt + `<div class="line padding${danNum3}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang3.innerHTML = oTxt;
    if (danNum3 == 0) {
        oDang3.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}
function Danger4Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum4; i++) {
        oTxt = oTxt + `<div class="line padding${danNum4}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang4.innerHTML = oTxt;
    if (danNum4 == 0) {
        oDang4.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}

function Danger5Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum5; i++) {
        oTxt = oTxt + `<div class="line padding${danNum5}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang5.innerHTML = oTxt;
    if (danNum5 == 0) {
        oDang5.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}

function Danger6Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum6; i++) {
        oTxt = oTxt + `<div class="line padding${danNum6}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang6.innerHTML = oTxt;
    if (danNum6 == 0) {
        oDang6.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}
function Danger7Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum7; i++) {
        oTxt = oTxt + `<div class="line padding${danNum7}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang7.innerHTML = oTxt;
    if (danNum7 == 0) {
        oDang7.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}

function Danger8Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum8; i++) {
        oTxt = oTxt + `<div class="line padding${danNum8}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang8.innerHTML = oTxt;
    if (danNum8 == 0) {
        oDang8.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}
function Danger9Format() {
    let oTxt = ``;
    for (let i = 0; i < danNum9; i++) {
        oTxt = oTxt + `<div class="line padding${danNum9}">
            <div class="app-name" contenteditable="true">${"今日头条"}</div>
            <div class="app-no" contenteditable="true">${"0"}</div>
        </div>`
    }
    oDang9.innerHTML = oTxt;
    if (danNum9 == 0) {
        oDang9.innerHTML = `<div class="line">
            <div class="app-name" contenteditable="true">${"本期无上榜应用"}</div>
        </div>`;
    }
}




Danger1Format();
Danger2Format();
Danger3Format();
Danger4Format();
// Danger5Format();
Danger6Format();
Danger7Format();
Danger8Format();
// Danger9Format();
