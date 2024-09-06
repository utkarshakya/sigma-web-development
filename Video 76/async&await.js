console.log("Initiated...");


// Async and Await are special syntex to work with the promises.

async function afterAwait() {
    return new Promise((rs, rj)=>{
        setTimeout(()=>{
            rs("Promise Resolved Because You Wait For Me Using Await Function");
        }, 5000);
    })
}

async function main(){
    console.log("Start");
    console.log("Getting data without using await")
    let data = afterAwait();
    console.log(data);
    console.log("Again getting data using await")
    data = await afterAwait();
    console.log(data);
    console.log("You See The Difference, Right?");
    console.log("End")
}

main() // Calling a main function.