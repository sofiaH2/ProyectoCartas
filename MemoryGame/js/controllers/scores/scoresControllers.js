import {Controller} from "../controllers.js";
import { ScoresView } from "../scores/scoresView.js";

export class ScoresController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ScoresView(this, parent);
    }
}