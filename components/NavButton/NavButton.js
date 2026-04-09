export function PrevButton(props) {
  const prevButton = document.createElement("button");
  prevButton.type = "button";
  prevButton.classList.add("button");
  prevButton.classList.add("button--prev");

  prevButton.textContent = "previous";
  prevButton.addEventListener("click", props.onClick);
  return prevButton;
}

export function NextButton(props) {
  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.classList.add("button");
  nextButton.classList.add("button--next");
  nextButton.textContent = "next";
  nextButton.addEventListener("click", props.onClick);
  return nextButton;
}
