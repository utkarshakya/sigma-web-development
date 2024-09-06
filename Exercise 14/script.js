function getRandom(){
    let num = Math.floor(3 + Math.random()*(5-3+1)); // formula Math.floor(min + Math.random()*(max - min + 1))
    return num*1000; // This is how we get miliseconds
}

function blinkingDots(){
    let lastElement = document.body.lastElementChild;
    let dots = setInterval(() => {
        if(lastElement.innerHTML.endsWith("...")){
            lastElement.innerHTML = lastElement.innerHTML.slice(0, -3);
        }
        else{
            lastElement.innerHTML += ".";
        }
    }, 200);
    return dots;
}

async function displayMessage(message){
    let k = blinkingDots();
    return new Promise((resolve)=>{
        let designedMessage = document.body;
        setTimeout(() => {
            designedMessage.innerHTML += `<div>${message}</div>`;
            resolve();
            if(message != ""){
                clearInterval(k);
            }
            else{
                return k;
            }
        }, 1000);
    })
    
}

async function main() {
    document.body.innerHTML += "<div>Initializing Hacking</div>"
    await displayMessage("Reading Your Files")
    await displayMessage("Sending Files To Server")
    await displayMessage("Detecting Vulnerability")
    await displayMessage("Getting Root Access")
    await displayMessage("Compromizing Your System")
    await displayMessage("Injecting Malware In Your System")
    await displayMessage("Clearing Up Log File")
    await displayMessage("");
    
    setTimeout(() => {
        clearInterval(k);
    }, 4000);
    setTimeout(() => {
        document.body.innerHTML += "<div>I Have Injected Malware In Your System</div>"
    }, 5000);
    setTimeout(() => {
        document.body.innerHTML += "<div>So Now</div>"
    }, 8000);
    setTimeout(() => {
        document.body.innerHTML += "<div>F#UK YO#RSELF !</div>"
    }, 10000);
}

main()