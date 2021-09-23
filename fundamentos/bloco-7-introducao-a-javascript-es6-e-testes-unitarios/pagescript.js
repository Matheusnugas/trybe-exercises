const counterButton = document.getElementById('counter-button');
const counterText = document.getElementById('counter');
let clicks = 0;


counterButton.onclick = () => {
    clicks += 1;
    counterText.innerHTML = clicks;
}