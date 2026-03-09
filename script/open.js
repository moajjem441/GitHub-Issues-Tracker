

//load the all data first step 

  const loadOpenData = async () => {
     spinPart(true)

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
      // console.log(data)
        const div=document.createElement('div')
        div.innerHTML=`
        
        <div onclick="loadWordModal(${data.id})" class="card shadow-lg m-4 ${borderTop(data.status)}"> 

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












          

            



