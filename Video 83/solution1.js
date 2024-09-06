function assignHouses(array){
    let houses = [];
    array.forEach(element => {
        if(element.length < 6){
            houses.push("Gryffindor")
        }
        else if(element.length < 8){
            houses.push("Hufflepuff");
        }
        else if(element.length < 12){
            houses.push("Ravenclaw");
        }
        else{
            houses.push("Slytherin");
        }
    });
    return houses;
}

let names = ["Mohan", "Subham", "KingPin", "Daredevil", "Superman", "Black Panther", "Groot", "Drax", "Gamora", "Loki", "Silvi", "Paggi", "Wanda", "Thanos", "Ajak", "Sarsi", "Ikirish", "Sprit"];
let houses = assignHouses(names);
for(i = 0; i < names.length; i++){
    console.log(`${names[i]} = ${houses[i]}`);
}
