function cardCreate2(title,image,description){
    if(description==null){
        return `
    <div class="wrapper">
        <div class="card m-3 shadow-lg">
            <img src="${image}/portrait_xlarge.jpg">
            <div class="descriptions">
                <h1>${title}</h1>
                
                
            </div>
        </div>
        
    </div>`

    }
    return `
    <div class="wrapper">
        <div class="card m-3 shadow-lg">
            <img src="${image}/portrait_incredible.jpg">
            <div class="descriptions">
                <h1>${title}</h1>
                <p>${description}
              </p>
                
            </div>
        </div>
        
    </div>`
    
}
async function loadDataFunction(offset) {



    //open the request

     let response = await fetch(`https://gateway.marvel.com:443/v1/public/series?hash=0b5bbd635d0487398a2199c5417c0969&ts=1&apikey=4009707bfdf8f467b3dc12d8d2e25bb7&limit=100&offset=${offset}`);
      
     let data = await response.json(); 

     total = data.data.total
       
     return data;
     
  }