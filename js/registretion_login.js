window.addEventListener('load',()=>{
getData('https://x8ki-letl-twmt.n7.xano.io/api:Ycl_GGkj/store_user')
  .then(resolve => {
   if(resolve.length != 0){
Createnode('input');
Createnode('input');
Createnode('button');  
}
else{
      Createnode('input');
Createnode('input');
Createnode('input');
Createnode('button');  
}
  })

})


function getData(url) {
    return new Promise((resolve, reject) => {
    fetch(url,{
    method:"get",
    })
    .then(response=>response.json())
    .then(data=>{
    obj=data
    resolve(obj);
    });
    });
    
}


function Createnode(elem) {
 const input = document.createElement(elem);
document.body.appendChild(input);   
return true
}

