

const priorityColor=(priority)=>{

    
    return  priority === 'high' ? "bg-red-100 text-red-600" : 
           priority === 'medium' ? "bg-yellow-100 text-yellow-600" : 
           "bg-gray-100 text-gray-600";


    
}
    






const loadAllData=async()=>{

  const res= await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const allData =await res.json()
  displayAllData(allData.data);
}


const priorityColor=(priority)=>{

    


     return p === 'high' ? "bg-red-100 text-red-600" : 
           p === 'medium' ? "bg-yellow-100 text-yellow-600" : 
           "bg-gray-100 text-gray-600";
}
    
          

            


      
    




const displayAllData=(data)=>{

    const cardContainer=document.getElementById("card-container");
    
    cardContainer.innerHTML="";
    
    data.forEach(data=>{
        //console.log(data.author)
        const div=document.createElement('div')
        div.innerHTML=`
        
        <div class="card shadow-lg m-4">

            <div class="up flex justify-between items-center p-5">
                <div><img class="w-[2em]" src="./assets/Open-Status.png" alt=""></div>
                <div class=" px-5 py-1 rounded-full text-xl ${priorityColor(data.priority)}"> <button class="uppercase">${data.priority}</button></div>
            </div>

            <div class="middle p-5">
                <h1 class="text-3xl font-bold capitalize">${data.title}</h1>
                <p class="text-gray-500 text-xl">The navigation menu doesn't collapse properly on mobile devices</p>
            </div>

            <div class="middle-down flex gap-4 p-5">

                <div class="flex justify-center items-center bg-red-100  font-bold rounded-full p-3 gap-2">
                    <div class="">
                        <img class="w-[2em] text-[#EF4444] " src="./assets/BugDroid.png" alt="">
                    </div>
                    <div>
                        <button class="text-xl  text-red-600">BUG</button>
                    </div>
                </div>

                <div class="flex justify-center items-center bg-yellow-100  font-bold rounded-full p-3 gap-2">
                    <div class="">
                        <img class="w-[2em] text-[#D97706]" src="./assets/Vector.png" alt="">
                    </div>
                    <div>
                        <button class=" text-xl  text-yellow-600">help wanted</button>
                    </div>
                </div>


            </div>

            <div class="border-t-2 border-gray-400 my-3 "></div>

            <div class="down p-5">
                <h1 class="text-xl text-gray-500">#${data.id} ${data.author}</h1>
                <p class="text-xl text-gray-500">${data.createdAt}</p>
            </div>


        </div>

        
        `
        cardContainer.append(div)
        console.log(div)
    })
}

loadAllData();





// {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },




          

            