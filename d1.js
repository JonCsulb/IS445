 class Animal {
     constructor(name) {
         this.name = name
         this.speed = 0 
     }


     accelerate(speed){
         this.speed += speed
         console.log(`Run speed is ${this.speed}`)
     }
 }

 class Rabbit extends Animal {
     hide(){
         console.log(`${this.name}hides`) // use back tick
     }
 }

 const peter = new Rabbit('Peter')
 peter.accelerate(10)
 peter.hide()
