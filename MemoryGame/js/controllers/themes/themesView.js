import { THEMES_FACES, THEMES_FLAGS, THEMES_FOOD } from "../../libs/constants.js";
import { div} from "../../libs/html.js";
import { View } from "../view.js";


export class ThemesView extends View{
    constructor(controller, parent){
        super(controller, parent);
        this.elementsContainer.className = 'themesView';

    div({
        innerHTML:'Faces', className: 'game-button', onclick: this.onButtonClick.bind
        (this, THEMES_FACES) }, this.elementsContainer);
    div({
        innerHTML:'Food', className: 'game-button', onclick:this.onButtonClick.bind
        (this, THEMES_FOOD)}, this.elementsContainer);
    div({
        innerHTML:'Flags', className: 'game-button', onclick:this.onButtonClick.bind
        (this, THEMES_FLAGS)}, this.elementsContainer);


    }

    onButtonClick(themes){
        var event = new CustomEvent('save-Themes', {
                
            detail:{
                themes: themes,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
            });

            this.container.dispatchEvent(event);
        }
}


