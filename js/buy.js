const inputs = document.querySelectorAll('.shop-form__input-text');
const products = document.querySelectorAll('.colection-product__shopbox');
const price = document.querySelector('.total-price__item');
const closebtnsitm = document.querySelectorAll('.colection-product__close-element');
const counttextstim = document.querySelectorAll('.colection-product__count-element');
const nohingtxt = document.querySelector('.colection-product__nothing');
const buybtn = document.querySelector('.shop-form__button');
console.log(buybtn);
const userloginname = localStorage.getItem('userSaveLogin')||null;
const userbasket = JSON.parse(localStorage.getItem('basket'))||{};
let allsum = 0;
let show =true;
closebtnsitm.forEach((itm) => {
    console.log(itm);
  itm.addEventListener('click', () => {
    let basketOils = JSON.parse(localStorage.getItem('basket')) || {};
    const oilName = itm.parentNode.getAttribute("aria-label");

    if (basketOils[oilName] !== undefined) {
      basketOils[oilName] -= 1;
     console.log(basketOils[oilName])
      if (basketOils[oilName] <= 0) {
        itm.parentElement.style.display = 'none';
        calcksum(1, itm.parentNode, '-');
      } else {
        const countElem = itm.previousElementSibling;
        if (countElem) {
            calcksum(1, itm.parentNode, '-');
        
          countElem.textContent = `count: ${basketOils[oilName]}`;
        }
      }
     show = false;
      products.forEach(product => {
        if (getComputedStyle(product).display !== 'none') {
          show = true;
        }
      });
      localStorage.setItem('basket', JSON.stringify(basketOils));
          getData('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user').then((data)=>{
            data.forEach((e)=>{
            if(e.name == userloginname){
                console.log(e.id)
                Updatedata(`https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user/${e.id}`,basketOils);
            }
        })
            })
      
    }
    console.log(show)
    if(!show){
    nohingtxt.style.display = 'block';
    }
    else{
     nohingtxt.style.display = 'none';
    }
 

  });
});

if(userloginname){
    getData('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user').then((data)=>{
        data.forEach((e)=>{
            if(e.name == userloginname){
                if (e.basket && Object.keys(e.basket).length > 0) {
                    showallelement(e.basket, products);
                }
            }
        })
    });
} else {
    if (userbasket && Object.keys(userbasket).length > 0) {
        showallelement(userbasket, products);
    }
}
function showallelement(obj,arr){
    allsum = 0;
    let nothing =true;
   for (const element of arr) {
     for (const key in obj) {
      if(element.getAttribute('aria-label')==key&&obj[key]>0){
        element.style.display = 'flex';
        console.log(element);
        console.log(element.querySelector(".colection-product__count-element"))
        element.querySelector(".colection-product__count-element").textContent =`count: ${obj[key]}`
        nothing = false;
        calcksum(obj[key],element,'+');
      }
     }
     console.log(nothing)
   }
   if(!nothing){
    nohingtxt.style.display = 'none';
   }
   else{
    nohingtxt.style.display = 'block';
   }
}
function calcksum(count, element, method) {
    const ariaDetails = element.getAttribute('aria-details');
    const priceStr = ariaDetails.split('/')[1]; 
    const itemPrice = parseFloat(priceStr);    

    if (isNaN(itemPrice)) return; 

    if (method === '+') {
        allsum += itemPrice * count;
    } else if (method === '-') {
        allsum -= itemPrice;
    }
    allsum = Math.round(allsum * 100) / 100;
    price.textContent = allsum.toFixed(2) + ' €';
}

function getData(url) {
        return new Promise((resolve, reject) => {
          fetch(url,{
            method:"get",
          })
          .then(response=>response.json())
          .then(data=>{
            data
            resolve(data);
          })
        .catch(error => reject(error));
        });
        
      }
      
      function Updatedata(url,body){
        console.log(url,JSON.stringify(body))
        fetch(url, {
            
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            basket:body})
        })
        
}

buybtn.addEventListener('click',(e)=>{
    e.preventDefault();
    inputs.forEach((elem)=>{
        
        if(elem.value.trim() == null||elem.value.trim() == undefined||elem.value.trim() == ''){
            let value = elem.value 
            elem.style.transition = '1s'
            elem.style.color = "red";
            elem.style.boxShadow ='inset 1px 1px 10px rgb(248, 76, 76) ';
            elem.value = 'must be filled';
            setTimeout(() => {
                elem.style.color = "";
            elem.style.boxShadow ='';
            elem.value = value;
            }, 3000);
             return
        }
        else if(elem.type == 'tel'){
          console.log(elem.value.slice(1,elem.value.length).length,elem.value.slice(1,elem.value.length).length>=9,elem.value)
            let value = elem.value 
            if(isNaN(+elem.value.slice(1,elem.value.length))){
                  elem.style.transition = '1s'
            elem.style.color = "red";
            elem.style.boxShadow ='inset 1px 1px 10px rgb(248, 76, 76) ';
            elem.value = 'not number';
            setTimeout(() => {
                elem.style.color = "";
            elem.style.boxShadow ='';
            elem.value = value;
            }, 3000);
            return
            }
            else if(!(elem.value[0]=='+')){
              elem.style.transition = '1s'
            elem.style.color = "red";
            elem.style.boxShadow ='inset 1px 1px 10px rgb(248, 76, 76) ';
            elem.value = 'you need +';
            setTimeout(() => {
                elem.style.color = "";
            elem.style.boxShadow ='';
            elem.value = value;
            }, 3000);
             return
            }
            else if(elem.value.slice(1,elem.value.length).length<=9){
              elem.style.transition = '1s'
            elem.style.color = "red";
            elem.style.boxShadow ='inset 1px 1px 10px rgb(248, 76, 76) ';
            elem.value = "you'r phone is short";
            setTimeout(() => {
                elem.style.color = "";
            elem.style.boxShadow ='';
            elem.value = value;
            }, 3000);
             return
            }
            else{
                inputs.forEach((element)=>{element.value ='';})
               localStorage.removeItem('basket');
               products.forEach((elem)=>{
                elem.style.display ='none';
               })
               price.textContent ='0';
               if(userloginname){
                getData('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user').then((data)=>{
            data.forEach((e)=>{
            if(e.name == userloginname){
                console.log(e.id)
                Updatedata(`https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user/${e.id}`,{});
            }
        })
            })
               }
            }
        }
    })
})
