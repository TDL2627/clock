function currentTime(){
    let time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    let acttime = hours + ":" +mins +":"+sec;
    document.getElementById("clock").innerText = acttime;
    let t = setTimeout(function(){
        currentTime();
    },1000);
}
currentTime();
function timing(){
    let time = new Date();
    let hours = time.getHours();

    if(hours >=0 && hours<12){
        document.getElementById("outro").innerText="Good Morning";
        document.getElementById("outro").style.backgroundColor="yellow";
        document.getElementById("pic1").style.display="initial";

    }
    else if(hours >=12 && hours<=18){
        document.getElementById("outro").innerText="Good Afternoon";
        document.getElementById("outro").style.backgroundColor="orange";
        document.getElementById("pic2").style.display="initial";
        document.getElementById("pic2").style.backgroundColor="orange";
    }
    else{
       document.getElementById("outro").innerText= "Good evening";
       document.getElementById("outro").style.backgroundColor="black";

    }
}
timing();