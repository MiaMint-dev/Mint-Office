const textbox = document.querySelector(".desk-textbox");

if (textbox) {
textbox.value = localStorage.getItem("chapter1") || "";
textbox.addEventListener("input", () => {

    const distanceFromBottom =
        textbox.scrollHeight - textbox.scrollTop - textbox.clientHeight;

    // only autoscroll if already near bottom
    if (distanceFromBottom < 50) {

        requestAnimationFrame(() => {
            textbox.scrollTop = textbox.scrollHeight;
        });

    }

});
}
function savebtn() {
    localStorage.setItem("chapter1", textbox.value);
}

const todotext = document.querySelector(".to-do-text");

if (todotext) {

    function save() {
    const lines = todotext.innerText.split("\n");
    localStorage.setItem("todo", JSON.stringify(lines));
  }

  window.save = save;
  
  const saved = JSON.parse(localStorage.getItem("todo") || "[]");

  todotext.innerText = saved.join("\n");
  
}

const orangeNote = document.querySelector(".orange-note");
const greenNote = document.querySelector(".green-note");
const blueNote = document.querySelector(".blue-note");
const yellowNote = document.querySelector(".yellow-note");

function saveText() {
  localStorage.setItem("orange", orangeNote.textContent);
  localStorage.setItem("green", greenNote.textContent);
  localStorage.setItem("blue", blueNote.textContent);
  localStorage.setItem("yellow", yellowNote.textContent);
}
if (orangeNote && greenNote && blueNote && yellowNote) {
orangeNote.textContent = localStorage.getItem("orange") || "";
greenNote.textContent = localStorage.getItem("green") || "";
blueNote.textContent = localStorage.getItem("blue") || "";
yellowNote.textContent = localStorage.getItem("yellow") || "";
}

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1200;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;
}

const startTimer = () => {
    if(interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
        updateTimer();
        } else {
            clearInterval(interval);
            alert("Good Job!");
            timeLeft = 1200;
            updateTimer();
        }
    }, 1000);
};

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1200;
    updateTimer();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

updateTimer();
