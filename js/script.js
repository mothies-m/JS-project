const time = document.querySelector(".time"),
    name = document.querySelector(".name"),
    wish = document.querySelector(".wish");
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

function setBgImage(){
    let today = new Date(),
        hour = today.getHours();
    
    if(hour < 12){
        document.body.style.backgroundImage = "url('../image/morning.jpg')";
        wish.textContent = "Good Morning";
    }
    else if(hour < 18){
        document.body.style.backgroundImage = "url('../image/evening.jpg')";
        wish.textContent = "Good Evening";
    }
    else{
        document.body.style.backgroundImage = "url('../image/night.jpg')";
        wish.textContent = "Good Night";
        document.body.style.color = "white";
    }
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

showTime();
setBgImage();
