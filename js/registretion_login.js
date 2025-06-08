const userLogin = document.querySelector("#userlog");
const warningtext = document.querySelector("#warning_text");
const userpasword= document.querySelector("#userpassword");
const userconfirmpasword= document.querySelector("#userconfpassword")?document.querySelector("#userconfpassword"):null;
const sendbtn =document.querySelector(".sign-up");
const riderect = document.querySelector("#log");
const showPassword = document.querySelectorAll('.showpasword');
console.log(showPassword)
sendbtn.disabled =true;
// console.log(warningtext,userLogin,userpasword,sendbtn,userconfirmpasword,riderect)
getData('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user')
  .then(data => {

   
    if(userconfirmpasword){
          onCheng(userLogin,'input',()=>{
              for (const elem of data) {
              if(elem.name==userLogin.value){
                sendbtn.disabled =true;
                warningtext.textContent = 'login is taken';
                warningtext.style.display = 'block';
                return
              }
              else{
                warningtext.textContent = '';
                sendbtn.disabled =false;
                  warningtext.style.display = 'none';
              }
            }
            
          })
          sendbtn.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log(checkProperty(userconfirmpasword,userpasword))
            if(!checkProperty(userconfirmpasword,userpasword)){
              warningtext.textContent = 'password not equal'
              warningtext.style.display = 'block';
              setTimeout(() => {
                warningtext.textContent = ''
                warningtext.style.display = 'none';
              }, 3000);
              return
            }
            else if(!userLogin.value.trim()|| !userpasword.value.trim()||!userconfirmpasword.value.trim()){
              showWarningEmptyelements([userLogin,userpasword,userconfirmpasword]);
              return
            }
            else if(userLogin.value.length > 32|| userLogin.value.length > 32||userLogin.value.length > 32){
                warningtext.textContent = 'login or passwod too long'
              warningtext.style.display = 'block';
              setTimeout(() => {
                warningtext.textContent = ''
                warningtext.style.display = 'none';
              }, 3000);
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
              window.open('./index.html',"_self");
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
              warningtext.textContent = 'login or password not find';
              warningtext.style.display = 'block';
              setTimeout(() => {
              warningtext.style.display = 'none';
                 warningtext.textContent = '';
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
             window.open('./index.html',"_self");
              return
            }
            
          })
        }
}).catch((error) => {
  console.error('Fetch error:', error);
  alert(`Sorry, we have an error: ${error.message}`);
});
if(riderect.textContent == 'log in'){
  riderect.addEventListener('click',()=>{
  window.open('./login.html',"_self");
})
}
else{
    riderect.addEventListener('click',()=>{
  window.open('./reg.html',"_self");
})
}


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


showPassword.forEach((elem)=>{
  console.log(elem.nextElementSibling)
  elem.addEventListener('click',()=>{
    
  if(elem.nextElementSibling.type != 'password'){
    elem.nextElementSibling.type = 'password';
  }
  else{
    elem.nextElementSibling.type = 'text';
  }
})
})







