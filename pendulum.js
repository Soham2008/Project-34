class Pendulum {
    constructor(x, y, vcolor) {
        var ball_options = {
            restitution: 1,
            friction: 0,
            frictionAir: 0.0,
            slope: 1,
            inertia: Infinity
        }
        this.body = Bodies.circle(x, y, 25, ball_options);
        this.color = vcolor;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        strokeWeight(3);
        stroke("yellow")
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 25, 25);
    }
}