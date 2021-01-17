


let input=document.getElementById("input1")
let searchbtn=document.querySelector("#search1")
searchbtn.addEventListener("click",()=>{
    console.log("button pressed")
    sendapirequest()
    
}) 

async function sendapirequest(){
    
    let response=await fetch(`https://official-joke-api.appspot.com/random_joke`)

console.log(response)
let data=await response.json();
console.log(data)
useapidata(data)
}





  function useapidata(data)
  {       document.querySelector("#content").innerHTML=`
     
     

  <div class="jumbotron">
  
  <p class="lead" style="font-family: 'Hachi Maru Pop', cursive;">${data.setup}</p>
  <hr class="my-4">
  <p  style="font-family: 'Hachi Maru Pop', cursive;">${data.punchline}</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
    
    

    
     `
//  }






//  <div class="card" style="width: 30rem;">      <img src="${data.message}" class="card-img-top" alt="..."></div>
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">${data.Title}</p>
// <p style=xolor:white>${data.Actors}</p>
// <p style=color:white>${data.Plot}</p>
     
  }  