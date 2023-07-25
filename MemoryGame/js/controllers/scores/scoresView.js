import { controllerView } from "../controllerView.js";

export class ScoresView extends controllerView{
    constructor(controller, parent){
        super(controller, parent);
        this.elementsContainer.className = 'scoresView';
        this.elementsContainer.parentElement.style.width = '100%';
        

}
}