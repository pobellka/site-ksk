function verify() {
    console.log("a, h, r, m")
    let a = parseInt(elementA.value);
    let h = parseInt(elementH.value);
    let r = parseInt(elementR.value);
    let m = parseInt(elementM.value);
    console.log(a, h, r, m)

    var cube = a*a*a;
    var cylinder = Math.PI*r*r*h;
    var result = "";

    if (cube >= m)
    {
        result = result + "Вода поместится в емкость №1. "
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    }

    else
    {
        result = result + "Вода не поместится в емкость №1. "
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }

    if (cylinder >= m)
    {
        result = result + "Вода поместится в емкость №2. "
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    }

    else
    {
        result = result + "Вода не поместится в емкость №2. "
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }

    if (cylinder >= m && cube >= m)
    {
          result  = result + "Вода поместится в обе емкости. "
          document.getElementById("result").innerText = messageText + result;
          document.getElementsByName('result')[0].value = result;
          check = true;
    }

    else
    {
        result  = result + "Вода не поместится в обе емкости. "
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }

}


function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    }

    else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementM = document.getElementById("m");
elementM.addEventListener('input', verify);

const elementH = document.getElementById("h");
elementH.addEventListener('keyup', verify);

const elementR = document.getElementById("r");
elementR.addEventListener('keyup', verify);

const elementA = document.getElementById("a");
elementA.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);

