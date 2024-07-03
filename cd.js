const enddate = "08 April 2024 10:43 PM"

document.getElementById("end-date").innerHTML= enddate
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(enddate)
    const now = new Date()
    const diff = (end - now) / 1000;
    
    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff  % 60);
}

// initial call
clock()

setInterval(
    () => {
        clock()
    }

)