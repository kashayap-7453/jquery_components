
function controller(x) {
    flag = flag + x;
    slideshow(flag);
}

let flag = 0;

function slideshow(num) {
    let slides = document.getElementsByClassName("slide");
    
    if (num == slides.length) {
        // flag = 0;
        // num = 0;
        flag = slides.length-1;
        num = slides.length-1;
    }
    
    if (num < 0) {
    // flag = slides.length - 1;
    // num = slides.length - 1;
    flag = 0;
    num = 0;
  }

  for (let y of slides) {
      y.style.display = "none";
    }
    
    slides[num].style.display = "block";
}

slideshow(flag);