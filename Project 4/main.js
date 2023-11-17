const startStopBtn = document.getElementById("startStopBtns");
const resetBtn = document.getElementById("resetBtn");
let second = 0;
let minutes = 0;
let hour = 0;
let timerInterval = null;
let timerStatus = "stopped";

function stopwatch() {

    second++;

    if (second / 60 === 1) {
        second = 0;
        minutes++;
    }

    if (minutes / 60 === 1) {
        minutes = 0;
        hour++;
    }


    let time = document.getElementById("timer").textContent = `${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}:${second < 10 ? "0" + second : second}`;
}

startStopBtn.addEventListener("click", function () {
    if (timerStatus == "stopped") {
        timerInterval = setInterval(stopwatch, 1000);
        timerStatus = "started";
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    }
    else {
        clearInterval(timerInterval);
        timerStatus = "stopped";
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    }
})

resetBtn.addEventListener("click", function () {
    let timer = document.getElementById("timer");
    clearInterval(timerInterval);
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timer.innerText = "00:00:00";
    timerStatus = "stopped";

    second = 0;
    minutes = 0;
    hour = 0;
})