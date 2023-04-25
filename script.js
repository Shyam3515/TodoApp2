let todoList;
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if(Array.isArray(savedTodos)){
    todoList = savedTodos;
} else {
    todoList= [
        {name : 'make dinner',
        dueDate :  '12-12-23'},
        {name : 'wash clothes',
        dueDate :  '12-12-23'}
    ];
}

addTodoToPage();
function addTodoToPage(){
    let totalHTML = '';
    todoList.forEach((todoObject,index) =>{
        const {name, dueDate} = todoObject; //Object Destructuring
        //Generating HTML using JavaScript
        const html = 
        `  <div> ${name} </div>
           <div>${dueDate} </div>
           <button class="delete-todo-button js-delete-todo-button">Delete</button> 
       `;
        totalHTML += html;
    });
    document.querySelector('.todo-container').innerHTML = totalHTML; 

    // Delete button
    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        addTodoToPage();
      });
    });
}

//Onclick addtodo
function addTodo(){
    const inputElement = document.querySelector('.input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.dueDate');
    const dueDate = dateInputElement.value;
    if(name == '' || dueDate == ''){
        alert('Enter a todo...');
        return;
    }else{
        todoList.push(
            // {name : name,
            // dueDate :  dueDate}
            {//short Hand property
                name,
                dueDate
            }
        );
    }
    inputElement.value = '';
    dateInputElement.value = '';
    addTodoToPage();
    saveTodos();
}

//Local Storage
function saveTodos(){
    localStorage.setItem('todos',JSON.stringify(todoList))
}
