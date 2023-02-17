let count = 0
let val = document.getElementById("count")

function handleIncr(){
    count =count + 1
    val.innerText =  count
    console.log("Clicked")
}
function handleDecr(){


    if(count == 0){
        val.innerText = count

    }

    else{

        count =count - 1
        val.innerText = " " + count
        console.log("Clicked")
    }
}
function handleReset(){
    count = 0
    val.innerHTML = count
}
