
let distance = [];

const inputEl = document.getElementById('input-el');

const btn2El = document.getElementById('btn2');

const ulEl = document.getElementById('ul-el');

let messageEl = document.getElementById('btn-addlister');

btn2El.addEventListener("click", function(){
    
    distance.push(inputEl.value)
    if( distance <= 20){

        inputEl.value = "";
        messageEl.textContent = `The cost is ${5000 + distance * 150}`;

    } else if(distance <=50){

        inputEl.value = "";
        messageEl.textContent = `The cost is ${6000 + distance * 150}`;

    } else{
        inputEl.value = "";
        messageEl.textContent = `Cal us please`;
    }

    renderRecent();
 
    distance=[];
 
});

function renderRecent(){

    for(let i = 0; i<distance.length; i++){
     
        ulEl.innerHTML +=`<li>
                            ${ distance[i]} km
                        </li>
        `
    } 
       
  }




// const card2 = document.getElementById('card2')

// card2.innerHTML = "<button onclick='buy()'>BUY NOW</button>"

// function buy(){
//     card2.innerHTML += "<p>Thank you for buying</p>"
// }



// let distance;

// btn1 = document.getElementById('btn1');

// btn2 = document.getElementById('btn2');

// messageEl = document.getElementById('message-el')


// function getStarted(){
//     distance = parseInt(prompt('Enter distance in km'));
//     if(!distance){
//         distance = parseInt(prompt('Enter distance in km'));

//     } else {
//         messageEl.textContent = `Calculate the cost of ${distance}`
//         btn1.textContent = 'ENTER NEW'
//     }
// }


// function calCost(){
//     if( distance <= 20){
//         messageEl.textContent=`The cost of ${distance} km is ${3500 + distance * 150}`
//     }
//     else{
//         messageEl.textContent=`Contact us for offers`
//     }
// }
