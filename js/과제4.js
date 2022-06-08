//전역으로 사용할 변수들 설정
var action;
var color;
var text;
var position;
var where;

//Modify or Delete를 HTML로부터 받아서 변수화 시켜주는 메서드
const arg1Handler = () => {
    var arg1 = document.getElementById("arg1")
    action = arg1.options[arg1.selectedIndex].value
    var parent = document.getElementById("my_form");
    var remove1 = document.getElementById("to");
    var remove2 = document.getElementById("arg3");
    //delete일 경우 to와 textArea 삭제,요소가 없어져서 생기는 예외처리
    try{
        if (action == "delete") {
            parent.removeChild(remove1);
            parent.removeChild(remove2);
        }
    }catch (e){
        alert("새로고침 후 사용하세요")
    }
}

//Color 방식을 HTML로부터 받아서 변수화 시켜주는 메서드
const arg2Handler = () => {
    var arg2 = document.getElementById("arg2")
    color = arg2.options[arg2.selectedIndex].value
}

//Text를 HTML로 부터 받아서 변수화
const arg3Handler = () => {
    var arg3 = document.getElementById("arg3");
    text = arg3.value;
}

//변경할 위치를 HTML로부터 받아서 변수화
const arg4Handler = () => {
    var arg4 = document.getElementById("arg4")
    position = arg4.options[arg4.selectedIndex].value
}

//Title or Body를 결정해서 변수화 해주는 메서드
const arg5Handler = () => {
    var arg5 = document.getElementById("arg5")
    where = arg5.options[arg5.selectedIndex].value
}

//가장 처음 아무것도 변경하지 않고 'OK' 클릭시 초기값 설정해주는 메서드
function setData() {
    if (action == undefined || color == undefined || position == undefined || where == undefined) {
        action = 'modify';
        color = 'color';
        position = 'first';
        where = 'title';
    }
}

//파라미터로 들어온 요소에 대한 color값 변경
const changeColor = (element,target) => {
    element.style.color = target;
};
//파라미터로 들어온 요소에 대한 BGcolor값 변경
const changeBG = (element,target) => {
    element.style.background = target;
}
//파라미터로 들어온 요소에 대한 텍스트 변경
const changeText = (element, targetText) => {
    element.innerText = targetText
};
//modify에서 요소들을 변경할 때 사용하는 메서드
const setColorAction = (value,element,target) => {
    if (value == "color") {
        changeColor(element, target);
    }else if (value == "bgColor") {
        changeBG(element, target);
    }else if(value == "text"){
        changeText(element, target);
    }
};
//delete에서 요소들을 되돌릴 때 사용하는 메서드
const returnColorByDelete = (value, element) => {
    if (value == "color") {
        changeColor(element,"black");
    }else if (value == "bgColor") {
        changeBG(element, "white");
    }
};

//Action 변수가 modify일 경우 실행되는 메서드
const handleModify = () => {
    //first와 last의 경우 요소하나만 변경해서 querySelector 사용
    if (position == 'first' || position == 'last') {
        var element = document.querySelector("#"+position+"_"+where);
        setColorAction(color,element,text)
    }else if (position == 'all') {//나머지 경우는 querySelectorAll사용
        if (where == 'body') {
            console.log("all-area-body")
            var elements = document.querySelectorAll(".body");
            for (const e of elements) {
                setColorAction(color,e,text)
            }
            return;
        }
        else if (where == 'title') {
            var elements = document.querySelectorAll("h2");
            for (const e of elements) {
                setColorAction(color,e,text)
            }
            return;
        }
    } else {
        var elements = document.querySelectorAll("."+position+"."+where);
        for (const e of elements) {
            setColorAction(color,e,text)
        }
    }
}
//Action 변수가 delete일 경우 실행되는 메서드
const handleDelete = () => {
    if (color == 'text') {
        alert("Delete에서 지원하지 않은 기능입니다.");
        return;
    }
    if (position == 'first' || position == 'last') {
        var element = document.querySelector("#"+position+"_"+where);
        returnColorByDelete(color, element);
    }else if (position == 'all') {
        if (where == 'body') {
            console.log("all-area-body")
            var elements = document.querySelectorAll(".body");
            for (const e of elements) {
                returnColorByDelete(color, e);
            }
            return;
        }
        else if (where == 'title') {
            var elements = document.querySelectorAll("h2");
            for (const e of elements) {
                returnColorByDelete(color, e);
            }
            return;
        }
    } else {
        var elements = document.querySelectorAll("."+position+"."+where);
        for (const e of elements) {
            returnColorByDelete(color, e);
        }
    }

};
//버튼을 클릭할때 마다 실행되는 메서드
//HTML로부터 각각의 변수들의 정보를 받아 변수에 저장시킴
const handleData = () => {
    console.log(
        action+" "+color+" "+position+" "+where
    )
    if (action == 'modify') {
        if (text == undefined) {
            alert("텍스트를 입력해주세요!");
            return;
        }
        handleModify();
        return;
    }else if (action == 'delete') {
        handleDelete();
    }
}
//'OK'버튼에 대한 이벤트 리스너 등록
var button = document.querySelector('#button');
button.addEventListener('click', handleData);

setData()//아무것도 선택하지 않은 경우 초기값 설정