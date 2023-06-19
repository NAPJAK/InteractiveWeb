

//유튜브 비디오 호버시 정보 div 보여주기 구현//
const videoTag = document.querySelector(".video");
const videoExp = document.querySelector(".section2-text");


videoTag.addEventListener("mouseover", function(){
    videoExp.classList.add('showup');
});

//유로메이트의 강점 4가지(section3) 애니메이션 구현//



document.addEventListener("scroll", function(){
    const ruleTag = document.querySelector(".section3-cont");

    let ruleTop = ruleTag.getBoundingClientRect().top;
    let ruleBottom = ruleTag.getBoundingClientRect().bottom;
    if(ruleTop * 3 < window.scrollY && ruleBottom > 0){
        console.log("안");
        const ruleExp1 = document.querySelector(".rule-1");
        const ruleExp2 = document.querySelector(".rule-2");
        const ruleExp3 = document.querySelector(".rule-3");
        const ruleExp4 = document.querySelector(".rule-4");

        ruleExp1.classList.add('showrules');
        ruleExp2.classList.add('showrules');
        ruleExp3.classList.add('showrules');
        ruleExp4.classList.add('showrules');
    }
})

//슬라이더 구현//
const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const buttons = document.querySelectorAll(".wrapper .slide-btn");

console.log(slider, carousel, images, prev, next);

let imageIndex = 0,
    intervalid;

const autoSlide = () => {
    intervalid = setInterval(() => slideImage(++imageIndex), 2000);
};
autoSlide();

const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    carousel.style.transform = `translate(-${imageIndex*100}%)`;
    console.log(imageIndex);
};

const updateClick = (e) => {

    clearInterval(intervalid);

    imageIndex += e.target.id === "prev" ? -1 : 1;
    slideImage(imageIndex);
    console.log("click");
}

buttons.forEach(button => button.addEventListener("click", updateClick));

slider.addEventListener("mouseover", () => clearInterval(intervalid));
slider.addEventListener("mouseleave", autoSlide);