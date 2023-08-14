import { THEMES_ANIMALS, THEMES_ACTIVITIES, THEMES_FOOD } from "../../libs/constants.js";
import { div } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class ThemesView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'themesView';
        this.elementsContainer.parentElement.style.width = '100%';
        div({
            innerHTML: 'Animals', className: 'game-button', onclick: this.onButtonClick.bind
                (this, THEMES_ANIMALS)
        }, this.elementsContainer);
        div({
            innerHTML: 'Food', className: 'game-button', onclick: this.onButtonClick.bind
                (this, THEMES_FOOD)
        }, this.elementsContainer);
        div({
            innerHTML: 'Activities', className: 'game-button', onclick: this.onButtonClick.bind
                (this, THEMES_ACTIVITIES)
        }, this.elementsContainer);


    }

    onButtonClick(themes) {
        var event = new CustomEvent('save-Themes', {

            detail: {
                themes: themes,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });

        this.container.dispatchEvent(event);
    }
}


