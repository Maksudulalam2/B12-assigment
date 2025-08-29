

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


    // const heartBtns = document.getElementsByClassName('heart-btn');
    // const heartCounts = document.getElementById('heart-count');

    // for (let i = 0; i < heartBtns; i++) {
    //     heartBtns[i].addEventListener('click', function() {
    //         let currentCount = parseInt(heartCounts[i].innerText);
    //         currentCount = currentCount + 1;
    //         heartCounts[i].innerText = currentCount;
    //     });
    // }


    let count = 0;
    const heartBtn = document.getElementById('Btn');
    const heartCount = document.getElementById('heart-count');

    heartBtn.addEventListener('click', function() {
        count = count + 1;
        heartCount.innerText = count;
    });

  

    