let distance;

btn1 = document.getElementById('btn1');

btn2 = document.getElementById('btn2');

messageEl = document.getElementById('message-el')


function getStarted(){
    distance = parseInt(prompt('Enter distance in km'));
    if(!distance){
        distance = parseInt(prompt('Enter distance in km'));

    } else {
        messageEl.textContent = `Calculate the cost of ${distance}`
        btn1.textContent = 'ENTER NEW'
    }
}


function calCost(){
    if( distance <= 20){
        messageEl.textContent=`The cost of ${distance} km is ${3500 + distance * 150}`
    }
    else{
        messageEl.textContent=`Contact us for offers`
    }
}

