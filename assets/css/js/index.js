function cardCreate2(title,image,description){
    return `
    <div class="wrapper">
        <div class="card m-3 shadow-lg">
            <img src="${image}/portrait_incredible.jpg">
            <h1>${title}</h1>
            <div class="descriptions">
                <h1>${title}</h1>
                <p>${description}
              </p>
                
            </div>
        </div>
        
    </div>`
}

async function loadDataFunction(offset) {

    var publickey = "4009707bfdf8f467b3dc12d8d2e25bb7"
    var privatekey = "be49e4a5b695e93c069c6e3ae89496e5741366f3"

    //open the request

     let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?hash=0b5bbd635d0487398a2199c5417c0969&ts=1&apikey=4009707bfdf8f467b3dc12d8d2e25bb7&limit=100&offset=${offset}`);
      
     let data = await response.json(); 

     total = data.data.total
       
     return data;
     
  }


  async function gettotal() {

    var publickey = "4009707bfdf8f467b3dc12d8d2e25bb7"
    var privatekey = "be49e4a5b695e93c069c6e3ae89496e5741366f3"

    //open the request

     let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?hash=0b5bbd635d0487398a2199c5417c0969&ts=1&apikey=4009707bfdf8f467b3dc12d8d2e25bb7`);
      
     let data = await response.json(); 

     let total =await data.data.total

     
       
     return total;
     
  }


  async function works(){

    var total = await gettotal().then((data)=>{return data})
    var array = await loadDataFunction(0).then((data)=>data.data.results)
    
    

    for (let i = 0; i < array.length; i++) {
        spanDiv.innerHTML += `${cardCreate2(array[i].name,array[i].thumbnail.path,array[i].description)}`
        
    }

    //link creation
    for (let i = 0; i < total; i+=100) {
        var link = document.createElement("a")
        link.className = `${i/100}`
        link.innerText = `${i/100}`
        link.setAttribute("href","javascript:void(0)")
        spanLinks.appendChild(link)    
    }

   
    
    
    document.querySelectorAll(".links a").forEach((item)=>{
        item.addEventListener('click',()=>{
            console.log(parseInt(item.className)*100);
            
            async function inner(){
                var z =''
                var myarray = await loadDataFunction(parseInt(item.className)*100).then((data)=>data.data.results)
                for (let i = 0; i < myarray.length; i++) {
                
                    z += `${cardCreate2(myarray[i].name,myarray[i].thumbnail.path,array[i].description)}`
                    
                }
                 spanDiv.innerHTML = z
                 console.log(myarray);
                //location.reload()
            }
            inner()  
    
        })
    
    })
    allLi = document.querySelectorAll("h1");
  

}

works()