

// var musiccount=1
// if(musiccount%2!=0){
// window.addEventListener('click',()=>{
//     document.getElementById('mp3').play()
// })
// }
// else{
// window.addEventListener('click',()=>{
//     document.getElementById('mp3').pause()
// })
// }
 

function alarm(){
   let a= prompt("Enter your name");
   document.getElementById("name1").innerHTML=a;
   let d=prompt("Enter your name");
   document.getElementById("name2").innerHTML=d;
}
// function alarm2(){
//    let d=prompt("Enter your name");
//    document.getElementById("name2").innerHTML=d;
// }
// alarm();
// alarm2();

let arr=[]
let n=0;
let user2=0;
let user1=0;
var count=1
let i=0;
function data(boxnumber)
{
    // console.log(boxnumber.id)
        if(count<=9 && !arr.includes(boxnumber.id))
        {
            if(count%2!=0 && !arr.includes(boxnumber.id))
            {
                // if(!arr.includes(boxnumber.id))
                document.getElementById(boxnumber.id).innerHTML="x"
                arr.push(boxnumber.id); 
                console.log(count);  
            }
            else if(count%2==0 && !arr.includes(boxnumber.id)){
                // arr.push(boxnumber.id);
                document.getElementById(boxnumber.id).innerHTML="o"
                arr.push(boxnumber.id); 
                console.log(count)
            }
            
            if(evalute())
            {
                
                if(count%2==0)
                {
                    user2=user2+1;
                    document.getElementById("user2result").innerHTML=user2;
                    check();
                }
                else if(count%2!=0)
                {
                    user1=user1+1;
                    document.getElementById("user1result").innerHTML=user1;
                    check();
                }
                
                count=0
                arr.fill(0);
                // console.log(count)
            }
        count++
        }
    if(count==10){
        document.getElementById("matchdraw").innerHTML="match draw"
        count=1;
        arr.fill(0);
        for(let i=1;i<10;i++)
        {
            document.getElementById("box"+i).innerHTML=""
        }
        // console.log(count)   
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
function getdata(div1)
{
    return document.getElementById(div1).innerHTML;
}
function reset()
{
    count=1;
    arr.fill(0)
    for(let i=1;i<10;i++)
    {
        document.getElementById("box"+i).innerHTML=""
    }
    document.getElementById("matchdraw").innerHTML=""

    document.getElementById("user2result").innerHTML=0;
    document.getElementById("user1result").innerHTML=0
    document.getElementById("name1").innerHTML="USER 1"
    document.getElementById("name2").innerHTML="USER 2"

}

function check()
{
    for(let i=1;i<10;i++)
    {
        document.getElementById("box"+i).innerHTML=""
    }
}