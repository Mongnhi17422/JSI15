let clear;
let getValue = function getValue(){
    let minute = document.getElementById('minute').value;
    let second = document.getElementById('second').value;
    second++;
    if (second==60){
        minute = minute + 1 && second == 0 
    }
    document.getElementById('minute').value = minute;
    document.getElementById('second').value = second;

}
function start(){
    clear = setInterval(getValue,1);

}
function stop (){
    clearInterval(clear);
}