const n = document.querySelectorAll(".question").length;

for (i = 0; i < n; i++) {
  document
    .querySelectorAll(".question")
    [i].addEventListener("click", function () {
      // console.log(this.id);
      document
        .querySelectorAll(".arrow")
        [this.id].classList.toggle("arrow-clicked");
      document
        .querySelectorAll(".question-text")
        [this.id].classList.toggle("text-bold");
      document
        .querySelectorAll(".answer")
        [this.id].classList.toggle("show-answer");
    });
}
