import { MenuController } from "./controllers/menu/menuController";

export class GameManager {
    constructor(){
        var navigationContainer = document.getElementById('navigationContainer');
        var contentContainer = document.getElementById('contentContainer');
this.controller = new MenuController(this, contentContainer );
    }
}