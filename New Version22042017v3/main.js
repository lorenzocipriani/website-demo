
/*@Author : W3 schools. 2017. How TO - Collapsibles/Accordion. [Online] Available : https://www.w3schools.com/howto/howto_js_accordion.asp [Last accessed 22nd April2017]
*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

/*@Author: W3 schools.W3.CSS Slideshow.2017.[Online] Available : https://www.w3schools.com/w3css/w3css_slideshow.asp [Last accessed April 2017]
*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



