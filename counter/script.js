
    let counter = 0;

    const value = document.querySelector('.counter h1');
    const All_btns = document.querySelectorAll('.button button');

    All_btns.forEach(function (btn){
        btn.addEventListener('click', function(e){
            console.log(e);
            console.log(e.currentTarget);
            console.log(e.currentTarget.classList);

            const style = e.currentTarget.classList;
            if (style.contains('decrease')){
                counter--;
            }else if(style.contains('reset')){
                counter = 0;
            }else if (style.contains('increase')){
                counter++;
            }
            if (counter>0){
                value.style.color = 'green';
            }else if(counter == 0){
                value.style.color = 'black';
            }else{
                value.style.color = 'red';
            }
            value.textContent = counter;
        });
    });


