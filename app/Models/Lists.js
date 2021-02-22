import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";

export default class List{
    constructor({name, color, BGcolor, id = generateId()}) {
        this.name = name
        this.color = color
        this.BGcolor = BGcolor
        this.id = id
    }

    get Template(){
        return /*html*/`
        <div class="col-3 card card-main container-fluid border-dark my-4 mx-5" style="background-color: ${this.BGcolor}">  
            <h5 class="card-header display-4" style="color:${this.color}">${this.name}<button class="text-danger close" onclick="app.listsController.delete('${this.id}')"><span>&#9747;</span></button></h5>
            <div class="justify-content-center text-center">
                <h5 class="fontstyle" style="color:${this.color}">Tasks</h5>
                <form onsubmit="app.tasksController.create(event, '${this.id}')">
                    <div class="form-group">
                        <input class="form-control text-center" type="text" name="title" placeholder="What would you like to get done today?" pattern=".{3,50}" required>
                        <button class="btn-outline-success rounded mt-2" type="submit">Add Task</button>
                        <div class="row">
                            ${this.Tasks}
                        </div>
                 </div>
                </form>
            </div>
    </div>
        `
    }

    get Tasks(){
        let template = ''
        let tasks = ProxyState.tasks.filter(t=> t.listId == this.id) 
        tasks.forEach(t => template += t.Template)
        return template
    }
}