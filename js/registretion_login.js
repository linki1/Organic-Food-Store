let styliter = 0;
const userSavelogin = localStorage.getItem('userSavelogin');
const userSavePassword= localStorage.getItem('userSavePassword');

getData('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user')
  .then(data => {
    const userLogin = document.querySelector("#fakeelem1");
    const subinputuser= document.querySelector("#subinputuser");
    const subinputps= document.querySelector("#subinputps");
    const subinputpswcon= document.querySelector("#subinputpswcon");
    const userpasword= document.querySelector("#fakeelem2");
    const userconfirmpasword= document.querySelector("#fakeelem3")?document.querySelector("#fakeelem3"):null;
    const sendbtn =document.querySelector("#fakebtn");
    sendbtn.disabled =true;
    if(userconfirmpasword){
          onCheng(userLogin,'input',()=>{
              for (const elem of data) {
              if(elem.name==userLogin.value){
                sendbtn.disabled =true;
                subinputuser.style.display = 'block';
                return
              }
              else{
                sendbtn.disabled =false;
                  subinputuser.style.display = 'none';
              
              }
            }
            
          })
          sendbtn.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log(checkProperty(userconfirmpasword,userpasword))
            if(!checkProperty(userconfirmpasword,userpasword)){
              subinputpswcon.style.display = 'block';
              subinputps.style.display = 'block';
              setTimeout(() => {
                subinputpswcon.style.display = 'none';
              subinputps.style.display = 'none';
              }, 3000);
              return
            }
            else if(!userLogin.value.trim()|| !userpasword.value.trim()||!userconfirmpasword.value.trim()){
              showWarningEmptyelements([userLogin,userpasword,userconfirmpasword]);
              return
            }
            else{
             console.log(userLogin.value,userpasword.value,userconfirmpasword.value);
             userLogin.value='',userpasword.value='',userconfirmpasword.value=''
            }
          })
    }else{

    }
    
})

function showWarningEmptyelements(elements) {
  let arr  = [];
  elements.map((elem)=>{
    if(!elem.value.trim()){
      elem.style.color ='red';
      elem.value = 'empty field';
      arr.push(elem)
    }
  })
  setTimeout(() => {
     arr.map((elem)=>{
    if(elem.value.trim()){
      elem.style.color ='black';
      elem.value = '';
    }
  })
  }, 4000);
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
    });
    });
    
}

function createdata(url,body){
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
}

function Createnode(elem) {
 const element= document.createElement(elem);
if(elem == 'button'){
  element.id = `fakebtn`; 
}else{
  element.id = `fakeelem${++styliter}`; 
}
document.body.appendChild(element);   
return true
}


function onCheng(elem,status,f){
  console.log('worck')
  if(Array.isArray(elem)){
    elem.map((e)=>{
      e.addEventListener(status,f)
    })
  }
  else{
    elem.addEventListener(status,f);
  }
  
}

function checkProperty (wrotestuf,checkstuf) {
  if(typeof(wrotestuf)==String){
      wrotestuf.value = wrotestuf.value.trim();
  }
  else if(typeof(checkstuf)==String){
      checkstuf.value = checkstuf.value.trim();
  }
  if(wrotestuf.value == checkstuf.value){
    return true;
  }
  else{
    return false;
  }
}






