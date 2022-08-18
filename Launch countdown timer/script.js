let deadline = "2022-07-03";

function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor( t / (24 * 60 * 60 * 1000)),
        hours = Math.floor( (t / (1000 * 60 * 60)) % 24 ),
        minutes = Math.floor( (t / 1000 / 60) % 60 ),
        seconds = Math.floor( (t / 1000) % 60 );

    if(t < 0){
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(endtime, parentSelector){
    let timer = document.querySelector(parentSelector),
        days = timer.querySelector('.days__display'),
        hours = timer.querySelector('.hours__display'),
        minutes = timer.querySelector('.minutes__display'),
        seconds = timer.querySelector('.seconds__display');

    let timerId = setInterval(updateClock, 1000);
    updateClock();

    function updateClock(){
        let time = getTimeRemaining(endtime);

        days.innerHTML = getZero(time.days);
        hours.innerHTML = getZero(time.hours);
        minutes.innerHTML = getZero(time.minutes);
        seconds.innerHTML = getZero(time.seconds);

        if(time.total < 0){
            clearInterval(timerId);
        }
    }
}

function getZero(num){
    if(num >= 0 && num < 10){
        return '0' + num;
    }else{
        return num;
    }
}
setClock(deadline, '.timer__wrapper');
setClock("2022-07-07", '.timer__content');

console.log(Math.PI);