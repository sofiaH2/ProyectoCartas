import {Controller} from "../controllers.js";
import { ThemesView } from "../themes/themesView.js";

export class ThemesController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ThemesView(this, parent);
    }
}