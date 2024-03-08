let petSalon={
    name:"Bark and Brush",
    phone:"999-999-9999",
    address:{
        country:"United States",
        state:"California",
        city:"San Diego",
        zip:"92104"
    },
    pets:[
        {
            name:"Scooby",
            age:8,
            gender:"Male"
        },
        {
            name:"Aika",
            age:4,
            gender:"Female"
        },
        {
            name:"Ellie",
            age:1,
            gender:"Female"
        },
        {
            name:"Ace",
            age:2,
            gender:"Male"
        }
    ]
}
function displayPetCount(){
    document.getElementById("count").innerHTML=`<p>${petSalon.pets.length}</p>`;
}
displayPetCount();
function displayNames(){
    for(var i=0;i<petSalon.pets.length;i++){
        document.getElementById("petList").innerHTML+=`
        <li>${petSalon.pets[i].name}</li>`;
    }
}
displayNames();

function calculateAverage(){
    let total=0;
    for(var i=0;i<petSalon.pets.length;i++){
        total = total + petSalon.pets[i].age;
        average = total/petSalon.pets.length;
    }
    document.getElementById("average").innerHTML+=`
    <p>${average}</p>`;
}
calculateAverage();