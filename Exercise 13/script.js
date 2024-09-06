console.log("JavaScript Initiated...");

let button = document.querySelector(".button")
button.addEventListener("click", ()=>{
    let title = prompt("Enter Your Title Of The Card");
    document.querySelector(".title").innerHTML = `${title}`;
    let channel = prompt("Enter Your Channel Name");
    document.querySelector(".channel").innerHTML = `${channel}`;
    let views = prompt("Enter Your Total Views In Numbers");
    document.querySelector(".views").innerHTML = `${views}`;
    let uploded = prompt("Enter Your Uploded Duration");
    document.querySelector(".uploded").innerHTML = `${uploded}`
    let duration = prompt("Enter the Duration Of The Video");
    document.querySelector(".duration").innerHTML = `${duration}`;
    let image = prompt("Enter The Link Of Your Thumbnail");
    let thumbnailURL = document.querySelector(".media");
    thumbnailURL.style.background = `url(${image}) no-repeat center center`;
    thumbnailURL.style.backgroundSize = cover;
})