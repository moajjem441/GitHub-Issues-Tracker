
function toggle(id){

    const allBtn=document.getElementById('all-btn');
    const openBtn=document.getElementById('open-btn');
    const closeBtn=document.getElementById('close-btn');


    
    //remove all
    allBtn.classList.remove('active');
    openBtn.classList.remove('active');
    closeBtn.classList.remove('active');


    //add only for id

    const currentBtn=document.getElementById(id)
    currentBtn.classList.add('active')



}