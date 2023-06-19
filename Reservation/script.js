//인풋 기입 시 버튼 활성화 구현//

//조회 버튼과 기본 필터 인풋들을 getElementsByClassName로 지정, 이때 getElementsByClassName는 
//해당 클래스명을 가진 요소를 배열로 반환하기 때문에 요소가 하나더라도 끝에 배열의 첫번째 요소[0]를 붙여야 함.
const button = document.getElementsByClassName("search")[0];
const inputLocation = document.getElementsByClassName("input_2")[0];
const inputPeople = document.getElementsByClassName("input_3")[0];
const inputDate1 = document.getElementsByClassName("input_4")[0];
const inputDate2 = document.getElementsByClassName("input_5")[0];

//키보드를 눌렀다 뗐을 때 함수(valid)를 출력
inputLocation.addEventListener("keyup", valid);
inputPeople.addEventListener("keyup", valid);
inputDate1.addEventListener("keyup", valid);
inputDate2.addEventListener("keyup", valid);

//valid함수//
function valid(){
    //나라, 인원, 출국일, 귀국일 인풋이 모두 작성되었을 때, 즉 value값이 있을 때 조회 버튼을 활성화//
    if (!(inputLocation.value && inputPeople.value && inputDate1.value && inputDate2.value)){
        button.disabled = true;
    } else {
        button.disabled = false;
        button.style.cursor = "pointer";
    }

    //비활성화, 활성화 상태를 알 수 있도록 배경색 변경//
    if (!(inputLocation.value && inputPeople.value && inputDate1.value && inputDate2.value)){
        button.classList.remove("buttonDisabled");
    } else {
        button.classList.add("buttonDisabled");
    }
}

//고급 필터 버튼(희망 항공사) 클릭//
//각 여행사 버튼 지정//
const airlineTag1 = document.querySelector(".airline .airline-1");
const airlineTag2 = document.querySelector(".airline .airline-2");
const airlineTag3 = document.querySelector(".airline .airline-3");

//클릭시 버튼의 배경과 색깔을 바꾸는 함수 작성, 껏다 켰다 할 수 있도록 toggle로 작성//
airlineTag1.addEventListener("click", function(){
    airlineTag1.classList.toggle('clicked');
});

airlineTag2.addEventListener("click", function(){
    airlineTag2.classList.toggle('clicked');
});

airlineTag3.addEventListener("click", function(){
    airlineTag3.classList.toggle('clicked');
});

//고급 필터 버튼(희망 여행사) 클릭//
const tripTag1 = document.querySelector(".trip-1");
const tripTag2 = document.querySelector(".trip-2");
const tripTag3 = document.querySelector(".trip-3");
const tripTag4 = document.querySelector(".trip-4");
const tripTag5 = document.querySelector(".trip-5");
const tripTag6 = document.querySelector(".trip-6");
const tripTag7 = document.querySelector(".trip-7");

tripTag1.addEventListener("click", function(){
    tripTag1.classList.toggle('clicked2');
});

tripTag2.addEventListener("click", function(){
    tripTag2.classList.toggle('clicked2');
});

tripTag3.addEventListener("click", function(){
    tripTag3.classList.toggle('clicked2');
});

tripTag4.addEventListener("click", function(){
    tripTag4.classList.toggle('clicked2');
});

tripTag5.addEventListener("click", function(){
    tripTag5.classList.toggle('clicked2');
});

tripTag6.addEventListener("click", function(){
    tripTag6.classList.toggle('clicked2');
});

tripTag7.addEventListener("click", function(){
    tripTag7.classList.toggle('clicked2');
});

