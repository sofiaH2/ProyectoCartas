import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE, } from "../../libs/constants.js";
import { div} from "../../libs/html.js";
import { View } from "../view.js";


export class MenuView extends View{
    constructor(controller, parent){
        super(controller, parent);
        this.container.className = 'menuView';
        
        var loginBtn = div({
        innerHTML : 'Login',
        className:'game-button loginView', onclick:this.onButtonClick.bind(this, LOGIN_STATE)}, this.container);

        

        var playBtn = div({
        innerHTML : 'Play',
        className:'game-button playView',onclick:this.onButtonClick.bind(this, PLAY_STATE)}, this.container);


        var creditsBtn = div({
        innerHTML: 'Credits',
        className:'game-button creditsView',onclick:this.onButtonClick.bind(this, CREDITS_STATE)}, this.container);


        var dificultyBtn = div({
        innerHTML:'Dificulty',
        className:'game-button difucultyView',onclick:this.onButtonClick.bind(this, DIFFICULTY_STATE)}, this.container);


        var scoresBtn = div({
        innerHTML: 'Scores',
        className:'game-button scoresView',onclick:this.onButtonClick.bind(this, SCORES_STATE)}, this.container);

        var themesBtn = div({
        innerHTML : 'Themes',
        className:'game-button themesView',onclick:this.onButtonClick.bind(this, THEMES_STATE)}, this.container);
    }
    onButtonClick(state, event){
        this.controller.goto(state);
    }

}