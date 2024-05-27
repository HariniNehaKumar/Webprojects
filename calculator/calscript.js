
const calculator = document.querySelector("#calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    let text = display.textContent.trim();

    if (value === "clear") {
      display.textContent = "0";
    } else if (value === "backspace") {
      display.textContent = text.length > 1 ? text.slice(0, -1) : "0";
    } else if (value === "=") {
      try {
        display.textContent = eval(text.replace("×", "*").replace("÷", "/"));
      } catch {
        display.textContent = "Error";
      }
    } else if (value === "+/-") {
      display.textContent = text.startsWith("-") ? text.substring(1) : `-${text}`;
    } else if (value === "%") {
      display.textContent = (parseFloat(text) / 100).toString();
    } else {
      display.textContent = text === "0" ? value : text + value;
    }
  });
});
