var text="";
function btn1() {
    debugger;
    var one = document.getElementById("btn1").value;
    text += one;
document.getElementById("txt").value=text;
}
function btn2() {
    debugger;
    var two = document.getElementById("btn2").value;
    text += two;
    document.getElementById("txt").value = text;
}
function btn3() {
    debugger;
    var three = document.getElementById("btn3").value;
    text += three;
    document.getElementById("txt").value = text;
}
function btn4() {
    debugger;
    var four = document.getElementById("btn4").value;
    text += four;
    document.getElementById("txt").value = text;
}
function btn5() {
    debugger;
    var five = document.getElementById("btn5").value;
    text += five;
    document.getElementById("txt").value = text;
}
function btn6() {
    debugger;
    var six = document.getElementById("btn6").value;
    text += six;
    document.getElementById("txt").value = text;
}
function btn7() {
    debugger;
    var seven = document.getElementById("btn7").value;
    text += seven;
    document.getElementById("txt").value = text;
}
function btn8() {
    debugger;
    var eight = document.getElementById("btn8").value;
    text += eight;
    document.getElementById("txt").value = text;
}
function btn9() {
    debugger;
    var nine = document.getElementById("btn9").value;
    text += nine;
    document.getElementById("txt").value = text;
}
function btn0() {
    debugger;
    var zero = document.getElementById("btn0").value;
    text += zero;
    document.getElementById("txt").value = text;
}
function sum() {
    debugger;
    
    //var add = document.getElementById("btn+").value;
    text += "+";
    document.getElementById("txt").value = text;
    document.getElementById("btn.").disabled = false;
}
function sub() {
    debugger;
    text += "-";
    document.getElementById("txt").value = text;
    document.getElementById("btn.").disabled = false;
}
function multi() {
    text += "*";
    document.getElementById("txt").value = text;
    document.getElementById("btn.").disabled = false;

}
function divide() {
    text += "/";
    document.getElementById("txt").value = text;
    document.getElementById("btn.").disabled = false;
}
function dot() {
    debugger;


    text += ".";
    document.getElementById("txt").value = text;
    document.getElementById("btn.").disabled = true;

}
function clear_txt() {
    debugger;
    text = "";
    document.getElementById("txt").value = text;
}
function ans(){
try{
    document.getElementById("txt").value = eval(text);
    text = "";

}
catch (Error) {
    document.getElementById("txt").value = Error;
//return Error;
}
}
function cancel_txt() {
    debugger;
    var len = text.length;
    var newtext = text.substr(0, len - 1);
    text = newtext;
    document.getElementById("txt").value = text;
}