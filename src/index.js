const Asteroid = require('./asteroid.js');
const MovingObject = require('./moving_object.js');
// window.thisAsteroid = new Asteroid({ pos: [30, 30] });
// window.MovingObject = MovingObject;

// const thisAsteroid = new Asteroid();

document.addEventListener('DOMContentLoaded', () => {
    const canvas1 = document.getElementById('canvas');
    const ctx = canvas1.getContext('2d');
    canvas1.width = 900;
    canvas1.height = 600;
    
    const asteroid1 = new Asteroid([60, 60]);
    asteroid1.draw(ctx); 
})
