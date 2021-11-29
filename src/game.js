const Asteroid = require("./asteroid");

function Game () {
    const dim_x = 900;
    const dim_y = 600;
    const numAsteroids = 10;
    
    this.asteroids = []
    
    while (this.asteroids.length < numAsteroids) {
        this.asteroids.push(this.addAsteroids());
    }
    
}

Game.prototype.addAsteroids = function () {
    return new Asteroid(this.randomPosition());
}

Game.prototype.randomPosition = function () {
    let pos_x = Math.floor(Math.random() * dim_x);
    let pos_y = Math.floor(Math.random() * dim_y);
    return [pos_x, pos_y];
}

Game.prototype.draw() = function (ctx) {
    ctx.clearRect(0, 0, 900, 600);
    Asteroid.draw();
}

Game.prototype.moveObjects = function () {


}