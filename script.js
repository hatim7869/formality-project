
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});



function circle() {
    document.querySelectorAll(".slides").forEach(function (slide) {
        slide.addEventListener("mousemove", function (dets) {
            var dim = slide.getBoundingClientRect();
            this.children[1].style.clipPath = ` circle(15% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`

        })
        slide.addEventListener("mouseleave", function (dets) {
            var dim = slide.getBoundingClientRect();
            this.children[1].style.clipPath = ` circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`

        })

    })
}

circle();


function skewMaker() {
    var dim = document.querySelector(".slides").getBoundingClientRect();
    prev = dim.left;
    document.querySelector("#slider").addEventListener("scroll", function () {
        var dim2 = document.querySelector(".slides").getBoundingClientRect();
        var diff = prev - dim2.left
        document.querySelectorAll(".slides").forEach(function (elem) {
            elem.style.transform = `skewX(${diff * .3}deg)`
        })
        prev = dim2.left
    })
}

skewMaker();


