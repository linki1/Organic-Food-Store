const serchitm  =  document.querySelector("#serch1");
const serchform = document.querySelector(".header-navigation__serch");
const findbtn = document.querySelector('#find');
const bigtext = document.querySelector('.header-navigation__big-text');
const wrapserch = document.querySelector(".header-navigation_wraper-serch");
const serchinput = document.querySelector(".header-navigation__input");
const serchOils = document.querySelectorAll(".header-navigation__shopbox");
const userLogin = localStorage.getItem('userSaveLogin');
const userLogo = document.querySelector('.header-navigation_user-logo');
const loginbtn = document.querySelector('.header-navigation_button');
const userName = document.querySelector('.header-navigation_user-name');
const basketlogo = document.querySelector('#bascket');
const closebtns = document.querySelectorAll('.header-navigation__close-element');
const counttexts = document.querySelectorAll('.header-navigation__count-element');
const buybutton = document.querySelector('.header-navigation__buy-button');

closebtns.forEach((itm) => {
  itm.addEventListener('click', () => {
    let basketOils = JSON.parse(localStorage.getItem('basket')) || {};
    const oilName = itm.parentNode.getAttribute("aria-label");

    if (basketOils[oilName] !== undefined) {
      basketOils[oilName] -= 1;

      if (basketOils[oilName] <= 0) {
        itm.parentElement.style.display = 'none';
      } else {
        const countElem = itm.nextElementSibling;
        if (countElem) {
          countElem.textContent = `count: ${basketOils[oilName]}`;
        }
      }

      localStorage.setItem('basket', JSON.stringify(basketOils));
    }
  });
});


basketlogo.addEventListener('click', () => {
  const basketOils = JSON.parse(localStorage.getItem('basket')) || {};
  console.log(basketOils);

  buybutton.style.display = 'block'; 

  counttexts.forEach((itm) => {
    itm.style.display = 'block';
    const label = itm.parentNode.getAttribute("aria-label");
    if (basketOils[label] !== undefined) {
      itm.textContent = `count: ${basketOils[label]}`;
    }
  });

  closebtns.forEach((itm) => {
    itm.style.display = 'block';
  });

  bigtext.style.display = 'block';
  serchform.style.display = "flex";
  serchform.style.zIndex = '100';
  wrapserch.style.zIndex = '10';
  serchinput.style.display = 'none';
  findbtn.style.display = 'none';

  for (const key in basketOils) {
    for (const elem of serchOils) {
      if (key === elem.getAttribute("aria-label") && basketOils[key] > 0) {
        elem.style.display = 'flex';
        if (elem.children[3]) {
          elem.children[3].style.display = 'none';
        }
      }
    }
  }
});
serchitm.addEventListener("click", () => {
   bigtext.style.display = 'none'
  serchform.style.display = "flex";
  serchform.style.zIndex = '100';
  wrapserch.style.zIndex = '10';
});

wrapserch.addEventListener("click", () => {
  serchform.style.display = "none";
  serchform.style.zIndex = '1';
  wrapserch.style.zIndex = '-1';
   serchOils.forEach((oil)=>{
      oil.style.display ='none';
      oil.children[3].style.display = 'block';
    })
  bigtext.style.display = 'none'
  closebtns.forEach((itm)=>{
    itm.style.display = 'none';
  })
  counttexts.forEach((itm)=>{
    itm.style.display = 'none';
  })
  serchinput.style.display = 'block';
  findbtn.style.display = 'block';
  buybutton.style.display = 'none';
});

serchinput.addEventListener('input', () => {
  const finder = serchinput.value.trim().toLowerCase();

  serchOils.forEach((oil) => {
    const ariaLabel = (oil.getAttribute("aria-label") || "").toLowerCase();
    const ariaDetails = (oil.getAttribute("aria-details") || "").toLowerCase();

    const matches =
      finder === "" ||
      ariaLabel.includes(finder) ||
      ariaDetails.includes(finder);
    oil.style.display = matches ? "flex" : "none";
    if(oil.style.display == 'flex'){
      console.log("worck");
    }
  });
})

loginbtn.addEventListener('click',()=>{
  window.open('./reg.html',"_self")
})
if(userLogin){
  userLogo.style.display = 'flex';
  loginbtn.style.display = 'none'
  userName.textContent = `${userLogin}`;
}
else{
    userLogo.style.display = 'none';
  loginbtn.style.display = 'block'
}

buybutton.addEventListener('click',()=>{
  let id= 0;
  console.log(localStorage.getItem('basket'))
  if(localStorage.getItem('userSaveLogin')){
     fetch("https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user",{method:"GET"})
  .then(response=>response.json())
  .then(data=>{
            for (const element of data) {
              console.log(element)
              if(element.name==localStorage.getItem('userSaveLogin')){
                id = element.id;
              }
            };
            if(id!=0){
              fetch(`https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user/${id}`,{method:"PATCH",
              headers:{
              'Content-type':'application/json'
            },
            body:JSON.stringify({
            basket:localStorage.getItem('basket'),
            })
              }).then(()=>{
                window.open('./shop.html','_self')
              })
            }
            else{
              window.open('./shop.html','_self')
            }
          })
  }
  else{
    window.open('./shop.html','_self')
  }
 
})

