import { ProxyState } from "../AppState.js";
import Task from "../Models/Tasks.js";
import { saveState } from "../Utils/LocalStorage.js";


class TasksService{
    constructor(){
        ProxyState.on('tasks', saveState)
    }

    create(rawTask){
        ProxyState.tasks = [new Task(rawTask), ...ProxyState.tasks]
        console.log(ProxyState.tasks)
    }

    delete(taskId){
        ProxyState.tasks = ProxyState.tasks.filter(t=> t.id != taskId)
    }
}

export const tasksService = new TasksService()