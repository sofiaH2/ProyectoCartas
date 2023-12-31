import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MEDIUM, THEMES_ANIMALS, THEMES_ACTIVITIES, THEMES_FOOD } from "../../libs/constants.js";
import { ControllerView } from "../controllerView.js";
import { div, img, p } from "../../libs/html.js";

export class DificultyView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'difucultyView';
        this.elementsContainer.parentElement.style.width = '100%';

        div({
            innerHTML: 'Low', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_LOW)
        }, this.elementsContainer);
        div({
            innerHTML: 'Medium', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_MEDIUM)
        }, this.elementsContainer);
        div({
            innerHTML: 'High', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_HIGH)
        }, this.elementsContainer);


    }

    onButtonClick(difficulty) {
        var event = new CustomEvent('save-Difficulty', {

            detail: {
                difficulty: difficulty,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });

        this.container.dispatchEvent(event);
    }
}
