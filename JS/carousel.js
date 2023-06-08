const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, pervScrollLeft, positionDiff;


const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}


arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff); // making positive positionDiff
    let firstImgWidth = firstImg.clientWidth +14;
    let valDifference = firstImgWidth - positionDiff;
    
    if(carousel.scrollLeft > pervScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;        
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    pervScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;  
    isDragging = true;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX ) - prevPageX;
    carousel.scrollLeft = pervScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
