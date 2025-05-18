const serchitm  =  document.querySelector("#serch1");
const serchform = document.querySelector(".header-navigation__serch");
const wrapserch = document.querySelector(".header-navigation_wraper-serch");
console.log(wrapserch)
serchitm.addEventListener("click", ()=>{
    console.log('dd');
    serchform.style.display="flex";
    serchform.style.zIndex= '100';
    wrapserch.style.zIndex= '10';
     wrapserch.addEventListener("click",()=>{
          serchform.style.display="none";
           serchform.style.zIndex= '1';
    wrapserch.style.zIndex= '-1';
})
  })
  