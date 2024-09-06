console.log("JavaScript Initiated...");

let button = document.querySelector(".button button");

button.addEventListener("click", (e)=>{
    // e.stopPropagation();
    document.querySelector(".box h2").innerHTML = "Hello, You Are Welcome To Our Country.";
})

// For Event Bubbling, first run and try running by uncommenting the 6th line.
document.querySelector(".container").addEventListener("click", ()=>{
    alert("container was clicked");
})

// setInterval and setTimeOut
// setInterval runs repeatedly after a fixed inverval of time.
// setTimeout runs one time after a fixed inverval of time.
// we can remove these two by useing clearInvterval and clearTimeout

function getRandom(){
    let red = Math.ceil(0 + Math.random()*(255-0));
    let green = Math.ceil(0 + Math.random()*(255-0));
    let blue = Math.ceil(0 + Math.random()*(255-0));
    return `rgb(${red} ${green} ${blue})`
} // This function generates random color.

let a = setInterval(() => {
    document.querySelector(".box h2").style.color = getRandom();
}, 1000); // This will fire after ever second.

setTimeout(() => {
    button.style.backgroundColor = "gray";
}, 5000); // This will fire one time after 5 seconds.

// Note: these two functions retuns some integer value which we can use to stop the interval of timeout
// For example: let a = setInterval() then a will get some value so can simply write clearInvterval(a) to stop the Interval.
// Uncomment the below line to see the difference
// clearInterval(a);