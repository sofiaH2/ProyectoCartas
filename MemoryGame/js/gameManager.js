import { MenuController } from "./controllers/menu/menuController.js";
import { DificultyController} from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { CreditsController} from "./controllers/credits/creditsController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { PlayController} from "./controllers/play/playController.js";
import { ScoresController } from "./controllers/scores/scoresControllers.js";

import{MENU_STATE, PLAY_STATE, CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, SCORES_STATE, THEMES_STATE} from "./libs/constants.js";

export class GameManager {
    constructor(){
        this.controller=null;
        this.navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.contentContainer = document.getElementById('contentContainer');
        this.backBtn.onclick= this.goto.bind(this, MENU_STATE)

        this.homeController = new MenuController(this, this.contentContainer);

        this.presenting(MENU_STATE);

    }

    presenting(state){
        if(this.controller!== null) {
            this.controller.delete();
            this.controller=null;
        }
        this.backBtn.classList.remove('hidden');
        switch (state) {
            case MENU_STATE:
                this.title.innerHTML = 'Menu';
                this.controller = new MenuController(this, this.contentContainer);
                break;
            
            case PLAY_STATE:
                this.title.innerHTML = 'Play';
                this.controller = new PlayController(this, this.contentContainer);
                break;

            case CREDITS_STATE:
                this.title.innerHTML = 'Credits';
                this.controller = new CreditsController(this, this.contentContainer);
                break;

                case DIFFICULTY_STATE:
                    this.title.innerHTML = 'Difficulty';
                    this.controller = new DificultyController(this, this.contentContainer);
                    break;
                
                case LOGIN_STATE:
                    this.title.innerHTML = 'Login';
                    this.controller = new LoginController(this, this.contentContainer);
                    break;
    
                case SCORES_STATE:
                    this.title.innerHTML = 'Scores';
                    this.controller = new ScoresController(this, this.contentContainer);
                    break;
                    case THEMES_STATE:
                        this.title.innerHTML = 'Themes';
                        this.controller = new ThemesController(this, this.contentContainer);
                        break;
            default:
                break;
        }
    }
    goto(state) {
        if(this.controller!== null) {
            this.controller.hide(this.presenting.bind(this, state));
       }else{this.presenting(state);}
    }
}
