document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("technologies");
  const button = document.querySelector("button");
  const removeAllBtn = document.querySelector("span");
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  document.body.appendChild(mainContainer);
  let rowContainer;

  button.addEventListener("click", () => {
    if (input.value !== "") {
      if (
        mainContainer.childElementCount === 0 ||
        rowContainer.childElementCount === 2
      ) {
        rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        mainContainer.appendChild(rowContainer);
      }
      const technology = document.createElement("div");
      technology.classList.add("technology");
      technology.innerHTML = input.value;
      rowContainer.appendChild(technology);
      input.value = "";
    }
  });

  removeAllBtn.addEventListener("click", () => {
    mainContainer.innerHTML = "";
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      button.click();
    }
  });
});
