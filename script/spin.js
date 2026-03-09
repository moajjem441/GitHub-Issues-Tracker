//spinnig part on loading time

const spinPart=(stat)=>{
   
    const spin=document.getElementById('spin')
    if(stat===true)
    {

        spin.classList.remove('hidden');
    
    }
    else{

        spin.classList.add('hidden');
    }
}