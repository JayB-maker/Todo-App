let todoBox;
let todoContaier = document.getElementById("todos");

const savedTodo = JSON.parse(localStorage.getItem("letter"));

if(Array.isArray(savedTodo)) {
    todoBox = savedTodo;
    render();
}

else{
    todoBox = [];
}

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

function saveToLocalStorage() {
    localStorage.setItem("letter", JSON.stringify(todoBox));    
}