const image = document.querySelector("img");

image.addEventListener("mouseover", function () {
    this.style.filter = "hue-rotate(45deg)";
});

image.addEventListener("mouseleave", function () {
    this.style.filter = "inherit";
});