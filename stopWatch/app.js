// count the number of seconds that have elasped
let secondsElapsed = 0;
let interval = null;
const time = document.getElementById('time');

/**
 * Pads a number with a leading zero if it's less than 10.
 * Useful for formatting time values (e.g., 5 → "05").
 * @param {number|string} value - The value to pad.
 * @returns {string} Two-digit formatted string.
 */
function padStart(value) {
    return String(value).padStart(2, "0");
}

/**
 * Updates the stopwatch display with current time.
 * Calculates minutes and seconds from total seconds elapsed.
 * Formats the time as MM:SS.
 */
function setTime() {

    // get minutes & seconds from seconds elapsed
    const minutes = Math.floor(secondsElapsed / 60);

    // modulo: ex. 61 mod 60 -> 1
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`; // set the time to the html
}

/**
 * Increments the elapsed time by one second.
 * Updates the display after incrementing.
 * Used by setInterval
 */
function timer() {
    secondsElapsed++;
    setTime();
}

/**
 * Starts the stopwatch interval.
 * Stops existing interval to avoid duplicates.
 * Calls `timer()` every second.
 */
function startClock() {
    // if there is already an interval - clear the interval to avoid duplicates
    if (interval){
        clearInterval(interval);
    }
    // create an interval - the interval runs every 1000milsecs
    interval = setInterval(timer, 1000)

}

/**
 * Stops the stopwatch interval.
 * Clears the interval timer to pause time.
 */
function stopClock() {
    clearInterval(interval);
}

/**
 * Resets the stopwatch to 00:00.
 * Stops the clock and resets elapsed time.
 */
function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}

