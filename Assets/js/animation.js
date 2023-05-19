VanillaTilt.init(document.querySelector(".box1"), {
    max: 15,
    speed: 300,
    glare: true
});
VanillaTilt.init(document.querySelector(".box2"), {
    max: 15,
    speed: 300,
    glare: true
});
VanillaTilt.init(document.querySelector(".box3"), {
    max: 15,
    speed: 300,
    glare: true
});



window.addEventListener('scroll', animateOnScroll);

function animateOnScroll() {
    var animatedElements = document.querySelectorAll('.animated-element');

    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('show');
        }
    }
}
