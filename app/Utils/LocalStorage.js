import { ProxyState } from "../AppState.js";
import List from "../Models/Lists.js";
import Task from "../Models/Tasks.js"


export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
        
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.lists = data.lists.map(l => new List(l))
        ProxyState.tasks = data.tasks.map(t => new Task(t))
    }
}