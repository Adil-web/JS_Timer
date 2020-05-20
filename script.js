function Q(e){
  return document.querySelector(e)
}

const html_timer = Q(".html_timer");
const seconds = Q(".seconds");
const plusbtn = Q("#increase");
const minusbtn = Q("#decrease");
const startbtn = Q("#start");
const inputbtn = Q("#input");
const message = Q("#message");
const inputnum = Q("#input_num");
const inputMin = Q("#min");
const inputSec = Q("#sec");
const okbtn = Q("#ok");

//  FLag для того чтобы таймер не запускался подряд если много раз нажать на кнопку старт 
let flag = false;
let countMin = 0;
let countSec = 0;

const updateTimer = () =>{
  html_timer.innerHTML = (0 + String(countMin)).slice(-2) + ":" + (0 + String(countSec)).slice(-2);
}
updateTimer();
const countdown = () => {
  let total = countSec + countMin * 60;
  flag = true;
  const timeinterval = setTimeout(countdown, 1000);
  if (total <= 0){
    clearInterval(timeinterval);
    Q("#timer").style.display = 'none';
    inputnum.style.display = 'none';
    message.innerHTML = 'Successfully Completed!';
  }
  if (countSec > 0) countSec--;
  else {
    countSec = 59;
    countMin--;
  }
  updateTimer();
}

plusbtn.onclick = () => {
  if (countSec < 59) countSec++;
  else {
    countSec = 0;
    ++countMin;
  }
  updateTimer();
}

minusbtn.onclick = () => {
  if (countMin <= 0 && countSec===0){
    countSec = 0;
    countMin = 0;
    return;
  }
  if (countSec > 0) --countSec;
  else {
    countSec = 59;
    --countMin;
  }
  updateTimer();
}

startbtn.onclick = () => {
  if (flag == false) {
  countdown();
  }
}

inputbtn.onclick = () => {
  inputnum.style.display = 'flex';
}

okbtn.onclick = () => {
  if (inputMin.value <= 60 && inputSec.value <= 60){
    if (flag == false) {
      countMin = inputMin.value;
      countSec = inputSec.value;
    countdown();
    }
  }
    else alert("Введите число от 0-59");
}