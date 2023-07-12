
import { Controller } from "../controllers.js";
import { MenuView } from "./menuViews.js";

export class MenuController extends Controller{
    constructor(gameManager, parent){
        super (gameManager);
        this.view = new MenuView(this,parent);
}
}
    