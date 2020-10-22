// TODO: add code here
window.addEventListener("load",function(){
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
       response.json().then(function(json) {
          console.log(json);
         let container = document.getElementById("container");
         //var byHoursInSpace = json.slice(0);

         json.sort(function(a, b) {
            return a.hoursInSpace - b.hoursInSpace;
        });
         for(let i=json.length-1; i>=0 ; i--){
         container.innerHTML +=`
         <div class="astronaut">
         <div class="bio">
            <p> Number of astronauts: ${json.length} <p>
            <h3> ${json[i].firstName} ${json[i].lastName} </h3>
            
            <ul>
               <li>Hours in space:  ${json[i].hoursInSpace}</li>
               
               <li>Active: ${json[i].active}</li>
               <li>Skills: ${json[i].skills[0]}${json[i].skills[1]}</li>
            </ul>
         </div>
         <img class="avatar" src=${json[i].picture}>
      </div>`;
         }
       });
    });

});