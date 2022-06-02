
const dDayToXmas = ()=>{
    const h1Selector = document.querySelector("h1");
    const h3Selector = document.querySelector("h3");

//타겟 날짜 설정하기
    const target = new Date("2022-12-25T13:00:00");
    const targetYear = target.getFullYear();
    const targetMonth = target.getMonth()+1;
    const targetDays = target.getDate();

//현재 날짜 가져오기
    const nowDate = new Date();
    const differ = target.getTime() - nowDate.getTime();

    //남은날짜 계산
    const day = Math.floor(differ/(1000*60*60*24));
    const hours = Math.floor((differ % (1000*60*60*24))/(1000*60*60));

    h1Selector.innerText = "웹 프로그래밍 과제 3"
    h3Selector.innerText = `${targetYear}년${targetMonth}월${targetDays}일까지 D-Day: ${day}일${hours}시간`;
}

const timer = () =>{
    dDayToXmas();
    setInterval(dDayToXmas, 300000);
}
timer();

