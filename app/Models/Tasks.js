import { generateId } from "../Utils/GenerateId.js";

export default class Task {
    constructor({title, id = generateId(), listId, check}){
        this.title = title
        this.id = id
        this.listId = listId
        this.check = check || false
    }

    get Template(){
        return /*html*/`
        <div class="col-12 card mt-2 py-3 card-bg">
            <h5>${this.title}<button type="button" class="text-danger close" onclick="app.tasksController.delete('${this.id}')">
            <span>&times;</span></button><span class="form-check"><input class="form-check-input" type="checkbox" value="" ${this.check ? "check" : ""} onclick="app.tasksController.checks" id="defaultCheck1"></span>
            </h5>
        </div>
        `
    }
}