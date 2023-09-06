const time = document.querySelector(".time"),
    name = document.querySelector(".name"),
    todayFocus = document.querySelector(".todayFocus"),
    focus = document.querySelector(".focus");

function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:<\span>${addZero(min)}<span>:<\span>${addZero(sec)}<span>:<\span> ${amPm}`

    setTimeout(showTime, 1000); 
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

showTime(); 