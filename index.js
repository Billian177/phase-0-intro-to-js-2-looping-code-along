// Code your solutions in this file

function writeCards(arr, event){
    const card=[];
    for(let i=0; i<arr.length; i++){
        card.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return card;
}

let st=10;
function countDown(st){

    while (st>0){
        console.log(st);
        st-=1;
    }
    console.log(st);
}
