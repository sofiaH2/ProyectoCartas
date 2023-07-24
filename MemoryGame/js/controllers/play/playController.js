import {Controller} from "../controllers.js";
import { PlayView } from "../play/playView.js";
import { PlayService } from "./playService.js";

export class PlayController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new PlayView(this, parent);
        this.cards=null;
        this.service = new PlayService(this);
        this.service.getCards(this.gameManager.difficulty, this.gameManager.themes);
    }

    showCards(cards) {
        //TODO
        this.cards= cards;
        this.view.showCards(cards);
    }
}