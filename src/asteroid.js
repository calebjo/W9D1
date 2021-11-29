function Asteroid (pos, radius = 50, color = 'grey') {
  // this.pos = pos;
  // this.vel = vel;
  // this.radius = radius;
  // this.color = color;

  return new MovingObject(pos, Util.randomVec(1), radius, color);
}
  
const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;
