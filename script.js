let acceptTodo = document.getElementById('accept-todo')
    todo = document.getElementById('todos')
    submit = document.getElementById('submit');

    
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        if(!acceptTodo.value){
            alert('Add a Todo');
            return;
        }

        else{
            let todoList = document.createElement('div');
            todoList.classList.add('container');
            todo.appendChild(todoList);

            let todoo = document.createElement('input');
            todoo.setAttribute("readOnly", "readOnly");
            todoList.appendChild(todoo);
            todoo.value = acceptTodo.value;

            let editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.innerHTML = 'EDIT';
            todoList.appendChild(editButton);

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.innerHTML = 'DELETE';
            todoList.appendChild(deleteButton);

            editButton.addEventListener('click', () => {
                if (editButton.innerHTML == "EDIT") {
                    todoo.removeAttribute("readOnly");
                    editButton.innerText = "SAVE";
                }

                else {
                    todoo.setAttribute("readOnly", "readOnly");
                    editButton.innerText = "EDIT";
                }
                
            })

            deleteButton.addEventListener('click', () => {
                todo.removeChild(todoList);
            })
        }
    })