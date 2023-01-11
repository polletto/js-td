class Projectile extends Sprite {
    constructor({position = {x:0, y:0}, enemy}){
        super({position, img: 'img/projectile.png', frames: {max: 1}})
        this.position = position;
        this.velocity = {
            x: 0,
            y: 0
        }
        this.enemy = enemy
        this.radius = 10
    }

    update(){
        this.draw();

        const angle = Math.atan2(
            this.enemy.center.y - this.position.y, 
            this.enemy.center.x - this.position.x
            )
        const power = 5;
        this.velocity.x = Math.cos(angle) * power
        this.velocity.y = Math.sin(angle) * power

        this.position.x += Math.round(this.velocity.x)
        this.position.y += Math.round(this.velocity.y)

        //console.log(this.position);
    }
}