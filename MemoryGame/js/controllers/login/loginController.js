import {Controller} from "../controllers.js";
import { LoginView } from "../login/loginView.js";

export class LoginController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new LoginView(this, parent);
    }
}