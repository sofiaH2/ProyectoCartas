export class View{
    constructor(controllers) {
        this.controllers=controllers;
        this.parent=this.parent;
        this.container = document.createElement('div');
        this.parent.appendChild(this.container);
    }
}