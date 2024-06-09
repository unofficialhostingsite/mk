function dark_shifter() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var heartImg = document.getElementById('heart1');
    if (element.classList.contains("dark-mode")) {
      heartImg.src = 'heartbeat-static.gif';
    } else {
      heartImg.src = 'pink heart white.gif';
    }
  }

const targetDate = new Date(2024, 2, 5, 8, 0, 0); // March 5, 2024, 8:00 (month is 0-indexed, so 2 represents March)

function updateTime() {
const now = new Date();
const difference = now.getTime() - targetDate.getTime();
const seconds = Math.floor(difference / 1000);

const timeDisplay = document.getElementById("p1");
timeDisplay.innerText = `${seconds} SECONDS`;
}

updateTime();
setInterval(updateTime, 1000);;
  