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
    //hint: length
}
function displayNames(){
    // use a for loop to travel the array
    document.getElementById("petList").innerHTML=`
    <li>${petSalon.pets[0].name}</li>
    <li>${petSalon.pets[1].name}</li>`;
}

displayNames();

function calculateAverage(){
    
}