const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;

app.use(cors());

const food = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈','🍒', '🍑',
'🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🌶', '🥒', '🥦', '🌽', '🥕', '🥗', '🥔', '🍠',
'🥜', '🍯', '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍗', '🍖', '🥩', '🍤', '🥚', '🍳',
'🥓', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🥙', '🌮', '🌯', '🍜', '🥘', '🍲', '🥫',
'🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🍘', '🥟', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰',
'🎂', '🥧', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥠', '☕', '🍵', '🥣', '🍼',
'🥤', '🥛', '🍺', '🍻', '🍷', '🥂', '🥃', '🍸', '🍹', '🍾', '🍶', '🥄', '🍴', '🍽', 
'🥢', '🥡',];

const animals = ['🐶','🐱','🐭','🐹','🐰','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽','🐸',
'🐵','🙈','🙉','🙊','🐒','🦍','🐔','🐧','🐦','🐤','🐣','🐥','🐺','🦊','🐗','🐴','🦓',
'🦒','🦌','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦗','🕷','🕸','🦂','🐢','🐍','🦎','🦀',
'🦑','🐙','🦐','🐠','🐟','🐡','🐬','🦈','🐳','🐋','🐊','🐆','🐅','🐃','🐂','🐄','🐪',
'🐫','🐘','🦏','🐐','🐏','🐑','🐎','🐖','🦇','🐓','🦃','🕊','🦅','🦆','🦉','🐕','🐩',
'🐈','🐇','🐀','🐁','🐿','🦔','🐾','🐉','🐲','🦕','🦖'];

const activities = ['⚽','🏀','🏈','⚾','🎾','🏐','🏉','🎱','🏓','🏸','🥅','🏒','🏑',
'🏏','🥌','⛳','🏹','🎣','🥊','🥋','⛸','🎿','🛷','⛷','🏂','🏋️‍♀️','🏋️‍♂️','🤺','🤼‍♀️','🤼‍♂️',
'🤸‍♀️','🤸‍♂️','⛹️‍♀️','⛹️‍♂️','🤾‍♀️','🤾‍♂️','🧗‍♀️','🧗‍♂️','🏌️‍♀️','🏌️‍♂️','🧘‍♀️','🧘‍♂️','🧖‍♀️','🧖‍♂️','🏄‍♀️','🏄‍♂️','🏊‍♀️',
'🏊‍♂️','🤽‍♀️','🤽‍♂️','🚣‍♀️','🚣‍♂️','🏇','🚴‍♀️','🚴‍♂️','🚵‍♀️','🚵‍♂️','🎽','🎖','🏅','🥇','🥈','🥉','🏆',
'🏵','🎗','🎫','🎟','🎪','🤹‍♀️','🤹‍♂️','🎭','🎨','🎬','🎤','🎧','🎼','🎹','🥁','🎷','🎺',
'🎸','🎻','🎲','🎯','🎳','🎮','👾','🎰'];

app.get('/cards/:difficulty/:theme', (request, response) => {

        var data={cards:[]};
        
        if(request.params !== null){
            if(request.params.difficulty !== null && request.params.theme !== null){
                const difficulty=request.params.difficulty;
                const theme=request.params.theme;
                var cards = getCards(difficulty,theme);
                var card1=[...cards];
                var card2=[...cards];
                cards.forEach(card =>{
                    data.cards.push(card);
                });

                cards.forEach(card =>{
                    data.cards.push(card);
                });

                shuffleArray(data.cards);
        }
            
    }
    response.send(JSON.stringify(data));
});



app.get('/scores', (request, response) => {
    console.log(request); // Línea repetida
    console.log(request); // Línea repetida
    response.send('Lista de scores');
});

app.listen(port, () => {
    console.log(`La aplicación de ejemplo está escuchando en el puerto ${port}`);
});


function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1))+min;
}
function getIconIndex(iconIndex, iconList){

        let newIconIndex = randomInteger(0,(iconList.length-1));

        if(iconIndex===newIconIndex){
        return getIconIndex(iconIndex,iconList);
        
    }
    return newIconIndex;
}

function getCards(difficulty,theme){
    var cards = [];
    var iconList = null;
    switch (theme) {
        case 'food':
            iconList=food;
            break;
            case 'animals':
            iconList=animals;
            break;
            case 'activities':
            iconList=activities;
            break;
    
        default:
            iconList=food;
            break;
    }

    for (let i = 0; i < difficulty; i++) {
        var iconIndex=getIconIndex(-1, iconList);
        var card ={
            "isDiscovered": false,
            "icon": iconList[iconIndex],
            "id": iconIndex
        }
        cards.push(card);
    }
    return cards;
};

function shuffleArray(array){
    for(let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
}


