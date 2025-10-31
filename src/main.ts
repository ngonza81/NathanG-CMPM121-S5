// CMPM 121 Smelly Code Activity

// UI Construction
const IDS = {
  increment: "Click Me!",
  decrement: "Decrement",
  reset: "Reset",
  counter: "Counter",
};
const HEADING_TEXT = "CMPM 121 Project";

function renderUI() {
  document.body.innerHTML = `
    <h1>${HEADING_TEXT}</h1>
    <p>Counter: <span id="${IDS.counter}">0</span></p>
    <button id="${IDS.increment}">Increment</button>
    <button id="${IDS.decrement}">Decrement</button>
    <button id="${IDS.reset}">Reset</button>
  `;
}

function updateDisplay(count: number) {
  document.getElementById(IDS.counter)!.textContent = count.toString();
  document.title = `Clicked ${count}`;
  document.body.style.backgroundColor = count % 2 === 0 ? "lightblue" : "pink";
}

// Event handlers
function bindButtonEvents(
  onIncrement: (e: MouseEvent) => void,
  onDecrement: (e: MouseEvent) => void,
  onReset: (e: MouseEvent) => void,
) {
  document.getElementById(IDS.increment)?.addEventListener(
    "click",
    onIncrement,
  );
  document.getElementById(IDS.decrement)?.addEventListener(
    "click",
    onDecrement,
  );
  document.getElementById(IDS.reset)?.addEventListener("click", onReset);
}

function createCounterApp() {
  let count = 0;

  const increment = () => {
    count++;
    updateDisplay(count);
  };

  const decrement = () => {
    count--;
    updateDisplay(count);
  };

  const reset = () => {
    count = 0;
    updateDisplay(count);
  };

  renderUI();
  bindButtonEvents(increment, decrement, reset);
  updateDisplay(count); // Initialize display
}

// Game State
createCounterApp();
document.body.style.backgroundColor = "white";
