import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE, } from "../../libs/constants.js";
import { div, img, p } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class MenuView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'menuView';
        this.elementsContainer.className = 'menuView-elementsContainer';

        this.container.removeChild(this.fadeContainer);

        img({
            src: './src/imagen/logoPP.png', className: 'menuView-logo'
        }, this.elementsContainer);

        p({
            innerHTML: 'Are you ready?', className: 'game-text menuView-game-text'
        }, this.elementsContainer);

        var playBtn = div({
            innerHTML: 'Play',
            className: 'game-button playView menuView-button-play', onclick: this.onButtonClick.bind(this, PLAY_STATE)
        }, this.elementsContainer);

        p({
            innerHTML: 'Let´s check other things!!', className: 'game-text menuView-game-text'
        }, this.elementsContainer);

        var buttonsContainer = div({
            className: 'menuView-buttonContainer'
        }, this.elementsContainer);

        var creditsBtn = div({
            innerHTML: 'Credits',
            className: 'game-button creditsView', onclick: this.onButtonClick.bind(this, CREDITS_STATE)
        }, buttonsContainer);

        var dificultyBtn = div({
            innerHTML: 'Dificulty',
            className: 'game-button difucultyView', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE)
        }, buttonsContainer);

        var scoresBtn = div({
            innerHTML: 'Scores',
            className: 'game-button scoresView', onclick: this.onButtonClick.bind(this, SCORES_STATE)
        }, buttonsContainer);

        var themesBtn = div({
            innerHTML: 'Themes',
            className: 'game-button themesView', onclick: this.onButtonClick.bind(this, THEMES_STATE)
        }, buttonsContainer);

        var loginBtn = div({
            innerHTML: 'Login',
            className: 'game-button loginView', onclick: this.onButtonClick.bind(this, LOGIN_STATE)
        }, this.elementsContainer);
    }

    onButtonClick(state) {
        var event = new CustomEvent('menu-button-click', {

            detail: {
                state: state,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });

        this.container.dispatchEvent(event);
    }

}