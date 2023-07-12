import {Controller} from "../controllers.js";
import { DificultyView } from "../difficulty/difficultyView.js";

export class DificultyController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new DificultyView(this, parent);
    }
}