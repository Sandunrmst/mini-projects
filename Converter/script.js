(function (){

    document.getElementById('convert').addEventListener('submit', function(event){
        event.preventDefault(); //This will privent action of phpfile loading when user click submit button

        let distance = document.getElementById('distance').value;
        distance = parseFloat(distance);

        let answer = document.getElementById('answer');

        if(distance){
            let conversion = distance * 1.609344;
            let roundConversion = conversion.toFixed(3);
            answer.innerHTML = `<h2>${distance} miles converts to ${roundConversion} Kilometers 😎</h2>`;
        }else{
            answer.innerHTML = `<h2>Please enter miles in numbers. 😉</h2>`;
        }
        
    });

}());