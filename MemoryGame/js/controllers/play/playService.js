import { Card } from "../../models/card.js";
import { Service } from "../service.js";


export class PlayService extends Service {

    constructor(controller) {
        super(controller);
        this.controller=controller
    }
    
    getCards(difficulty, themes){
        var cards = [];
        //var url = '../../../data/cards.json';
        var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/${difficulty}/type/${themes}`;
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload=()=>{
            if (request.status===200){
                var data = JSON.parse(request.response);
                data.cards.forEach(cardData =>{
                    var card = new Card(cardData.id, cardData.icon);
                    cards.push(card);
                });
            }else{
                console.error('error requesting cards')
            }
            this.controller.showCards(cards);
        }
        request.send();


        

    }

    sendScore(score, clicks, time, username){
        var url = `https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores`;

        var request=new XMLHttpRequest();
        request.open('POST', url);
        request.send(JSON.stringify({score: score, clicks: clicks, time: time, username: username}));
    }
}