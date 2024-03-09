let text;
let list;
let card;

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
            <p>${pet.name}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.service}</p>
            <p>${pet.breed}</p>
        </div>
        `;
    }
    petsDiv.innerHTML=card;
}

function displayRows(){

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