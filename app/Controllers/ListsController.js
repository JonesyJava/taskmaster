import { listsService } from "../Services/ListsService.js";
import { ProxyState } from "../AppState.js";


function _draw(){
    let listsElem = document.getElementById("lists")
    let template = ""
    
    ProxyState.lists.forEach(l=> template += l.Template)
    listsElem.innerHTML = template
}


export default class ListsController{
    constructor() {
        console.log("lists controller working!")
        ProxyState.on("lists", _draw)
        ProxyState.on("tasks", _draw)
    }
    create(event){
        event.preventDefault()
        let form = event.target
        let rawList = {
            name: form.name.value,
            color: form.color.value,
            BGcolor: form.BGcolor.value
        }
        listsService.create(rawList)
    }

    delete(listsId) {
        listsService.delete(listsId)
    }
}