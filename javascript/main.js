var v = {} //all variables will be stored inside this variable object.
v.prevValueArr = [];
v.aud = new Audio();

function init() {
    // starting function.
    console.log("init here...................................");
    $('#playBtn').off('click').on('click', playBtnClickFn);
    $('#setting').on('click', settingBtnClickFn);
    $('#reset').on('click', resetBtnClickFn);
    $('#ticket').on('click', ticketBtnClickFn);
}

function ticketBtnClickFn() {
    // ticket button click event function.
    window.open('http://www.google.com/', '_blank');
}

function resetBtnClickFn() {
    // reset button click event function.
    v.prevValueArr = [];
    $('.co-red').removeClass('co-red');
    $('.big_number')[0].innerHTML = " ";
    $('.header ul')[0].innerHTML = " ";
    $('#playBtn').off('click').on('click', playBtnClickFn);
}

function settingBtnClickFn() {
    // setting button click event function.
    alert("no settings!!!!!!!!!!!!!!!!!!!!!");
}

function playBtnClickFn() {
    // play button click event function.
    console.log("nzhdfhgbsehbhsdhg");
    $('#playBtn').off('click', playBtnClickFn);
    if (v.prevValueArr.length < 90) {
        generateRandNumber();
        if (v.prevValueArr.indexOf(v.rand) == -1) {
            v.aud.src = "audio/" + v.rand + ".mp3";
            v.aud.removeEventListener("loadeddata", loadData);
            v.aud.addEventListener("loadeddata", loadData);
            v.aud.removeEventListener("ended", endedFn);
            v.aud.addEventListener("ended", endedFn);
            $('#num_' + v.rand).addClass('co-red');
            $('.big_number')[0].innerHTML = v.rand;
            v.prevValueArr.push(v.rand);
            // $('.header ul')[0].innerHTML += "<li>" + v.rand + "</li>"
            $('.header ul').prepend("<li>" + v.rand + "</li>");
        } else {
            playBtnClickFn();
        }
    }
}

function loadData() {
    v.aud.play();
    $('#playBtn').css('color', '#85b385');
}

function endedFn() {
    $('#playBtn').off('click').on('click', playBtnClickFn).removeAttr('style');
}

function generateRandNumber() {
    v.rand = Math.floor((Math.random() * 90) + 1);
}