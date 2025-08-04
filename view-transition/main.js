const colors = ["darkred", "darkslateblue", "darkgreen"];
const title = document.querySelector("h1");
const changeColorButton = document.querySelector("#transitionButton");

let count = 0;

const updateColour = () => {
  title.style = `background-color: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};

const changeColor = () => {
  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    updateColour();
    return;
  }

  // With View Transitions:
  document.startViewTransition(() => updateColour());
};

changeColorButton.addEventListener("click", changeColor);
