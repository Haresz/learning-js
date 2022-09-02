// implementasi variabel

const todos = [];
const RENDER_EVENT = 'render-todo';
const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO_APPS'

// Mengatasi event default dari button submit

document.addEventListener('DOMContentLoaded', function(){
    const submitForm = document.getElementById('form')
    submitForm.addEventListener('submit', function (event){
        event.preventDefault();
        addTodo();
    });
    if (isStorageExist()){
        loadDataFromStorage();
    }
});

function addTodo(){
    const judul = document.getElementById('judul').value;
    const tahun = document.getElementById('tahun').value;
    const penulis = document.getElementById('penulis').value;

    const generateID = generateId();
    const todoObject = generateTodoObject(generateID, judul, tahun, penulis, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function generateId(){
    return +new Date();
}

function generateTodoObject(id, judul, tahun, penulis, isCompleted){
    return{
        id,
        judul,
        tahun,
        penulis,
        isCompleted
    }
}

document.addEventListener(RENDER_EVENT, function (){
    console.log(todos);
    const uncomplatedTODOList = document.getElementById('buku')
    uncomplatedTODOList.innerHTML ='';

    const completedTODOList = document.getElementById('done');
    completedTODOList.innerHTML ='';

    for (const todoItem of todos){
        const todoElement = makeTodo(todoItem);
        if (!todoItem.isCompleted)
            uncomplatedTODOList.append(todoElement);
        else
            completedTODOList.append(todoElement);
    }
});

// mencetak todo item

function makeTodo(todoObject){
    const textTitle = document.createElement('h6');
    textTitle.innerText = todoObject.judul;

    const writerYear = document.createElement('p');
    writerYear.innerText = todoObject.penulis + ' / ' + todoObject.tahun;

    const containerItem = document.createElement('div');
    containerItem.classList.add('item');
    containerItem.append(textTitle, writerYear);

    // tambahan
    const container = document.createElement('div');
    container.classList.add('list-buku');
    container.append(containerItem);
    container.setAttribute('id', `todo-${todoObject.id}`);
    const containerAction = document.createElement('div');
    containerAction.setAttribute('class', 'action');

    if (todoObject.isCompleted){
        const undoButton = document.createElement('img');
        undoButton.setAttribute('src', 'src/undo.svg');

        undoButton.addEventListener('click', function(){
            undoTaskFromCompleted(todoObject.id)
        });

        const hapus = document.createElement('img');
        hapus.setAttribute('src', 'src/hapus.svg');

        hapus.addEventListener('click', function(){
            removeTaskFromCompleted(todoObject.id)
        })
        containerAction.append(undoButton, hapus);
        container.append(containerAction);
    }
    else {
        const checkButton = document.createElement('img');
        checkButton.setAttribute('src', 'src/check.svg')
        
        checkButton.addEventListener('click', function() {
          addTaskToCompleted(todoObject.id);
        });

        const hapus = document.createElement('img');
        hapus.setAttribute('src', 'src/hapus.svg');

        hapus.addEventListener('click', function(){
            removeTaskFromCompleted(todoObject.id)
        });
        
        console.log(todoObject)
        containerAction.append(checkButton, hapus);
        container.append(containerAction);
      }
 
    return container;
}

function addTaskToCompleted(todoId){
    const todoTarget = findTodo(todoId);

    if (todoTarget == null)return;

    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findTodo(todoId){
    for(const todoItem of todos){
        if (todoItem.id === todoId){
            return todoItem;
        }
    }
    return null;
}

function findTodoIndex(todoId){
    for (const index in todos){
        if (todos[index].id === todoId){
            return index;
        }
    }

    return -1;
}

function removeTaskFromCompleted(todoId){
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1)return;

    todos.splice(todoTarget, 1);
    document.dispatchEvent(new Event (RENDER_EVENT));
    saveData();
}

function undoTaskFromCompleted(todoId){
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function saveData(){
    if (isStorageExist()){
        const parsed = JSON.stringify(todos);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function isStorageExist(){
    if (typeof (Storage) === undefined){
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

document.addEventListener(SAVED_EVENT, function(){
    console.log(localStorage.getItem(STORAGE_KEY));
});

function loadDataFromStorage(){
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null){
        for (const todo of data){
            todos.push(todo);
        }
    }
    document.dispatchEvent(new Event(RENDER_EVENT))
}