let timeSecond = 5;
// change time here
const timeH = document.querySelector('h1');

displayTime(5);
// change display time here
const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond == 0 || timeSecond < 1){
        endCount();
        clearInterval(countDown);
    }
}, 1000);

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
    ${(min < 10) ? '0' : ''}${min}:${(sec < 10) ? '0' : ''}${sec}
    `;
}

function endCount(){
    timeH.innerHTML = 'time out ⌛️';
}
// write message here to show when time out 

// 뭔지 모를 외계어를 쓰니 시간이 움직이기 시작한다.  신기하다