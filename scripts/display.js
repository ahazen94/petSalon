let text;
let list;
let card;
let row;

function displayNames(){
    list = document.getElementById("petList");
    text="";
    for(var i=0;i<petSalon.pets.length;i++){
        text+=`<li>${petSalon.pets[i].name}</li>`;
    }
    list.innerHTML=text;
}

function displayCards(){
    const petsDiv = document.getElementById("pets");
    card="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card+=`
        <div class="petCard ${pet.service.toLowerCase()}">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
            <p>Type: ${pet.breed}</p>
        </div>
        `;
    }
    petsDiv.innerHTML=card;
}

function displayRows(){
    const TABLE = document.getElementById("petTable");
    row="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet= petSalon.pets[i];
        row+=`
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.breed}</td>
        </tr>
        `;
        TABLE.innerHTML=row;
    }

}

function displayTotalAmountPets(){
    document.getElementById("totalPets").innerHTML=petSalon.pets.length;
}

function displayServiceCount(){
    //declare variables
    let grooming=0;
    let vaccines=0;
    let boarding=0;

    for(let i=0;i<petSalon.pets.length;i++){
        //travel the array
        let pet = petSalon.pets[i]; //get the current pet
        if(pet.service.toLowerCase() == "grooming"){
            grooming++; //increase the grooming count
            document.getElementById("totalGrooming").innerHTML=grooming; //display the total grooming in HTML
        }else if(pet.service.toLowerCase() == "vaccines"){
            vaccines++;
            document.getElementById("totalVaccines").innerHTML=vaccines;
        }else if(pet.service.toLowerCase() == "boarding"){
            boarding++;
            document.getElementById("totalBoarding").innerHTML=boarding;
        }
    }
}