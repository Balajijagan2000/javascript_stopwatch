//Initials
const stopwatch = document.querySelector('.stop-watch')
let seconds = 0;
let interval = null;
//Buttons
const btn_start = document.querySelector('#start')
const btn_stop = document.querySelector('#stop')
const btn_reset = document.querySelector('#reset')

const start_timer = () => {
    if(interval) {
        return;
    }
    interval = setInterval(timer,1000)

}
const stop_timer = () => {
    clearInterval(interval)
    interval = null
}
const reset_timer = ()=> {
    
    stop()
    seconds = 0;
    stopwatch.innerText = '00:00:00'
}
//Event Listeners
btn_start.addEventListener('click',start_timer)
btn_stop.addEventListener('click',stop_timer)
btn_reset.addEventListener('click',reset_timer)

//
const timer = () => {
    ++seconds;

    //calculation

    //seconds modulo 60 will give seconds in the format of 0-60
    let sec = seconds % 60;
    //Dividing total seconds by 3600 will give total hours with partial hours
    let hrs = Math.floor(seconds / 3600);
    //Multiplying partial hours with 60 will give no of minutes
    let mins = Math.floor( ((seconds / 3600) - hrs) * 60 )
  

    
    
    stopwatch.innerText = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`




}



