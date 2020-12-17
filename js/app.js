//alert('Funciona!');

class Task{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}


class UI {
    addTask(task){
        const taskDisplay = document.getElementById('taks');
        const element = document.createElement('div');
        element.className = 'card my-2';
        element.innerHTML = `
            <div class="card-header d-flex justify-content-between">
                ${task.title}
                <buttom class="btn btn-danger btn-sm">x</buttom>
            </div>
            <div class="card-body">
                ${task.description}
            </div>
        `;
        taskDisplay.appendChild(element);
    }

    deleteTaks(){
        
    }

    showMessage(){

    }

    clearForm(){
        document.getElementById('tasksForm').reset();
    }
}

//DOM Events

const tasksForm = document.getElementById('tasksForm');


tasksForm.addEventListener('submit', e =>{

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    console.log(title, description);

    const task = new Task(title, description);

    const ui = new UI();

    ui.addTask(task);
    ui.clearForm();

    e.preventDefault();
});

