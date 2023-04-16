"use strict";
var GRADUATION = new Date("2023-06-23");
/**
 * Get the number of days until GRADUATION.
 * @returns The number of days until graduation
 */
function calculateRemainingDays() {
    return ((GRADUATION.getTime() - Date.now()) / (3600000 * 24));
}
/**
 * Displays the number of days until graduation.
 * @param counter A reference to the counter element.
 */
function displayRemainingDays(counter) {
    var days = calculateRemainingDays();
    if (days > 0 && days < 1) {
        counter.textContent = "Today is graduation!";
    }
    else if (days > 1) {
        counter.textContent = document.title = "There are " + days.toFixed(1) + " days until graduation!";
    }
    else {
        counter.textContent = "Graduation has already happened!";
    }
}
// Display the number of days
var dayCounter = document.querySelector("#day-counter");
if (dayCounter) {
    displayRemainingDays(dayCounter);
}
