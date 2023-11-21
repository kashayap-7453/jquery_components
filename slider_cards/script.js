let contentNum = 1
contentSlide(contentNum);

function controler(x){
    contentSlide(contentNum += x);
}

function currentSlide(n){
    contentSlide(contentNum = n);
}

function contentSlide(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        contentNum = 1;
    }

    if (n < 1){
        contentNum = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        
    }

    slides[contentNum - 1].style.display = "block";
    dots[contentNum - 1].className += " active";
}
