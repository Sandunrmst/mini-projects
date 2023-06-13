const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.getElementById("date").innerHTML = today.toDateString();

function time() {
    const data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    var  ampm_time = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;

    if(h < 10)
        h = "0" +h;
    if(m < 10)
        m = "0" + m;
    if(s < 10)
        s = "0" + s;

    document.getElementById("time").innerHTML = h +":"+ m + ":" + s + " " + ampm_time;
    setTimeout('time()', 1000); //it's better use 500 timeout in milisecond 1000 -> 1 second
}


const list_element = document.getElementById("list");
const create_btn_element = document.getElementById("create");

let todos = [];

create_btn_element.addEventListener('click', CreateNewTodo);

function CreateNewTodo(){
    const item = {
        id: new Date().getTime(),
        text: "",
        complete: false
    }

    todos.unshift(item); // unshift add new items to front of the array
    // push use to add element to end of the array

    const { item_el, input_el } = CreateTodoElement(item);

    list_element.prepend(item_el); //prepend add item to front of array
    //append will add end of the array

    input_el.removeAttribute("disabled");
    input_el.focus();

    Save();
}

// {/* <div class="item">
//     <input type="checkbox" />
//     <input type="text" value="Todo content goes here" disabled />
//     <div class="actions">
//         <button class="material-icons">edit</button>
//         <button class="material-icons remove-btn">delete</button>
//     </div>
// </div> */}

function CreateTodoElement(item){
    const item_el = document.createElement("div");
    item_el.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.complete;

    if(item.complete){
        item_el.classList.add("complete");

    }

    const input_el = document.createElement("input");
    input_el.type = "text";
    input_el.value = item.text;
    input_el.setAttribute("disabled", "");

    const action_el = document.createElement("div");
    action_el.classList.add("actions");

    const edit_btn_el = document.createElement("button");
    edit_btn_el.classList.add("material-icons");
    edit_btn_el.innerHTML = "edit";

    const remove_btn_el = document.createElement("button");
    remove_btn_el.classList.add("material-icons", "remove-btn");
    remove_btn_el.innerHTML = "delete";

    action_el.append(edit_btn_el);
    action_el.append(remove_btn_el);

    item_el.append(checkbox);
    item_el.append(input_el);
    item_el.append(action_el); 

    checkbox.addEventListener("change", () => {
        item.complete = checkbox.checked;
        if(item.complete){
            item_el.classList.add("complete");
        }else{
            item_el.classList.remove("complete");
        }

        Save();
    });

    input_el.addEventListener('input', () => {
        item.text = input_el.value;
    });

    input_el.addEventListener("blur", () => {
        input_el.setAttribute("disabled", "");
        Save();
    });

    edit_btn_el.addEventListener("click", () => {
        input_el.removeAttribute("disabled");
        input_el.focus();
    });

    remove_btn_el.addEventListener("click", () => {
        todos = todos.filter(t => t.id != item.id);

        item_el.remove();

        Save();
    });

    return { item_el, input_el, edit_btn_el, remove_btn_el }

}

// Save to in web browser storage

function DisplayTodos(){ // Display again when user refresh the browser
    Load();
    
    for(let i = 0; i < todos.length; i++){
        const item = todos[i];

        const  { item_el } = CreateTodoElement(item);

        list_element.append(item_el);
    }
}

DisplayTodos();

function Save(){
    const save = JSON.stringify(todos);

    localStorage.setItem("my_todos", save);
}

function Load() {
    const data = localStorage.getItem("my_todos");

    if (data){
        todos = JSON.parse(data);
    }
}