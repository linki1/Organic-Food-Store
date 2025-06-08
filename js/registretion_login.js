const userLogin = document.querySelector("#fakeelem1");
const subinputuser= document.querySelector("#subinputuser");
const subinputps= document.querySelector("#subinputps");
const subinputpswcon= document.querySelector("#subinputpswcon");
const userpasword= document.querySelector("#fakeelem2");
const userconfirmpasword= document.querySelector("#fakeelem3")?document.querySelector("#fakeelem3"):null;
const sendbtn =document.querySelector("#fakebtn");
const riderect = document.querySelector('#riderect');
sendbtn.disabled =true;
riderect?riderect.style.visibility ='hidden':null;

getData('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user')
  .then(data => {

   
    if(userconfirmpasword){
          onCheng(userLogin,'input',()=>{
              for (const elem of data) {
              if(elem.name==userLogin.value){
                sendbtn.disabled =true;
                subinputuser.style.display = 'block';
                riderect.style.visibility ='visible';
                return
              }
              else{
                sendbtn.disabled =false;
                  subinputuser.style.display = 'none';
                 riderect.style.visibility ='hidden';
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
             if(localStorage.getItem('userSaveLogin')){
               localStorage.removeItem('userSaveLogin');
              }
              else if(localStorage.getItem('serSavePasword')){
                localStorage.removeItem('userSavePasword');
              }
              localStorage.setItem('userSaveLogin',userLogin.value);
              localStorage.setItem('userSavePasword',userpasword.value);
              createdata('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user',{name:userLogin.value,Pasword:userpasword.value,basket:JSON.stringify({})})
              userLogin.value='',userpasword.value='',userconfirmpasword.value='';
              return
            }
          })
        }else{
          sendbtn.disabled =false;
          sendbtn.addEventListener('click',(e)=>{
            e.preventDefault();
            if(!userLogin.value.trim()|| !userpasword.value.trim()){
              console.log('12')
              showWarningEmptyelements([userLogin,userpasword]);
              return
            }
            else if(!checkProperty(data,userLogin.value,'name')||!checkProperty(data,userpasword.value,'Pasword')){
              subinputps.textContent = 'login or password not find';
              subinputuser.textContent ='login or password not find';
              subinputuser.style.display = 'block';
              subinputps.style.display = 'block';
              setTimeout(() => {
                subinputuser.style.display = 'none';
              subinputps.style.display = 'none';
                 subinputps.textContent = 'password not equal';
              subinputuser.textContent ='this login is taken! If it your you can login';
              }, 3000);
              return
            }
            else{
              if(localStorage.getItem('userSaveLogin')){
                localStorage.removeItem('userSaveLogin');
              }
              else if(localStorage.getItem('serSavePasword')){
                localStorage.removeItem('userSavePasword');
              }
              localStorage.setItem('userSaveLogin',userLogin.value);
              localStorage.setItem('userSavePasword',userpasword.value);
              userLogin.value='',userpasword.value='';
              location.reload();
              return
            }
            
          })
        }
}).catch((error) => {
  console.error('Fetch error:', error);
  alert(`Sorry, we have an error: ${error.message}`);
});

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
          })
        .catch(error => reject(error));
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
        .then(()=>location.reload())
        
}



function onCheng(elem,status,f){
  if(Array.isArray(elem)){
    elem.map((e)=>{
      e.addEventListener(status,f)
    })
  }
  else{
    elem.addEventListener(status,f);
  }
  
}

function checkProperty (wrotestuf,checkstuf,ind) {
  let find = null;
  if(Array.isArray(checkstuf)||Array.isArray(wrotestuf)){
    let arr = Array.isArray(checkstuf)?checkstuf:wrotestuf;
    let notarr = !Array.isArray(checkstuf)?checkstuf:wrotestuf;
    
    for (const elem of arr ) {
        (elem[ind]==notarr)? find = true : find = false;

        if(find){return find}
    }
    return find
  }
  if(wrotestuf.value == checkstuf.value){
    return true;
  }
  else{
    return false;
  }
}






