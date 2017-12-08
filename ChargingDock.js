const Device = require('./Device.js');


//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports = ["undefined", "undefined", "undefined", "undefined", "undefined", "undefined", "undefined","undefined"]; //finish from instructions
    this.leds = ["red", "red", "red", "red", "red", "red", "red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
        for(let s = 0; s < this.ports.length; s++){
             if(this.leds[s] == "red"){
                   this.ports[s]= dvc;
                   this.leds[s] = "yellow";
                   break;
             }
       }
    };

    this.unplug = function(dvcIdx){
        if(this.leds[dvcIdx] == "yellow" || this.leds[dvcIdx]=="green"){
             let temp = this.ports[dvcIdx];
             this.ports[dvcIdx] = "undefined";
             this.leds[dvcIdx] = "red";
             return temp;
      }
    };

    this.chargeAll = function(min){
        for(s = 0; s < this.ports.lengh; s++){
             if(this.leds[s] == "yellow" || "green"){
                   this.ports[s].charge(min);
             }
             if(this.ports[s].juice >= 0.99){
                   this.leds[s] = "green";
             }
       }
    };


}

//defines the testing code
function main(){
      let dock = new ChargingDock();
      let DelsPhone = new Device("iphone", 1500, 5000);

      dock.plug(DelsPhone);
      console.log(dock.unplug(0));
}

//runs the main code
main();
