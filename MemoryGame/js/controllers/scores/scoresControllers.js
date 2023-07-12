import {Controller} from "../controllers.js";
import { ScoresView } from "../play/playView.js";

export class ScoresController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ScoresView(this, parent);
    }
}