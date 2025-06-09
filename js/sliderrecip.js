const butonright = document.querySelector("#left");
const butonleft  = document.querySelector("#right");
const movewrap = document.querySelector('#movediv');
let movecount = 0;
movewrap.style.transform= `translateY(${movecount}px)`;
butonright.addEventListener("click",()=>{
    if(movecount > 0){
        console.log(movecount+">");
        movecount -=775;
        movewrap.style.transform= `translateY(${-movecount}px)`;
    }
    else{
      movewrap.style.transition = '0.3s';
        movewrap.style.transform= `translateX(50px)`;
    setTimeout(() => {
        movewrap.style.transform= `translateX(-50px)`; 
      }, 300);
      
      setTimeout(() => {
        movewrap.style.transition = '1s';
        movewrap.style.transform= `translateX(0px)`;
      }, 600);
      
    }
})
butonleft.addEventListener("click",()=>{
    if(movecount < 1500){
        movecount +=775;
        movewrap.style.transform= `translateY(${-movecount}px)`;
    }
    else{
        movewrap.style.transition = '0.3s';
        movewrap.style.transform= `translateX(50px) translateY(${-movecount}px)`;
    setTimeout(() => {
        movewrap.style.transform= `translateX(-50px) translateY(${-movecount}px)`; 
      }, 300);
      
      
      
    setTimeout(() => {
        movewrap.style.transition = '1s';
        movewrap.style.transform= `translateX(0px) translateY(${-movecount}px)`;
      }, 600);
    }
})