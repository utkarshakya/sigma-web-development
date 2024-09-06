let first, second, third;

// Generating First Word Randomly
let r = Math.random();
if(r < 0.33){
    first = "Crazy"
}
else if(0.33 <= r < 0.66){
    first = "Amazing"
}
else{
    first = "Fire"
}
// Generating Second Word Randomly
r = Math.random();
if(r < 0.33){
    second = "Engine"
}
else if(0.33 <= r < 0.66){
    second = "Foods"
}
else{
    second = "Garments"
}
// Generating Third Word Randomly
r = Math.random();
if(r < 0.33){
    third = "Bros"
}
else if(0.33 <= r < 0.66){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`);