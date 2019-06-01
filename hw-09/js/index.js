
const jsTime = document.querySelector('.js-time');
const jsStart = document.querySelector('.js-start');
const jsTakeLap = document.querySelector('.js-take-lap');
const jsReset = document.querySelector('.js-reset');
const jsLaps = document.querySelector('.js-laps');




let ms = 0,
    sec = 0,
    min = 0,
    isActive = false;
deltaTime = null,
    timerId = null,
    pausedTime = 0;


jsReset.disabled = true;
jsReset.addEventListener('click', stopClick);
jsStart.addEventListener('click', startClick);
jsTakeLap.addEventListener('click', takeLap);

function startTimer() {
    isActive = true;
    startTime = Date.now() - deltaTime;
    timerId = setInterval(() => {
        const currentTime = Date.now();
        deltaTime = currentTime - startTime;
        const time = new Date(deltaTime);
        ms = parseInt(time.getMilliseconds() / 100);
        sec = time.getSeconds();
        min = time.getMinutes();
        jsTime.textContent = `${min}:${sec}.${ms}`;
    }, 100)
}

function startClick() {
    if (!isActive) {
        jsReset.removeAttribute('disabled')
        startTimer();
        jsStart.textContent = 'Pause';
    } else {
        stopTimer();
        jsStart.textContent = 'Continue';
    }
}
function stopClick() {
    stopTimer();
    jsReset.setAttribute('disabled', '');
    jsLaps.innerHTML = '';
    jsStart.textContent = 'Start';
    deltaTime = 0;
    ms = 0;
    sec = 0;
    min = 0;
    jsTime.textContent = `${min}:${sec}.${ms}`;
}
function stopTimer() {
    clearInterval(timerId);
    isActive = false;
}


function takeLap() {
    jsLaps.innerHTML += `<li>${min}:${sec}.${ms}</li>`;
}

