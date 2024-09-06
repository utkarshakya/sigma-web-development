console.log("Initiated...")

// fetch is also a promise but it is not local it is available all, it is public

async function firstFetch(){
    let f = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await f.json();
    return data;
}

async function main(){
    console.log("Fatching API...");
    console.log(await firstFetch());
    console.log("End")
}

main()


// We can also fetch directly without using await and async like given below
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))