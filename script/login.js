document.getElementById('signin-btn').addEventListener('click',()=>{

   const inputName=document.getElementById('input-name');
   const inputPass=document.getElementById('input-pass')

   const name=inputName.value;
   const password=inputPass.value;

   if(name!=='admin')
   {
       alert("Invalid Name");
       return;
   }

   if(password==='admin123')
   {
    alert("Log in Successfully");
    window.location.assign('./home.html')
   }
   else{

    alert("Invalid Password");
       return;
   }
})