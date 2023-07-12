    /*@name main.js
    @file add a small description for this file.
    @author Sofia Herrera,ep@sofiaherrera.com
    @version 1.0.0*/
    alert("main");
"use strict";
alert("main");
import {GameManager} from "./gameManager.js";

window.addEventListener('load', init, false);

function init(){
    const gameManager=new GameManager();
}

