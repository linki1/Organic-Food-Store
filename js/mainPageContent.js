const allBlokItms = document.querySelectorAll(".shop-itm");
const svgBlog = document.getElementById("blogsvg");
const svgRec = document.getElementById("recsvg");
for (let i = 0; i < allBlokItms.length; i++) {
  if(i == 3||i == 4||i == 5||i == 9||i == 10||i == 11){
    allBlokItms[i].style.opacity = 0;
    allBlokItms[i].style.position = 'absolute';
    allBlokItms[i].style.zIndex = '-1';
  }
  
}
let ifclikbg = false;
console.log(svgBlog)
svgBlog.addEventListener('click',()=>{
  console.log('worck')
  if(!ifclikbg){
    svgBlog.style.transform='rotatez(90deg)';
      for (let i = 0; i < allBlokItms.length; i++) {
  if(i == 3||i == 4||i == 5){
    allBlokItms[i].style.opacity = 1;
    allBlokItms[i].style.position = 'revert-layer';
    allBlokItms[i].style.zIndex = '1';
  }  
}
ifclikbg = true
  }
  else{
    svgBlog.style.transform='rotatez(0deg)';
         for (let i = 0; i < allBlokItms.length; i++) {
  if(i == 3||i == 4||i == 5){
    allBlokItms[i].style.opacity = 0;
    setTimeout(()=>{
     allBlokItms[i].style.position = 'absolute';
     allBlokItms[i].style.zIndex = '-1';
    },850)
  
  }  
}
ifclikbg = false
  }

})
let ifclirec = false;
console.log(svgBlog)
svgRec.addEventListener('click',()=>{
  console.log('worck')
  if(!ifclirec){
    svgRec.style.transform='rotatez(90deg)';
      for (let i = 0; i < allBlokItms.length; i++) {
  if(i == 9||i == 10||i == 11){
    allBlokItms[i].style.opacity = 1;
    allBlokItms[i].style.position = 'revert-layer';
    allBlokItms[i].style.zIndex = '1';
  }  
}
ifclirec = true
  }
  else{
    svgRec.style.transform='rotatez(0deg)';
         for (let i = 0; i < allBlokItms.length; i++) {
  if(i == 9||i == 10||i == 11){
    allBlokItms[i].style.opacity = 0;
    setTimeout(()=>{
     allBlokItms[i].style.position = 'absolute';
     allBlokItms[i].style.zIndex = '-1';
    },850)
  
  }  
}
ifclirec = false
  }

})

// fetch('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user', {
//   method: 'GET'
// })
//   .then((response)=>{
//     return response.json()
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Ошибка:', error));

// fetch('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'oleg',
//     Pasword: '1234',
//     basket: JSON.stringify(arrorders),
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log('Ответ от сервера:', data))
//   .catch(error => console.error('Ошибка:', error));