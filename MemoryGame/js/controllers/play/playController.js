import {Controller} from "../controllers.js";
import { PlayView } from "../play/playView.js";

export class PlayController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new PlayView(this, parent);
    }
}