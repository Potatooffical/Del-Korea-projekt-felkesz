fetch('')
.then(x=> x.json())
.then(y=> megjelenit(y))

let sz="";
function megjelenit(y){
     sz+="<div class='row'>"
   for (let i = 0; i < 9; i++) {
     sz+=`<div class="col-lg-4" ></div>`
     
   }
   sz+="</div>" 
document.getElementById("etel").innerHTML=sz
   }
   
