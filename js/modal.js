// get the modal
const modal = document.getElementById("myModal");

let images = document.querySelectorAll(".gallery-item img");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

images.forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}