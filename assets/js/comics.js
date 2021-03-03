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