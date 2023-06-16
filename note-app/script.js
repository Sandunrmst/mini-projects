//********************************/
// show popup box for add note 
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const titleTag = document.querySelector('.popup-box input');

let isUpdate = false, updateID;


addBox.addEventListener('click', () => {
    titleTag.focus();
    popupBox.classList.add("show");
});

//********************************/

//********************************/
// Close popup box
const closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', ()=> {
    popTitle = document.querySelector('header p');
    addNote.innerHTML = "Add Note";
    popTitle.innerHTML = "Add a New Note";
    popupBox.classList.remove("show");
});

//********************************/

//********************************/
// add note 
const addNote = document.querySelector('.popup-box button');
const descriptionTag = document.querySelector('.popup-box textarea');

//getting localstorage notes if exist and parsing them to js object or
//passing empty array to notes
//To save user notes this catch push elemnt from addNote event listner
const notesList = JSON.parse(localStorage.getItem("notes") || "[]");

//To show content save on web local storage
function showNotes(){

    // this part for remove duplicates note
    document.querySelectorAll(".note").forEach(e => e.remove());

    notesList.forEach( (note, index) => {
        let noteCard = `<li class="note">
                            <div class="details">
                                <p>${note.title}</p>
                                <span>${note.description}</span>
                            </div>
                            <div class="bottom-content">
                                <span>${note.date}</span>
                                <div class="settings">
                                    <span onClick="showMenu(this)" class="material-symbols-outlined">settings</span>
                                    <ul class="menu">
                                        <li onclick="updateNotes(${index},'${note.title}','${note.description}')" class="menu-align edit"><span class="material-symbols-outlined">edit</span> <span class="space">Edit</span></li>
                                        <li onClick="deleteNote(${index})" class="menu-align delete"><span class="material-symbols-outlined">delete</span> <span class="space">Delete</span></li>
                                    </ul>
                                </div>
                            </div>
                        </li>`;
        addBox.insertAdjacentHTML("afterend", noteCard);
    });
}
showNotes();

console.log(notesList);


//********************************/
// show setting when click on it 
function showMenu(elem){
    // this way we can select icon's parent element 
    // console.log(elem.parentElement.parentElement);
    elem.parentElement.classList.add("show");
    
    // remove show class from the setting menu on document click 
    document.addEventListener("click", e => {
        if(e.target.tagName != "xy" && e.target != elem) {
            elem.parentElement.classList.remove("show");
    
        }
    });

}

//********************************/
// Delete note 
function deleteNote(noteId){

    let confrimDelete = confirm("Are you sure you want to delete this note? 😊");
    if(!confrimDelete) return; // if not like to delete will close here.
    notesList.splice(noteId, 1); //Remove relavent note form array

    // saving updated notes to localstorage 
    localStorage.setItem("notes", JSON.stringify(notesList));
    showNotes();

}
//********************************/

//********************************/
// Update note

function updateNotes(noteId, title ,desc){
    isUpdate = true;
    updateID = noteId; // it assign is updateID front of the page
    addBox.click();

    titleTag.value = title;
    descriptionTag.value = desc;
    addNote.innerHTML = "Update Note";
    popTitle.innerHTML = "Update Note";
    console.log(noteId, title, desc);
}
//********************************/

addNote.addEventListener('click', e => {
    e.preventDefault(); /*This form has action therfor when click on button it will occur to stop it use this*/
    let noteTitle = titleTag.value; 
    let noteDescription = descriptionTag.value; 

    noteDescription = noteDescription.replace(/[\r\n]+/gm, "");  /** This will remove description aditional spases and many more */
    console.log(noteDescription);

    titleTag.value = ''; //This will clear input form
    descriptionTag.value = ''; //This will clear input form

    // get date 
    const months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    if(noteTitle || noteDescription){
        let dateObj = new Date();
        let month = months[ dateObj.getMonth() ]; 
        let day = dateObj.getDate();
        let year = dateObj.getFullYear(); 

        // create object hash table like python dictionaries 
        let noteInfo = {
            title: noteTitle, 
            description: noteDescription,
            date: `${month} ${day} ${year}`
        }

        if(!isUpdate){ // If not in note update mode
            notesList.push(noteInfo); // adding new note to notes
        }else{
            isUpdate = false; // need to false here 
            // if not it's mean note in update mode 
            notesList[updateID] = noteInfo; //update specific edit note

        }

        

        localStorage.setItem("notes", JSON.stringify(notesList));
        // this will save data on web local Storage 

        console.log(notesList);
        
        closeBtn.click(); /* This will auto close the popupbox when user click button add notes*/

        showNotes();

    }


});