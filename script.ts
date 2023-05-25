
const GRADUATION = new Date("2023-06-22");

/**
 * Get the number of days until GRADUATION.
 * @returns The number of days until graduation
 */
const calculateRemainingDays = () : number => {
    return ((GRADUATION.getTime() - Date.now()) / (3600000 * 24));
}

/**
 * Displays the number of days until graduation.
 * @param counter A reference to the counter element.
 */
const displayRemainingDays = (counter: HTMLHeadingElement) : void => {
    const days = calculateRemainingDays();
    if (days > 0 && days < 1) {
        counter.textContent = "Today is graduation!";
    } 
    else if (days > 1) {
        counter.textContent = document.title = `There are ${days.toFixed(1)} days until graduation!`;
    } 
    else {
        counter.textContent = "Graduation has already happened!";
    }
}

const getCurrentUrl = (): string => {
    return window.location.href;
}

const handleShare = (shareBtn: HTMLElement) => {
    const url = getCurrentUrl();
    navigator.clipboard.writeText(`Countdown to graduation with me at ${url}!`);
    shareBtn.innerText = "Copied to Clipboard!";
}

// Display the number of days
const dayCounter: HTMLHeadingElement | null = document.querySelector("#day-counter");
if (dayCounter) {
    displayRemainingDays(dayCounter);
}

const shareButton = document.getElementById("share");
if (shareButton) {
    shareButton.addEventListener("click", () => handleShare(shareButton));
}