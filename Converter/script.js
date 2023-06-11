(function (){

    let convernType = 'miles';
         let heading = document.querySelector('h1');
         let intro = document.querySelector('p');
         let answerDiv = document.getElementById('answer');
         let form = document.getElementById('convert');

         document.addEventListener('keydown', function(event){
            let key = event.code;
            if(key === 'KeyK'){
                convernType = 'kilometers';
                heading.innerHTML = "Kilometers to Miles Converter";
                intro.innerHTML = "Type in a number of kilometers and clisk the button to convert the distance to miles.";

            }else if(key === 'KeyM'){
                convernType = 'miles';
                heading.innerHTML = "Miles to Kilometers Converter";
                intro.innerHTML = "Type in a number of Miles and clisk the button to convert the distance to Kilometers.";
                
            }
         });

         form.addEventListener('submit', function(){
            event.preventDefault();

            let distance = parseFloat((document.getElementById('distance').value));

            if(distance){
                if(convernType == 'miles'){
                    let converted = (distance * 1.609344.toFixed(3));
                    answer.innerHTML = `<h2>${distance} miles converts to ${converted} Kilometers 😎</h2>`;
                }else{
                    let converted = (distance * 0.621371192).toFixed(3);
                    answer.innerHTML = `<h2>${distance} Kilometers converts to ${converted} miles 😎</h2>`;
                }

            }
            
            else{
                answer.innerHTML = `<h2>Please enter miles in numbers. 😉</h2>`;
            }
         });

}());