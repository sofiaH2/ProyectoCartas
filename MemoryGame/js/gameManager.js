import { MenuController } from "./controllers/menu/menuController.js";
import { DificultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { CreditsController } from "./controllers/credits/creditsController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { PlayController } from "./controllers/play/playController.js";
import { ScoresController } from "./controllers/scores/scoresControllers.js";

import { MENU_STATE, PLAY_STATE, CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, SCORES_STATE, THEMES_STATE, DIFFICULTY_MEDIUM, THEMES_FACES, THEMES_FOOD } from "./libs/constants.js";

export class GameManager {
    constructor() {
        this.difficulty=DIFFICULTY_MEDIUM
        this.themes=THEMES_FOOD

        this.controller = null;
        this.navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.contentContainer = document.getElementById('contentContainer');
        this.backBtn.onclick = this.goto.bind(this, MENU_STATE)

        this.menuController = new MenuController(this, this.contentContainer);
        this.presenting(MENU_STATE);

        console.dir(this.contentContainer);

        this.contentContainer.addEventListener('menu-button-click', (event) => {
            this.presenting(event.detail.state);
        })

        this.contentContainer.addEventListener('hide-complete', (event) => {
            this.presenting(event.detail.state);
        });

        this.contentContainer.addEventListener('save-Difficulty', (event) => {
            this.difficulty = event.detail.difficulty;
            this.saveDifficulty()
        });
        this.contentContainer.addEventListener('save-Themes', (event) => {
            this.themes = event.detail.themes;
            this.saveThemes()
        });

        this.contentContainer.addEventListener('username-entered', (event) => {
            this.username = event.detail.username;
            this.saveUsername(username);
        })

        this.loadDifficulty();
    }

    presenting(state) {
        if (this.controller !== null) {
            this.controller.delete();
            this.controller=null;
        }

        this.backBtn.classList.remove('hidden');
        switch (state) {
            case MENU_STATE:
                this.backBtn.classList.add('hidden');
                this.title.innerHTML = 'Menu';
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
        if (this.controller !== null) {
            this.controller.hide(state);
        }else{
            this.presenting(state);
        }

    }

    loadDifficulty(){
        if(localStorage.getItem('difficulty')){
            this.difficulty = localStorage.getItem('difficulty');
        }
    }

    saveDifficulty(){
        localStorage.setItem('difficulty', this.difficulty);
        }
    

    loadThemes(){
        if(localStorage.getItem('themes')){
            this.difficulty = localStorage.getItem('themes');
        }
    }
    
    saveThemes(){
        localStorage.setItem('themes', this.themes);
        }

    
}

