import { MenuController } from "./controllers/menu/menuController.js";
import { DificultyController} from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";

export class GameManager {
    constructor(){
        var navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        var contentContainer = document.getElementById('contentContainer');
        this.goto(1);
    }

    goto(controllerID){
        switch (controllerID) {
            case 1:
                this.title.innerHTML = 'Menu';
                this.controller = new MenuController(this, contentContainer);
                break;
            
            case 2:
                this.title.innerHTML = 'Dificulty';
                this.controller = new DificultyController(this, contentContainer);
                break;

            case 3:
                this.title.innerHTML = 'Themes';
                this.controller = new ThemesController(this, contentContainer);
                break;
            default:
                break;
        }
    }
}

