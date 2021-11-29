const Asteroid = require('./asteroid.js');
const MovingObject = require('./moving_object.js');
window.asteroid = Asteroid;
window.MovingObject = MovingObject;

Asteroid();

document.addEventListener('DOMContentLoaded', () => {
    const canvas1 = document.getElementById('canvas');
    const ctx = canvas1.getContext('2d');
    canvas1.width = 900;
    canvas1.height = 600;
    
    const circle = new MovingObject([100, 100], [1, 1], 50, "red");
    circle.draw(ctx); 
})
