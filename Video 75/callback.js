console.log("Initiated...");

function kingpin(){
    console.log("I am KingPin");
}

function marvel(kingpin) {
    let a = setTimeout(() => {
        console.log("Marvel Studio");
    }, 3000);

    if(typeof(a) == 'number'){
        kingpin()
    }
    else{
        console.log("Wait for a while")
    }
}

marvel(kingpin);