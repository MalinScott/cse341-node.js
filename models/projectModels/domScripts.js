
/* 
function getBtn(){
   const getBtn = document.getElementById('get-btn');
   getBtn.addEventListener('click', getData);
}
function postBtn(){
   const postBtn = document.getElementById('post-btn');
   postBtn.addEventListener('click', sendData);
} */

module.exports = {
   getBtn(){
      const getBtn = document.getElementById('get-btn');
      getBtn.addEventListener('click', getData);
   },
   postBtn(){
      const postBtn = document.getElementById('post-btn');
      postBtn.addEventListener('click', sendData);
   }
}

