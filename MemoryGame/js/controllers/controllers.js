
export class Controller {
    constructor(gameManager){
        this.gameManager = gameManager;
        this.view=null;
        this.service=null;
        this.modal=null;

    }

    delete(){
        this.view.delete();
    }


    hide(state){
        this.view.hide(state);
    }

}