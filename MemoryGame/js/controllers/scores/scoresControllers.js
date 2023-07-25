import {Controller} from "../controllers.js";
import { ScoresView } from "../scores/scoresView.js";
import { ScoresService } from "./scoresServices.js";

export class ScoresController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ScoresView(this, parent);
        this.service = new ScoresService(this);
        this.service.getScores();
        this.scores=[];
    }

    showScores(scores){
        this.scores=scores;
        this.view.showScores(this.scores);

    }
}