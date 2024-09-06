let array = [1, 3, 4, 5, 5, 5, 4, 2, 2, 1]
console.log(`Normal : ${array}`);
let double = (array)=> {
    for(i = 0; i<array.length; i++){
        if(i == array.length-1){
            array[i] = 2*array[i];
        }
        else if(array[i] != array[i+1]){
            array[i] = 2*array[i];
        }
    }
}
double(array);
console.log(`Doubled : ${array}`);