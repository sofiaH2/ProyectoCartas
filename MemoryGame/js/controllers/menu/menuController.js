
import { Controller } from "../controllers.js";
import { MenuView } from "./menuViews.js";

export class MenuController extends Controller{
    constructor(gameManager, parent){
        super (gameManager);
        this.view = new MenuView(this, parent);
}
goto(state){
    this.gameManager.goto(state);
}
}
    