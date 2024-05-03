import { getObstacleEvents } from './computer-vision';

interface AutonomousCarProps{
  isRunning?: boolean;
  steeringControl: Steering;
}


interface Events{
  [event: string]: boolean;
}

interface AutonomousCar {
  isRunning: boolean;
  respond: (events: Events) => void;
}

interface Control{
  execute: (command: string) => void;
}

interface Steering extends Control{
  turn: (direction: string) => void;
}

class SteeringControl implements Steering{
  execute(command: string){
    console.log("Executing: "+command)
  }
  turn(direction: string){
    this.execute(direction);
  }
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;
  constructor(props: AutonomousCarProps){
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  };
  respond(events: Events){
    if(this.isRunning){
      Object.keys(events).forEach((eventKey) =>{
        if(!eventKey) return;
        if(eventKey === "ObstacleLeft") {
          this.steeringControl.turn("right")
          }
        if(eventKey === "ObstacleRight") {
          this.steeringControl.turn("left")
          }
      })
    }else{console.log("not running pookie")}
  }
}

let autonomousCar = new Car({
  isRunning: true, 
  steeringControl: new SteeringControl()
});

autonomousCar.respond(getObstacleEvents())
