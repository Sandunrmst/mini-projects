
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let btn = document.querySelector('button');
let colorCode = document.querySelector('#color-code');
let hedding = document.querySelector('.heading');

btn.addEventListener('click', () =>{

    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNum()];
    }
    if(hexColor == "#111111"){
         hedding.style.color = "#ffff";  
    }

    colorCode.textContent = hexColor;
    document.querySelector('.content').style.backgroundColor = hexColor;
    
});

function getRandomNum(){
    return Math.floor(Math.random() * hex.length);
    //hex.length use to get aray lenth and multifly with random value and get number between 0 to 15
}

