
document.getElementById('search-btn').addEventListener('click',()=>{


    const inputSearch=document.getElementById('search-input');
    const searchValue=inputSearch.value.trim().toLowerCase();
    
    
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res)=>res.json())
    .then((res)=>{
        const allWords=res.data;
        const filterWords=allWords.filter(item=>item.title.toLowerCase().includes(searchValue));
        console.log(filterWords)

        displayAllData(filterWords)
        displayCloseData(filterWords)
        displayOpenData(filterWords)
    })
    


});
//


