import { tasksService } from "../Services/TasksService.js"
import { ProxyState } from "../AppState.js"

export default class TasksController{
    constructor(){
    }

    create(event, listId){
        event.preventDefault()
            let form = event.target
            let rawTask = {
                title: form.title.value,
                listId: listId
                
            }
    tasksService.create(rawTask)
    }
    delete(taskId){
        tasksService.delete(taskId)
    }
}