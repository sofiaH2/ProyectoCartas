import { createElement } from "../../libs/html.js";
import { View } from "../view.js";


export class MenuView extends View{
    constructor(controller, parent){
        super(controller, parent);
        this.container.className = 'menuView';

        var text = p({
        innerHTML : 'HOOLA',
        className : 'menuView_text'

        }, this.container); console.dir(text);
        
        var loginBtn = div({
        innerHTML : 'Login',
        className:'game-button',
        }, this.container);

        

        var playBtn = div({
        innerHTML : 'Play',
        className:'game-button',
        }, this.container);


        var creditsBtn = div({
        innerHTML: 'Credits',
        className:'game-button',
        }, this.container);


        var dificultyBtn = div({
        innerHTML:'Dificulty',
        className:'game-button',
        }, this.container);


        var scoresBtn = div({
        innerHTML: 'Scores',
        className:'game-button',
        }, this.container);

        var themesBtn = div({
        innerHTML : 'Themes',
        className:'game-button',
        }, this.container);


}
}