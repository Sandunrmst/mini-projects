

        (function(){

            document.getElementById('next').onclick = nextImage;
            document.getElementById('previous').onclick = privousImage;
            
            images = ["image1.jpg","image2.jpg","image3.jpg", "image4.jpg","image5.jpg"];

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

