const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");

function timer() {
    let minute = Number(minutes.innerText);
    let second = Number(seconds.innerText);

    if ((minute == 0 && second == 0)) {
        minute = 0;
        second = 0;
        pauseButton.style.display = 'none';
        playButton.style.display = 'block';
    }
    else {
        if (second > 0) {
            second--;
        }
        else{
            if (minute == 0 && second == 0) {}
            else if (second == 0) {
                second = 59;
                minute--;
            }
        }
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }

    minutes.innerHTML = minute;
    seconds.innerHTML = second;
}

playButton.addEventListener("click", () => {
    const countDown = setInterval(timer, 1000);

    pauseButton.style.display = "block";
    playButton.style.display = "none";

    /*xxxxxxxxxxxxxxxxxx pause button functions xxxxxxxxxxxxxxxx */

    pauseButton.addEventListener("click", () => {
        clearInterval(countDown);
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    });

    /*xxxxxxxxxxxxxxxxxx stop button functions xxxxxxxxxxxxxxxx */

    stopButton.addEventListener("click", () => {
        clearInterval(countDown);

        minutes.innerHTML = "25";
        seconds.innerHTML = "00";
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    });
});
