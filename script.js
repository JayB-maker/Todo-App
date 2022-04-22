let acceptTodo = document.getElementById('accept-todo')
    submitButton = document.getElementById('submit')
    todoWrapper = document.getElementById('todos');

    function removeAllChildNodes(parent) {
    
        console.log("parent", parent);

        parent.textContent = "";
    }

    function getTodoElements() {
        let todoItems = getLocalStorage();
        let todoElements = localStorage.getItem("letter");
        let todoContainer = document.createElement('div');
            todoContainer.classList.add('container');
            todoWrapper.appendChild(todoContainer);

            todoItems.map ( (eachItem, key) => {

            let todoElement = document.createElement('input');
                todoElement.setAttribute("readOnly", "readOnly");
                todoElement.value = eachItem.itemName;
                todoContainer.appendChild(todoElement);
            })
    }

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (acceptTodo.value === '') {
            alert('Please add a todo');
            return;
        }

        else{

            let newTodoItem = {itemName:acceptTodo.value, createdDate:new Date()}
            saveToLocalStorage(newTodoItem);
            console.log(getLocalStorage());
            getTodoElements();
        }
    })

    const saveToLocalStorage = (newTodoItem) =>{
    let getItems = localStorage.getItem("letter") ? JSON.parse(localStorage.getItem("letter")): [ ];
    getItems.push(newTodoItem);
    localStorage.setItem('letter',JSON.stringify(getItems));

    }

    function getLocalStorage() {
        let getItems = localStorage.getItem("letter") ? JSON.parse(localStorage.getItem("letter")): [ ];
            return getItems;
    }