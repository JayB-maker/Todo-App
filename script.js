let acceptTodo = document.getElementById('accept-todo')
    submitButton = document.getElementById('submit')
    todoWrapper = document.getElementById('todos');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        saveToLocalStorage

        if (acceptTodo.value == '') {
            alert('Please add a todo');
            return;
        }

        else{
            let todoContainer = document.createElement('div');
            todoContainer.classList.add('container');
            todoWrapper.appendChild(todoContainer);

            let todoElement = document.createElement('input');
            todoElement.setAttribute("readOnly", "readOnly");
            todoElement.value = acceptTodo.value;
            todoContainer.appendChild(todoElement);

            let editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.innerHTML = 'EDIT';
            todoContainer.appendChild(editButton);

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.innerHTML = 'DELETE';
            todoContainer.appendChild(deleteButton);

            editButton.addEventListener('click', () => {
                if((editButton.innerHTML).toLowerCase() == 'edit'){
                    todoElement.removeAttribute("readOnly");
                    editButton.innerHTML = "SAVE";
                }

                else{
                    todoElement.setAttribute("readOnly", "readOnly");
                    editButton.innerHTML = 'EDIT';
                }
            })

            deleteButton.addEventListener('click', () => {
                todoWrapper.removeChild(todoContainer);
            })
        }
    })

    let saveToLocalStorage = () =>{
        localStorage.setItem('letter', todoElement);
    }