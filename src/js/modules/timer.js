
import {addZero} from '../services/services';

function timer(deadline) {

    function calcTimeLeft(deadline) {
        const timeLeft = Date.parse(deadline) - Date.now();
            return {
                time: timeLeft,
                days: addZero((timeLeft/1000/60/60/24).toFixed()),
                hours: addZero(((timeLeft/1000/60/60)%24).toFixed()),
                minutes: addZero(((timeLeft/1000/60)%60).toFixed()),
                seconds: addZero(((timeLeft/1000)%60).toFixed()),
            };
    }
    function setTimeLeft(deadline) {
        const days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),  
              minutes = document.querySelector('#minutes'), 
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(reloadTimeLeft, 1000);
        let  timeLeftObj;
               
        reloadTimeLeft();
        function reloadTimeLeft() {
           
            timeLeftObj = calcTimeLeft(deadline);
            if(timeLeftObj.time > 0){
                days.textContent = timeLeftObj.days;
                hours.textContent = timeLeftObj.hours;
                minutes.textContent = timeLeftObj.minutes;
                seconds.textContent = timeLeftObj.seconds;
            } else {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }
        
                
    }
    setTimeLeft(deadline);
}


export default timer;