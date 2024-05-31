let slideIndex = [1, 1];
let slideId = ["mySlides1-dipl", "mySlides2-sportwatch"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].classList.remove('fade'); // Remove the fade class from all slides
  }
  x[slideIndex[no] - 1].style.display = "block";
  x[slideIndex[no] - 1].classList.add('fade'); // Add the fade class to the current slide
}
