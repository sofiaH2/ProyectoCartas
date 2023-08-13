const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const food = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈','🍒', '🍑',
'🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🌶', '🥒', '🥦', '🌽', '🥕', '🥗', '🥔', '🍠',
'🥜', '🍯', '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍗', '🍖', '🥩', '🍤', '🥚', '🍳',
'🥓', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🥙', '🌮', '🌯', '🍜', '🥘', '🍲', '🥫',
'🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🍘', '🥟', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰',
'🎂', '🥧', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥠', '☕', '🍵', '🥣', '🍼',
'🥤', '🥛', '🍺', '🍻', '🍷', '🥂', '🥃', '🍸', '🍹', '🍾', '🍶', '🥄', '🍴', '🍽', 
'🥢', '🥡',]

app.get('/cards/:difficulty/:theme', (request, response) => {

    var cards = [];
    
    if(request.params !== null){
        if(request.params.difficulty !== null && request.params.theme !== null){
            const difficulty=request.params.difficulty;
            const type=request.params.theme;
            console.log(difficulty);
        };
    };
    response.send(JSON.stringify(cards));
});



app.get('/scores', (request, response) => {
    console.log(request); // Línea repetida
    console.log(request); // Línea repetida
    response.send('Lista de scores');
});

app.listen(port, () => {
    console.log(`La aplicación de ejemplo está escuchando en el puerto ${port}`);
});

var cards = `{
    "cards": [
        {
            "isDiscovered": false,
            "icon": "🥜",
            "id": 49
        },
        {
            "isDiscovered": false,
            "icon": "🍏",
            "id": 0
        },
        {
            "isDiscovered": false,
            "icon": "🥝",
            "id": 16
        },
        {
            "isDiscovered": false,
            "icon": "🥝",
            "id": 16
        },
        {
            "isDiscovered": false,
            "icon": "🥭",
            "id": 13
        },
        {
            "isDiscovered": false,
            "icon": "🥭",
            "id": 13
        },
        {
            "isDiscovered": false,
            "icon": "🍉",
            "id": 6
        },
        {
            "isDiscovered": false,
            "icon": "🥒",
            "id": 22
        },
        {
            "isDiscovered": false,
            "icon": "🍹",
            "id": 56
        },
        {
            "isDiscovered": false,
            "icon": "🥜",
            "id": 49
        },
        {
            "isDiscovered": false,
            "icon": "🍹",
            "id": 56
        },
        {
            "isDiscovered": false,
            "icon": "🍏",
            "id": 0
        },
        {
            "isDiscovered": false,
            "icon": "🥎",
            "id": 53
        },
        {
            "isDiscovered": false,
            "icon": "🍉",
            "id": 6
        },
        {
            "isDiscovered": false,
            "icon": "🥎",
            "id": 53
        },
        {
            "isDiscovered": false,
            "icon": "🥒",
            "id": 22
        }
    ]
}`;