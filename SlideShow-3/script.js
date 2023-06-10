

        (function(){

            let next = document.getElementById('next');
            let previous = document.getElementById('previous');
            let container = document.getElementById('content');
            
            imageList = ["../SlideShow/image1.jpg","../SlideShow/image2.jpg","../SlideShow/image3.jpg", "../SlideShow/image4.jpg","../SlideShow/image5.jpg"];

            currentImage =0;

            next.addEventListener('click', function(event){
                event.preventDefault(); // This privent when user click on anchor tag it will navigate to linked address.

                currentImage++;
                if(currentImage > imageList.length - 1 ){
                    currentImage = 0;
                }
                
                let newSlideImage = document.createElement('img');
                newSlideImage.src = imageList[currentImage];
                newSlideImage.className = 'fadeinimg';
                container.appendChild(newSlideImage);

            });

            previous.addEventListener('click', function(){
                currentImage --;
                if(currentImage < 0){
                    currentImage = imageList.length - 1;
                }
                let newSlideImage = document.createElement('img');
                newSlideImage.src = imageList[currentImage];
                newSlideImage.className = 'fadeinimg';
                container.appendChild(newSlideImage);
            });


        

        }());

