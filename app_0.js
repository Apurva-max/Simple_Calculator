 let display = document.getElementById("display");
    let currentValue = "";

    function appendValue(value) {
      if (display.value === "0") {
        display.value = "";
      }
      display.value += value;
      currentValue = display.value;
    }

    function clearDisplay() {
      display.value = "0";
      currentValue = "";
    }

    function calculate() {
      try {
        display.value = eval(currentValue);
        currentValue = display.value;
      } catch {
        display.value = "Error";
        currentValue = "";
      }
    }