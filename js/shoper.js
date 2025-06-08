const btnarrserch = document.querySelectorAll('.header-navigation__button');
const btnarr = document.querySelectorAll('.colection-product__button');
let oils = JSON.parse(localStorage.getItem('basket')) || {};

for (const element of btnarr) {
    element.addEventListener('click',()=>{
        let name =  element.parentNode.ariaLabel;
        oils = JSON.parse(localStorage.getItem('basket'))?JSON.parse(localStorage.getItem('basket')):{};
        filoilObj([btnarr,btnarrserch]);
        changeValueOil(name);
        
    })
}
for (const element of btnarrserch) {
    element.addEventListener('click',()=>{
        let name =  element.parentNode.ariaLabel;
        oils = JSON.parse(localStorage.getItem('basket'))?JSON.parse(localStorage.getItem('basket')):{};
        filoilObj([btnarr,btnarrserch]);
        changeValueOil(name);
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
