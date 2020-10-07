const translate = document.querySelectorAll(".translate");

window.addEventListener('scroll', () => {
    //the number of pixels the document is currently scrolled along the vertical axis
    let scroll = window.pageYOffset;


    translate.forEach((element) => {
        //get value of data-speed attr
        let speed = element.dataset.speed;
        //modifies the coordinate of element
        element.style.transform = `translateY(${scroll * speed}px)`;
    });
})
