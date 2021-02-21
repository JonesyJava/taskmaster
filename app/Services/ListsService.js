import { ProxyState } from "../AppState.js";
import Lists from "../Models/Lists.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService{
    constructor(){
        console.log("Lists service is working")
        ProxyState.on('lists', saveState)
    }

    create(rawList){
        ProxyState.lists = [new Lists(rawList), ...ProxyState.lists]
    }

    delete(listId){
        ProxyState.lists = ProxyState.lists.filter(l=> l.id != listId)
        ProxyState.tasks = ProxyState.tasks.filter(t=> t.id != listId)
    }
}

export const listsService = new ListsService()