

document.getElementById("call-btn").addEventListener("click",function(){
    alert("National Number clicked, 999")
})
document.getElementById("police-btn").addEventListener("click",function(){
    alert("Police Helpline number, 999")
})
document.getElementById("fire-call").addEventListener("click",function(){
    alert("Fire service Number, 999")
})
document.getElementById("ambulance-call").addEventListener("click",function(){
    alert("Ambulace Number, 1994-999999")
})
document.getElementById("women-call").addEventListener("click",function(){
    alert("Women Child Helpline, 109")
})
document.getElementById("anti-call").addEventListener("click",function(){
    alert("Anti-corruption Helpline, 106")
})
document.getElementById("electricity-call").addEventListener("click",function(){
    alert("Electricity Helpline, 16216")
})
document.getElementById("brac-call").addEventListener("click",function(){
    alert("Brac helpline, 16445")
})
document.getElementById("bd-railway-call").addEventListener("click",function(){
    alert("Bangladesh railway helpline, 163")
})

// love react counter

// function getElement(id){
//     const element = document.getElementById(id);
//     return element;
// }

// const heartBtns = document.getElementsByClassName("heart-btn");

// for (let heartButton of heartBtns){
//     heartButton.addEventListener("click",function(){
//         const heartReserved = document.getElementById("heart-count").innerText;


//         const currentCount = Number(heartBtns) + Number(heartReserved);
//         return currentCount;
//         // getElement("heart-count").innerText = heartReserved;
//     }); 
// }

let heartBtn = document.getElementsByClassName("heart-btn");

let countSpan = document.getElementById("heart-count").innerText;

// heartBtn.addEventListener("click", function(){
//     let count = parseInt(countSpan);
//     count = count + 1;
//     countSpan= count;
// })
document.getElementsByClassName("heart-btn").addEventListener("click", function(){
    console.log("btn clicked")
})