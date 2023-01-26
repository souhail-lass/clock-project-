const clock=()=> {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secDegree = ((seconds/60)*360) +90;  
    document.querySelector('.second-Hand').style.transform = `rotate(${secDegree}deg)`;
    const minDegree = ((mins/60)*360)+((seconds/60)*6)+90;
    document.querySelector('.minut-Hand').style.transform = `rotate(${minDegree}deg)`;
    const hrsDegree = ((hours/12)*360)+((mins/60)*30) + 90;
    document.querySelector('.hour-Hand').style.transform = `rotate(${hrsDegree}deg)`;
}
setInterval(clock, 1000);
clock();


