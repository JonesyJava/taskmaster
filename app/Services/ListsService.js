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
        let close = window.confirm("Are you sure you want to delete this list? This cannot be undone...")
        // @ts-ignore
        if(close == true){
            ProxyState.lists = ProxyState.lists.filter(l=> l.id != listId)
        }
    }
}

export const listsService = new ListsService()