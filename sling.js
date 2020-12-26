class Sling {
    constructor(vbodyA, vpointB) {
        var options = {
            bodyA: vbodyA,
            pointB: vpointB,
            stiffness: 1,
            angularStiffness: 1,
            length: 220

        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.pointB
        stroke("red")
        strokeWeight(3);
        line(posA.x, posA.y, posB.x, posB.y);
    }
}