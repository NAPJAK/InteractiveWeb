//각 나라에 대한 정보의 array 생성//
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

//하단 인디케이터 및 슬라이드에 대한 변수 생성//
let active = 1;
let nowSlide = 1;

//오른쪽 슬라이드//
next.addEventListener("click", function(){
    //오른쪽 버튼 클릭시 슬라이드와 인디케이터가 바뀜//
    nowSlide = nowSlide + 1;
    active = active + 1;
    //만약 두 변수가 5를 넘어갈 시 1로 초기화//
    if(nowSlide > 5){
        nowSlide = 1;
        active = 1;
    }

    //사전에 생성한 array에 따라, 슬라이드의 배경에 맞는 텍스트 출력//
    expTag.innerHTML = countries[nowSlide - 1].explain;
    nameTag.innerHTML = countries[nowSlide - 1].name;
    //배경이미지의 파일명(bg)과 같도록 변수 지정//
    let background_image = "bg";
    //nowSlide의 값(1~5)에 따라 알맞은 배경이미지로 전환//
    backgrounds.style.backgroundImage =`url('${background_image}${nowSlide}.png')`;
    //중앙 지도 이미지//
    maps.src = "country" + nowSlide + ".png";
    //하단 인디케이터 초기화 함수 실행//    
    reloadSlider();
    //애니메이션 초기화 함수 실행//
    resetAnimation();
    console.log(nowSlide);
    console.log(active);
})

//왼쪽 슬라이드, 구현 방식은 오른쪽 슬라이드 때와 같습니다.//
prev.addEventListener("click", function(){

    nowSlide = nowSlide - 1;
    active = active - 1;
    //nowSlide가 0보다 작거나 같을경우 슬라이드 및 인디케이터 초기화//
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

//하단 인디케이터 초기화 함수//
function reloadSlider(){
    //active값이 변경될 시 바로 전 단계에 있던 점에 할당되어있던 active 속성 삭제//
    dots.forEach(dot =>{
        dot.classList.remove("active");
    })
    //현재 active값에 해당하는 점에게 active 속성 할당//
    let activeDot = document.querySelector(`.slides .dots li:nth-child(${active})`);
    activeDot.classList.add('active');
}

//애니메이션 초기화 함수//
function resetAnimation(){
    //애니메이션이 적용된 요소들 지정//
    const target1 = expTag;
    const target2 = maps;
    const target3 = nameTag;

    console.log(target1);
    
    //offsetWidth값을 계산함으로써 reveal 애니메이션을 강제로 업데이트, 이때 offsetWidth값은 필요없으므로 void로 제거//
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