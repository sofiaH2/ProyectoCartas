export class Score{
    constructor(clicks, score, time, username = false){
        this.clicks=clicks;
        this.score=score;
        this.time=time;
        this.username=username;
    }
}