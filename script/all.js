



// color of priority decided here
const priorityColor=(priority)=>{

    
    return  priority === 'high' ? "bg-red-100 text-red-600" : 
           priority === 'medium' ? "bg-yellow-100 text-yellow-600" : 
           "bg-gray-100 text-gray-600";

}



//status wise border and image detect

const openClose=(status)=>{
    //const card=document.querySelectorAll('.card')
    if(status==='open')
    {
        // card.classList.add('open')
      return `<img class="w-[2em]" src="./assets/Open-Status.png" ></img>`
    }
 
    else{
      //  card.classList.add('close');
       return `<img class="w-[2em]" src="./assets/Closed- Status .png" ></img>`
    }
    
}
    

//border top of card color according to the status

const borderTop=(status)=>{
   
    return status === 'open' ? "border-t-8 border-green-500" : "border-t-8 border-purple-500"

    
}


//total card counts
const cardTotal=(total)=>{
 
    document.getElementById('total').innerText=total
}






//load the all data first step 

const loadAllData=async()=>{

    spinPart(true)
    

  const res= await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const allData =await res.json()
  displayAllData(allData.data);
}




//display the all data second step
const displayAllData=(data)=>{
    const total=data.length;
    cardTotal(total)
   
   
   

    const cardContainer=document.getElementById("card-container");
    
    cardContainer.innerHTML="";
    
    data.forEach(data=>{
        //console.log(data.author)
        const div=document.createElement('div')
       // console.log(data.id)
        div.innerHTML=`
        
        <div onclick="loadWordModal(${data.id})" class="card  shadow-lg m-4 ${borderTop(data.status)}"> 

            <div class="up flex justify-between items-center p-5">
                <div >${openClose(data.status)}</div>
                <div class=" px-5 py-1 rounded-full text-xl ${priorityColor(data.priority)}"> <button class="uppercase">${data.priority}</button></div>
            </div>

            <div class="middle p-5">
                <h1 class="text-2xl font-bold capitalize">${data.title}</h1>
                <p class="text-gray-500 text-xl">${data.description}</p>
            </div>

            <div class="middle-down flex gap-4 p-5">
                    
                    <div>
            
                        ${labels(data.labels)}
                    </div>
            </div>

            <div class="border-t-2 border-gray-400 my-3 "></div>

            <div class="down p-5">
                <h1 class="text-xl text-gray-500">#${data.id} ${data.author}</h1>
                <p class="text-xl text-gray-500">${data.createdAt.split('T')[0]}</p>
            </div>


        </div>

        
        `
        cardContainer.append(div)
    });

     spinPart(false)

}

loadAllData();













          

            