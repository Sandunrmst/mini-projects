

        (function(){

            document.getElementById('next').onclick = nextImage;
            document.getElementById('previous').onclick = privousImage;
            
            images = ["../SlideShow/image1.jpg","../SlideShow/image2.jpg","../SlideShow/image3.jpg", "../SlideShow/image4.jpg","../SlideShow/image5.jpg"];

            imgCounter =0;

            function nextImage(){

                imgCounter ++;
                if(imgCounter > images.length - 1 ){
                    imgCounter = 0;
                }
                document.getElementById('myimage').src = images[imgCounter];

            }

            function privousImage(){
                imgCounter --;
                if(imgCounter < 0){
                    imgCounter = images.length - 1;
                }
                document.getElementById('myimage').src = images[imgCounter];
            }

        }());

