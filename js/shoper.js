const btnarrserch = document.querySelectorAll('.header-navigation__button');
const btnarr = document.querySelectorAll('.colection-product__button');
let oils = JSON.parse(localStorage.getItem('basket')) || {};
let animated = false;
for (const element of btnarr) {
    element.addEventListener('click',()=>{
        let name =  element.parentNode.ariaLabel;
        oils = JSON.parse(localStorage.getItem('basket'))?JSON.parse(localStorage.getItem('basket')):{};
        filoilObj([btnarr,btnarrserch]);
        changeValueOil(name);
        element.parentElement.style.setProperty('--border-anim', 'borderFlow 3s linear infinite');
        if(!animated){
            animated = true;
          setTimeout(() => {
            element.parentElement.style.setProperty('--border-anim', '');
            animated = false;
        }, 3000);  
        }
        
    })
}
for (const element of btnarrserch) {
    element.addEventListener('click',()=>{
        const beforshopitm = element.parentElement;
        let name =  element.parentNode.ariaLabel;
        oils = JSON.parse(localStorage.getItem('basket'))?JSON.parse(localStorage.getItem('basket')):{};
        filoilObj([btnarr,btnarrserch]);
        console.log(beforshopitm)
        changeValueOil(name);
        element.parentElement.style.setProperty('--border-anim', 'borderFlow 3s linear infinite');
        if(!animated){
            animated = true;
          setTimeout(() => {
            element.parentElement.style.setProperty('--border-anim', '');
            animated = false;
        }, 3000);  
        }
    })
}

function filoilObj(elem) {
    // console.log(elem)
    elem.map((arr)=>{
        for (const elem of arr) {
            if(oils[`${elem.parentNode.ariaLabel}`] != undefined ){
                continue
            }
            else{

        oils[`${elem.parentNode.ariaLabel}`]=0;
        // console.log(oils);
     }
}
    })
    return true
}

function changeValueOil(name) {
    for (const key in oils) {
        console.log(key,key == name)
     if(key == name){    
       oils[key] += 1;
       if(localStorage.getItem('basket'))localStorage.removeItem('basket');
        localStorage.setItem('basket',JSON.stringify(oils))
        console.log(localStorage.getItem('basket'))
     }
    }
}
