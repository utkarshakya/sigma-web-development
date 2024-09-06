function check(string) {
    if (string.length >= 8 && /\d/.test(string) && /[a-z]/.test(string) && /[A-Z]/.test(string)) {
        return 1;
    }
    else {
        return 0;
    }
}

let string = "helloJS@123";
if (check(string)) {
    console.log("Your Password is Valid (:")
}
else {
    console.log("Sorry Your Password is Invalid !")
}