const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i")

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scroll width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}


//if you didn't understand if/else ternary 
//you can write like this too. Both do same
/* if(carousel.scrollLeft == 0) {
    arrowIcons[0].style.display = "none";
}else{
    arrowIcons[0].style.display = "block";
} */

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImageWidth = firstImg.clientWidth + 14;// getting first img width & adding 14 margin value
        carousel.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
})

const autoSlide = () => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;


    positionDiff = Math.abs(positionDiff); //making positiondiff value to positive
    let firstImageWidth = firstImg.clientWidth + 14;
    let valueDifference = firstImageWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImageWidth / 3 ? valueDifference : -positionDiff;
    }
    return carousel.scrollLeft -= positionDiff > firstImageWidth / 3 ? valueDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;  
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}


const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging"); 

    if(!isDragging) return;
    isDragging = false;
    // auto slide images
    autoSlide();
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);