function q(s){
    return(document.querySelector(s));
}
var index=0;
var timer;
var paused=false;
var T=2000;
window.onload=function(){
    slideTo(1);
    index++;
    timer= setInterval(function(){
        if(paused==false){
            slideToNext();
        }
    },T);
};
function slidePause(){
    paused=true;
}
function slideContinue(){
    paused=false;
}
function slideTo(n){
    clearInterval(timer);
    q("div.slider-item.current").classList.remove("current");
    q("#slider"+n).classList.add("current");
    q("div.slider-ctrl-dot.current").classList.remove("current");
    q("#ctrl"+n).classList.add("current");
    timer= setInterval(function(){
        if(paused==false){
            slideToNext();
        }
    },T);
}
function slideToNext(){
    if(index<8){index++;}else{index=1;}
    slideTo(index);
}
function slideToLast(){
    if(index>1){index--;}else{index=4;}
    slideTo(index);
}


function switch_clear(){
    q('#switch-div-1').classList.remove('current');
    q('#switch-div-2').classList.remove('current');
}
function switch_to(n){
    switch_clear();
    q('#switch-div-'+n).classList.add('current');
    if(n==1){
        q("div.switch-div>div.switch-bar").style.transform="translateX(0)";
    }else{
        q("div.switch-div>div.switch-bar").style.transform="translateX(43px)";
    }
}

function item2_switch_to(n){
    q("div.tab-items.current").classList.remove("current");
    q('#tab'+n).classList.add('current');
    q("div.switch-slider").style.transform="translateX("+(n-1)*77+"px)";
}