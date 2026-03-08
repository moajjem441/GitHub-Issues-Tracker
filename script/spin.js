//spinnig part on loading time

const spinPart=(stat)=>{
   
     const cardContainer = document.getElementById('card-container');
    const openContainer = document.getElementById('open-container');
    const closeContainer = document.getElementById('close-container');
    const spin=document.getElementById('spin')
    if(stat===true)
    {
        cardContainer.classList.add('hidden');
        openContainer.classList.add('hidden');
        closeContainer.classList.add('hidden');

        spin.classList.remove('hidden');
    
    }
    else{

        cardContainer.classList.remove('hidden');
        openContainer.classList.remove('hidden');
        closeContainer.classList.remove('hidden');
        
        spin.classList.add('hidden');
    }
}