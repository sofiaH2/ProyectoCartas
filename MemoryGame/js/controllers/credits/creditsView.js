import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'creditsView';
        this.elementsContainer.parentElement.style.width = '100%';


        var text = document.createElement('p');
this.elementsContainer.appendChild(text);
text.innerHTML = 'Créditos del Juego "Memory Game"<br>' +
    'Desarrollado por: Sofía Herrera<br>' +
    'Equipo de Desarrollo:<br>' +
    '- Diseño de Juego: Sofía Herrera<br>' +
    
   
'- Programación: Sofía Herrera<br>' +
    '**Agradecimientos Especiales:** Queremos expresar nuestro agradecimiento a todas<br> las personas que han contribuido con su apoyo y comentarios<br> valiosos durante el desarrollo de "Memory Game".<br> Su retroalimentación ha sido fundamental para hacer de <br>este juego una experiencia entretenida y desafiante.<br>' +
    
   
'**Fecha de Creación:** 16 de Agosto de 2023<br>' +
    '**Contacto:** Para consultas, comentarios o asistencia técnica,<br> por favor contactar a Sofía Herrera a través de<br> <a href="mailto:sofia.herrera@gmail.com">sofia.herrera@gmail.com</a>.<br>' +
    '**Derechos de Autor:** "Memory Game" y todos los elementos visuales<br> y sonoros asociados son propiedad exclusiva de Sofía Herrera,<br> bajo los derechos de autor correspondientes.';


    }
}