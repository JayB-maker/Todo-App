let todoBox;
let todoContaier = document.getElementById("todos");

// PUSHING THE VALUE IN OUR TEXTBOX INTO AN ARRAY
function addTodo() {
    let acceptTodo = (document.getElementById('accept-todo')).value;
    let id = "" + new Date().getTime();

    if (acceptTodo === "") {
        alert("field can't be empty");
        return;
    }

    else{
        todoBox.push({todoName: acceptTodo,
                      id : id}
        );

        render();
        saveToLocalStorage();
    }
}
//--------------------------------------------------------------------------------------

//FUNCTION THAT CONTROL THE DELETE BUTTON
function deleteTodo(event) {

    let todList = event.target;
    let idToDelete = todList.id;

    todoBox = todoBox.filter(function (todoss) {
        if(todoss.id === idToDelete){
            return false;
        } else{
            return true;
        }
    });

    render();
    saveToLocalStorage();
}
//---------------------------------------------------------------------------------------

//FUNCTION THAT DISPLAY THE TODOS
function render() {
    todoContaier.innerHTML = "";

    todoBox.forEach(function (todoList) {
        let todoWrapper = document.createElement('div');
        todoWrapper.classList.add('container');
        let todoitems = document.createElement("input");
        todoitems.setAttribute("readOnly", "readOnly");
        todoitems.value = todoList.todoName;
        todoWrapper.appendChild(todoitems);
        todoContaier.appendChild(todoWrapper);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerText = "DELETE";
        deleteButton.id = todoList.id;
        todoWrapper.appendChild(deleteButton);
        deleteButton.onclick = deleteTodo;
    }) 
}
//----------------------------------------------------------------------------------

//CONVERTING AN ARRAY TO A STRING AND STORING IT IN A LOCALSTORAGE
function saveToLocalStorage() {
    localStorage.setItem("letter", JSON.stringify(todoBox));    
}
//----------------------------------------------------------------------------------

// ACCESSING LOCALSTORAGE AND CONVERTING IT TO AN ARRAY FROM STRING
const savedTodo = JSON.parse(localStorage.getItem("letter"));

if(Array.isArray(savedTodo)) {
    todoBox = savedTodo;
    render();
}

else{
    todoBox = [];
}
//------------------------------------------------------------------------