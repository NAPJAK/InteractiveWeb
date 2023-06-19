const countries = [
    {
        explain: "눈을 뗄 수 없을 만큼 아름다운 문화와 자연",
        name: "스위스"  
    },
    {
        explain: "고대 로마와 르네상스가 살아 숨쉬는 곳",
        name: "이탈리아"  
    },
    {
        explain: "하늘을 수놓는 형광빛 오로라",
        name: "핀란드"  
    },
    {
        explain: "고대 문명의 유산이 잠들어있는 신화의 나라",
        name: "그리스"  
    },
    {
        explain: "문화 예술이 숨쉬는 자유, 평등, 박애의 나라",
        name: "프랑스"  
    }
]

//배경//
const backgrounds = document.getElementById("main");

//나라 이미지//
const maps = document.querySelector(".slides .center .contents img");
//텍스트//
const expTag = document.querySelector(".slides .center .explain")
const nameTag = document.querySelector(".slides .center h2")

//하단 인디케이터//
const dots = document.querySelectorAll('.slides .dots li');

//슬라이드 버튼//
const next = document.querySelector('.right-button')
const prev = document.querySelector('.left-button')

let active = 1;
let nowSlide = 1;

//오른쪽 슬라이드//
next.addEventListener("click", function(){

    nowSlide = nowSlide + 1;
    active = active + 1;

    if(nowSlide > 5){
        nowSlide = 1;
        active = 1;
    }

    expTag.innerHTML = countries[nowSlide - 1].explain;
    nameTag.innerHTML = countries[nowSlide - 1].name;

    let background_image = "bg";

    backgrounds.style.backgroundImage =`url('${background_image}${nowSlide}.png')`;

    maps.src = "country" + nowSlide + ".png";

    reloadSlider();
    resetAnimation();
    console.log(nowSlide);
    console.log(active);
})

//왼쪽 슬라이드//
prev.addEventListener("click", function(){

    nowSlide = nowSlide - 1;
    active = active - 1;

    if(nowSlide <= 0){
        nowSlide = 5;
        active = 5;
    }

    expTag.innerHTML = countries[nowSlide - 1].explain;
    nameTag.innerHTML = countries[nowSlide - 1].name;

    

    let background_image = "bg";

    backgrounds.style.backgroundImage = `url('${background_image}${nowSlide}.png')`;

    maps.src = "country" + nowSlide + ".png";

    reloadSlider();
    resetAnimation();
    console.log(nowSlide);
    console.log(active);
}); 

function reloadSlider(){

    dots.forEach(dot =>{
        dot.classList.remove("active");
    })

    let activeDot = document.querySelector(`.slides .dots li:nth-child(${active})`);
    activeDot.classList.add('active');
}


function resetAnimation(){
    const target1 = expTag;
    const target2 = maps;
    const target3 = nameTag;

    console.log(target1);
    
    target1.classList.remove("reveal1");
    void target1.offsetWidth;
    target1.classList.add("reveal1");

    target2.classList.remove("reveal2");
    void target2.offsetWidth;
    target2.classList.add("reveal2");

    target3.classList.remove("reveal3");
    void target3.offsetWidth;
    target3.classList.add("reveal3");
}