import { input, div } from "../../libs/html.js";
import { controllerView } from "../controllerView.js";

export class LoginView extends controllerView{
    constructor(controller, parent){
        super(controller, parent);
        this.elementsContainer.className = 'loginView';
        this.elementsContainer.parentElement.style.width = '100%';

        this.usernameIn= input({placeholders: 'Username',className:
        'loginView-usernameIn'}, this.elementsContainer);
        this.okBtn= div({innerHTML:'OK', className:'game-button', onclick:this.onOKBtn.bind(this)},
         this.elementsContainer);
        }

        onOKBtn(){
            let username = this.usernameIn.value;
            if(username !==''){
                let event = new CustomEvent('username-entered',{
                    detail:{
                        username: username,
                    },
                    bubbles: true,
                    cancelable: true,
                    composed: false,
                    });
            
                    this.container.dispatchEvent(event);
                

            }else{

            }
        }
}