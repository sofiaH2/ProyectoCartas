import {Controller} from "../controllers.js";
import { CreditsView } from "../credits/creditsView.js";

export class CreditsController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new CreditsView(this, parent);
    }
}