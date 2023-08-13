import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'creditsView';
        this.elementsContainer.parentElement.style.width = '100%';


        var text = document.createElement('p')
        this.elementsContainer.appendChild(text);
        text.innerHTML = 'Echo por:  Sofia Herrera Herrera';
        
        var text = document.createElement('p')
        this.elementsContainer.appendChild(text);
        text.innerHTML = 'Tipo:Juego de Memoria';

        var text = document.createElement('p')
        this.elementsContainer.appendChild(text);
        text.innerHTML = 'Clase:Programacion Web Orientada a Objetos';

        var text = document.createElement('p')
        this.elementsContainer.appendChild(text);
        text.innerHTML = 'Universidad:Estudiante de Cenfotec';

        var text = document.createElement('p')
        this.elementsContainer.appendChild(text);
        text.innerHTML = 'Agosto 2023';


    }
}