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
