
var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleForm);

function handleForm(event){
    event.preventDefault();

    // var destName = event.traget.elements['names'].value;
    // var destLocation = event.traget.elements['location'].value;
    // var destPhoto = event.traget.elements['photo'].value;
    // var destDesc = event.traget.elements['description'].value;

    let data = {
		"destName": this.names.value, 
		"destLocation": this.location.value, 
		"destPhoto": this.photo.value, 
		"destDesc": this.description.value,
	}

    // this will reset form after submit form
    for( var i=0; i<detailsForm.length; i++){
        detailsForm.elements[i].value = "";
        
    }
    //call the funtion for create main card dynamically
    var destCard = createDestinationCard(data.destName, data.destLocation, data.destPhoto, data.destDesc);

    var wishListContainer = document.getElementById('destination_container');

    if(wishListContainer.children.length === 0){
        document.getElementById('title').innerHTML = "My wish List";
    }
    // here select div id for replace the main card and set the created call funtion on it.
    document.querySelector('#destination_container').appendChild(destCard);

}


// Create main card dynamically
function createDestinationCard(name, location, photoURL, description){
    
    // create card div part 
    var card = document.createElement('div');
    card.className = 'card';

    var img = document.createElement('img');
    img.setAttribute('alt', name);
    var constantPhotoUrl = "images/signpost.jpg";

    if(photoURL.length === 0){
        img.setAttribute('src', constantPhotoUrl);
    }else{
        img.setAttribute('src', photoURL);
        
    }

    card.appendChild(img); // here add image to main card div

    // create card div part end

    // create card-body div part 
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubTitle = document.createElement("h4");
    cardTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    if (description.length !== 0){
        var cardText = document.createElement("p");
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    // create card-body div part end

    card.appendChild(cardBody); // here add card-body div inside to main card div

    return card; //Finally main card div return as objsect
}


function removeDestination(event){
    // var card = event.traget.parentElement.parentElement;
    // card.remove();

    var deleteButton = event.target;
    if (deleteButton.nodeName !== 'BUTTON')
        return false;
    deleteButton.parentNode.parentNode.remove(deleteButton.parentNode);
}
