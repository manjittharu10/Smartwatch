let sec =0;
let timeid=null;

function stopwatch(){
    sec++;
    let hrs = Math.floor(sec/3600);
    let min = Math.floor((sec%3600)/60);
    let seconds = sec%60;
    if(hrs<10) hrs="0"+hrs;
    if(min<10) min="0"+min;
    if(seconds<10) seconds ="0"+seconds;
    const p =document.getElementById("man");
    p.innerText = `${hrs}:${min}:${seconds}`;
}
document.getElementById("start").addEventListener('click',function(){
    if(timeid===null){
        timeid=setInterval(stopwatch, 1000);
    }
})
document.getElementById("stop").addEventListener('click',function(){
    clearInterval(timeid);
    timeid=null;
})
document.getElementById("reset").addEventListener('click',function(){
    clearInterval(timeid);
    timeid=null;
    sec=0;
    document.getElementById("man").innerText ="00:00:00";
   
})