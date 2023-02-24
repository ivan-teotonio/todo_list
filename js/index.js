class Todo{

    constructor(){
        //qquantos items ixistem de cada tarefa
        this.totalTasks = document.querySelectorAll('.task').length
    }

    addTask(taskText){

        //clonar o template
        let template = document.querySelector('.task').cloneNode(true)
        //remove a classe hide
        template.classList.remove('hide')
        //manipular o texto
        let templateText = template.querySelector('.task-title')
        templateText.textContent = taskText

        let list = document.querySelector('#task-container')

        //inserir a lista
        list.appendChild(template)

        //adiciona evento as tasks
        this.addEvents()

        this.checkTask('add')

    }

    removeTask(task){

         //achar o elemento pai
         let parentEl = task.parentElement

         //remover da lista
         parentEl.remove()

         this.checkTask('remove')
    }

    completeTask(task){

        //adiciona a classe de done
        task.classList.add('done')
      
    }

    addEvents(){
        //vai ver a última task adicionada e vai adicionar os dois eventos

        //vai pegar todos os botoes de remover
        let removeBtns = document.querySelectorAll('.fa-trash')
        //vai pegar o último botão de remover
        let removeBtn = removeBtns[removeBtns.length -1]

         //vai pegar todos os botoes de remover
         let doneBtns = document.querySelectorAll('.fa-check')
         //vai pegar o último botão de remover
         let doneBtn = doneBtns[doneBtns.length -1]

        //adicionar evento de remover
        removeBtn.addEventListener('click',function(){
            todo.removeTask(this)
        })

        //adicionar evento de completar taarefa
        doneBtn.addEventListener('click',function(){
            todo.completeTask(this)
        })
    }

    checkTask(command){

        let msg = document.querySelector('#empty-tasks')

        //a lógica de adicionar ou remover tasks
        if(command === 'add'){
            this.totalTasks += 1
        }else if(command === 'remove'){
            this.totalTasks -= 1
        }

        //checa se te mais de uma task e adiciona ou remove a class
        if(this.totalTasks == 1){
            msg.classList.remove('hide')
        }else{
            msg.classList.add('hide')
        }

    }

}

let todo = new Todo()

//eventos
let addBtn = document.querySelector('#add')

//adicionar um evento ao botão
addBtn.addEventListener('click',function(e){
    e.preventDefault()
    //pegar o texto
    let tasktext = document.querySelector('#task')

   //adicionar o texto
   if(tasktext.value !== ''){
     todo.addTask(tasktext.value)
   }

   //limpar o texto para adicionar outra
   tasktext.value = ''
})