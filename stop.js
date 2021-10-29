
var ss=0,mm=0,hh=0,mss=0;

function run()
{
sss=document.getElementById('sec');
mmm=document.getElementById('min');
hhh=document.getElementById('hr');
mms=document.getElementById('ms');


mss++;

if(mss==100)
{
    ss++;
    mss=0
}

if(ss==60)
{
    mm++;
    ss=0
}

if(mm==60)
{
    hh++;
    mm=0
}

if(hh==12)
{
    hh=0;
}


sss.innerText=set(ss);
mmm.innerText=set(mm);
hhh.innerText=set(hh);
mms.innerText=set(mss);
}

function set(n){
    return ('00' + n).substr(-2)
}


function start(){
    inv=window.setInterval(run,10)
    stff=document.getElementById('st');  //creating variable
    spff=document.getElementById('sp');
    reff=document.getElementById('re')

    stff.disabled=true;
    spff.disabled=false;
    reff.disabled=false;
}

function stop(){
    window.clearInterval(inv)
    stff.disabled=false;   // making button disabled
    spff.disabled=true;
    reff.disabled=false;
}

function reset(){
    ss=0,mm=0,hh=0,mss=0;
    sss.innerText='00';
    mmm.innerText='00';
    hhh.innerText='00';
    mms.innerText='00';

    //making button disabled
    stff.disabled=false;
    spff.disabled=false;
    reff.disabled=true;
}







