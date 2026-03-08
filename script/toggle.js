
function toggle(id) {

    const allBtn = document.getElementById('all-btn');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');

    const cardContainer = document.getElementById('card-container');
    const openContainer = document.getElementById('open-container');
    const closeContainer = document.getElementById('close-container');




    //remove all
    allBtn.classList.remove('active');
    openBtn.classList.remove('active');
    closeBtn.classList.remove('active');


    cardContainer.classList.add('hidden');
    openContainer.classList.add('hidden');
    closeContainer.classList.add('hidden');




    //add only for id

    const currentBtn = document.getElementById(id)
    currentBtn.classList.add('active')

    if (id === 'all-btn') {
        cardContainer.classList.remove('hidden');

    }

    else if (id === 'close-btn') {
        closeContainer.classList.remove('hidden');
        closeContainer.classList.add('grid', 'grid-cols-1', 'lg:grid-cols-2', 'xl:grid-cols-4');
    }

    else {
        openContainer.classList.remove('hidden');
        openContainer.classList.add('grid', 'grid-cols-1', 'lg:grid-cols-2', 'xl:grid-cols-4');
    }




}