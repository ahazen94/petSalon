let petSalon={
    name:"Bark and Brush",
    phone:"999-999-9999",
    address:{
        country:"United States",
        state:"California",
        city:"San Diego",
        zip:"92104"
    },
    pets:[]
}
let inputName;
let inputAge;
let inputGender;
let inputService;
let inputBreed;

//creating the constructor
function Pet(name, age, gender, service, breed){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
}
function calculateAverage(){
    let total=0;
    for(var i=0;i<petSalon.pets.length;i++){
        total = total + petSalon.pets[i].age;
        average = total/petSalon.pets.length;
    }
    document.getElementById("average").innerHTML+=`
    <p>${average}</p>`;
}
function register(){
    //get the values from the HTML
    //create the object using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value,inputBreed.value);
    //validate the pet
    if(isValid(newPet)){
        //push the object to the array
        petSalon.pets.push(newPet);
        //display the array
        displayCards();
        clearForm();
        displayTotalAmountPets();
        displayServiceCount();
    }
}
function isValid(pet){

    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    inputBreed.classList.remove("alert-error");

    if(!pet.name || !pet.service || !pet.breed){
        if(!pet.name) inputName.classList.add("alert-error");
        if(!pet.service) inputService.classList.add("alert-error");
        if(!pet.breed) inputBreed.classList.add("alert-error");
        return false;
    }

    return true;
}
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputService.value="";
    inputBreed.value="";
}
function init(){
    //hook events

    //initial functions
    displayCards();
    displayTotalAmountPets();
    displayServiceCount();

    //creating a new pet
    let pet1 = new Pet("Scooby",6,"Male","Grooming","Dog");
    let pet2 = new Pet("Ellie",1,"Female","Grooming","Dog");
    let pet3 = new Pet("Aika",4,"Female","Grooming","Dog");

    //load the inputs
    inputName = document.getElementById("txtName");
    inputAge = document.getElementById("txtAge");
    inputGender = document.getElementById("txtGender");
    inputService = document.getElementById("txtService");
    inputBreed = document.getElementById("txtBreed");

}

window.onload = init;