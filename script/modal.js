


// const borderTop=(status)=>{
   
//     return status === 'open' ? "border-t-8 border-green-500" : "border-t-8 border-purple-500"

    
// }



const openCloseBg=(status)=>{
    //const card=document.querySelectorAll('.card')
    if(status==='open')
    {
        // card.classList.add('open')
      return "bg-green-500 p-3 rounded-full text-white"
    }
 
    else{
      //  card.classList.add('close');
       return "bg-purple-500 p-3 rounded-full text-white"
    }
    
}


const loadWordModal=(id)=>{

      fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then(res=>res.json())
    .then(data=>displayModalWord(data.data))
}



const displayModalWord=(data)=>{
  const modalContainer=document.getElementById('modal-word-container');

  modalContainer.innerHTML=`
  

    <div  class="card  shadow-lg m-4 ${borderTop(data.status)}"> 

            <div class="up flex flex-col  p-5">

                 <h1 class="text-2xl font-bold capitalize">${data.title}</h1><br>

                 <div class="flex justify-start items-center gap-3">
                     <div class=" ${openCloseBg(data.status)}" >${data.status}</div>
                     <div class="text-gray-500">${data.status} by ${data.assignee}</div>
                     <div><p class=" text-gray-500">${data.createdAt.split('T')[0]}</p></div>
                 </div>
               
               
            </div>


             <div class="middle-down flex gap-4 p-5">
                    
                    <div>
            
                        ${labels(data.labels)}
                    </div>
                </div>

                


            </div>

            <div class="middle p-5">
                <p class="text-gray-500 text-xl">${data.description}</p>
            </div>



            <div class="flex gap-4 m-4">
                
            <div class="down p-5 bg-sky-100 text-center w-full p-4">
                <span class="text-gray-500">Assignee:</span>
                <h1 class="text-xl text-gray-500 capitalize">${data.assignee}</h1>
                
            </div>

           <div class="bg-sky-100 text-center w-full p-4">
            <span class="text-gray-500">Priority:</span>
              <div class=" px-5 py-1 rounded-full text-xl ${priorityColor(data.priority)}"> <button class="uppercase">${data.priority}</button></div>
            </div>
           </div>

        </div>
  
  
  `;

  const modal= document.getElementById('word_modal');
  modal.showModal()
}








    // <div  class="card  shadow-lg m-4 ${borderTop(data.status)}"> 

    //         <div class="up flex flex-col  p-5">

    //              <h1 class="text-2xl font-bold capitalize">${data.title}</h1><br>

    //              <div class="flex justify-start items-center gap-3">
    //                  <div class=" ${openCloseBg(data.status)}" >${data.status}</div>
    //                  <div class="text-gray-500">${data.status} by ${data.assignee}</div>
    //                  <div><p class=" text-gray-500">${data.createdAt.split('T')[0]}</p></div>
    //              </div>
               
               
    //         </div>


    //          <div class="middle-down flex gap-4 p-5">

    //             <div class="flex justify-center items-center bg-red-100  font-bold rounded-full p-3 gap-2">
    //                 <div class="">
    //                     <img class="w-[2em] text-[#EF4444] " src="./assets/BugDroid.png" alt="">
    //                 </div>
    //                 <div>
    //                     // <button class="text-sm  text-red-600 uppercase">BUG</button>
    //                     ${labels(data.labels)}
    //                 </div>
    //             </div>

    //             <div class="flex justify-center items-center bg-yellow-100  font-bold rounded-full p-3 gap-2">
    //                 <div class="">
    //                     <img class="w-[2em] text-[#D97706]" src="./assets/Vector.png" alt="">
    //                 </div>
    //                 <div>
    //                     <button class=" text-sm  text-yellow-600 uppercase">help wanted</button>
    //                 </div>
    //             </div>


    //         </div>

    //         <div class="middle p-5">
    //             <p class="text-gray-500 text-xl">${data.description}</p>
    //         </div>



    //         <div class="flex gap-4 m-4">
                
    //         <div class="down p-5 bg-sky-100 text-center w-full p-4">
    //             <span class="text-gray-500">Assignee:</span>
    //             <h1 class="text-xl text-gray-500 capitalize">${data.author}</h1>
                
    //         </div>

    //        <div class="bg-sky-100 text-center w-full p-4">
    //         <span class="text-gray-500">Priority:</span>
    //           <div class=" px-5 py-1 rounded-full text-xl ${priorityColor(data.priority)}"> <button class="uppercase">${data.priority}</button></div>
    //         </div>
    //        </div>

    //     </div>