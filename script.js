
var count=1
var musiccount=1
if(musiccount%2!=0){
window.addEventListener('click',()=>{
    document.getElementById('mp3').play()
})
}
else{
window.addEventListener('click',()=>{
    document.getElementById('mp3').pause()
})
}


function data(boxnumber)
{ 
    if(count<=9)
    {
        if(count%2!=0)
        {
            document.getElementById(boxnumber.id).innerHTML="X"
        }
        else{
            document.getElementById(boxnumber.id).innerHTML="0"
        }
        count++
        if(evalute())
        {
            document.getElementById("resultt").innerHTML="wow you win";
            count=11
        }
    }
    if(count==10){
        document.getElementById("resultt").innerHTML="match draw"
    }
}
function evalute()
{
    if(getdata("box1")!="" && getdata("box2")!="" && getdata("box3")!="" && getdata("box1")==getdata("box2") && getdata("box2")==getdata("box3"))
    {
        return true;
    }
    if(getdata("box1")!="" && getdata("box4")!="" && getdata("box7")!="" && getdata("box1")==getdata("box4") && getdata("box4")==getdata("box7"))
    {
        return true;
    }
    if(getdata("box1")!="" && getdata("box5")!="" && getdata("box9")!="" && getdata("box1")==getdata("box5") && getdata("box5")==getdata("box9"))
    {
        return true;
    }
    if(getdata("box3")!="" && getdata("box6")!="" && getdata("box9")!="" && getdata("box3")==getdata("box6") && getdata("box6")==getdata("box9"))
    {
        return true;
    }
    if(getdata("box7")!="" && getdata("box8")!="" && getdata("box9")!="" && getdata("box7")==getdata("box8") && getdata("box8")==getdata("box9"))
    {
        return true;
    }
    if(getdata("box3")!="" && getdata("box5")!="" && getdata("box7")!="" && getdata("box3")==getdata("box5") && getdata("box5")==getdata("box7"))
    {
        return true;
    }
    if(getdata("box2")!="" && getdata("box5")!="" && getdata("box8")!="" && getdata("box2")==getdata("box5") && getdata("box5")==getdata("box8"))
    {
        return true;
    }
    if(getdata("box4")!="" && getdata("box5")!="" && getdata("box6")!="" && getdata("box4")==getdata("box5") && getdata("box5")==getdata("box6"))
    {
        return true;
    }
}
function getdata(div)
{
    return document.getElementById(div).innerHTML;
}
function reset()
{
    count=1;
    for(let i=1;i<10;i++)
    {
        document.getElementById("box"+i).innerHTML=""
    }
    document.getElementById("resultt").innerHTML=""
}