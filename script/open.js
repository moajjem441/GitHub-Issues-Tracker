

//load the all data first step 




  const loadOpenData = async () => {

        const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const allData = await res.json()
        const data = allData.data;

        const openData = data.filter(item => item.status === 'open');
        displayOpenData(openData)
    }



//display the all data second step
const displayOpenData=(data)=>{

     const total=data.length;
    cardTotal(total)

    //console.log(data)
    const cardContainer=document.getElementById("open-container");
    
    cardContainer.innerHTML="";
    
    data.forEach(data=>{
        //console.log(data.author)
        const div=document.createElement('div')
        div.innerHTML=`
        
        <div class="card shadow-lg m-4 ${borderTop(data.status)}"> 

            <div class="up flex justify-between items-center p-5">
                <div >${openClose(data.status)}</div>
                <div class=" px-5 py-1 rounded-full text-xl ${priorityColor(data.priority)}"> <button class="uppercase">${data.priority}</button></div>
            </div>

            <div class="middle p-5">
                <h1 class="text-3xl font-bold capitalize">${data.title}</h1>
                <p class="text-gray-500 text-xl">${data.description}</p>
            </div>

            <div class="middle-down flex gap-4 p-5">

                <div class="flex justify-center items-center bg-red-100  font-bold rounded-full p-3 gap-2">
                    <div class="">
                        <img class="w-[2em] text-[#EF4444] " src="./assets/BugDroid.png" alt="">
                    </div>
                    <div>
                        <button class="text-sm  text-red-600 uppercase">BUG</button>
                    </div>
                </div>

                <div class="flex justify-center items-center bg-yellow-100  font-bold rounded-full p-3 gap-2">
                    <div class="">
                        <img class="w-[2em] text-[#D97706]" src="./assets/Vector.png" alt="">
                    </div>
                    <div>
                        <button class=" text-sm  text-yellow-600 uppercase">help wanted</button>
                    </div>
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



    
    
}

// loadOpenData();










          

            



