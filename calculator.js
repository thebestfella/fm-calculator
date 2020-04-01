let num = 0
let helpNum = 0
let operation = 0; 

function updateOutput(){
    document.getElementById("output").innerHTML = num.toString()
}

function clickCancel(){
    num = 0
    helpNum = 0
    operation = 0
    updateOutput()
}
function clickBack(){
    num = num / 10
    num = Math.floor (num)
    updateOutput()
}
function clickMul(){
    helpNum = num
    num = 0
    operation = 3
}
function clickDiv(){
    helpNum = num
    num = 0
    operation = 4
}
function clickAdd(){
    helpNum = num
    num = 0
    operation = 1
}
function clickSub(){
    helpNum = num
    num = 0
    operation = 2
}
function clickEqu(){
    switch(operation) {
        case 1:
            num = num + helpNum
          // code block
          break;
        case 2:
            num = helpNum - num
          // code block
          break;
        case 3:
            num = helpNum * num
            // code block
            break;
        case 4:
            num = helpNum / num
            num = Math.floor (num)
            // code block
            break;
        default:
          // code block
    }
    helpNum = 0
    operation = 0
    updateOutput()
}

function click1(){
    num = num * 10 + 1
    updateOutput()
}
function click2(){
    num = num * 10 + 2
    updateOutput()
}
function click3(){
    num = num * 10 + 3
    updateOutput()
}
function click4(){
    num = num * 10 + 4
    updateOutput()
}
function click5(){
    num = num * 10 + 5
    updateOutput()
}
function click6(){
    num = num * 10 + 6
    updateOutput()
}
function click7(){
    num = num * 10 + 7
    updateOutput()
}
function click8(){
    num = num * 10 + 8
    updateOutput()
}
function click9(){
    num = num * 10 + 9
    updateOutput()
}
function click0(){
    num = num * 10
    updateOutput()
}