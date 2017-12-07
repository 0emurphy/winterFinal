//Defines how all Devices with work.

function Device(t,ma,c){

    //Instance Variables
    this.type = t;
    this.milliAmps = ma;
    this.capacity = c;
    this.juice = 1;
    this.state = "off"  ;
    this.rate = [0.0015,0.0235,0.23];

    //Instance Functions
    this.on = function(){
        if(this.state == "off" && this.juice >0){
           this.state = "idle";
        }
        else if (this.state == "idle"){
           this.state = "active"
        }
 };

 this.off = function(){
      if(this.state == "idle" || this.state == "on"){
            this.state = "off";
         }
      };

this.wake = function(){
      if(!(this.state == "active")){
            this.state = "ative";
      }
};

this.sleep = function(){
      if(this.state == "active"){
            this.state = "idle";
      }
};

this.power = function(){
      return this.juice;
}

this.use = function(min){
      let time = min/60;
      if(this.state = "off"){
            this.juice = this.juice - this.rate[0]*time;
      }
      else if(this.state = "idle"){
            this.juice = this.juice - this.rate[1]*time;
      }
      else{
            this.juice = this.juice - this.rate[2]*time;
      }
     if(this.juice < 0){
           this.juice = 0;
     }
};

    this.charge = function(min){
        //adds more electricity to the device's juice depending on its state
        if(this.state == "off"){
            let charge = (this.milliAmps / this.capacity);
            let output = 1 - this.rate[0];
            let time = min / 60;
            this.juice = this.juice + charge*output*time;
        }
        else if(this.state == "idle"){
             let charge = (this.milliAmps / this.capacity);
             let output = 1 - this.rate[1];
             let time = min / 60;
             this.juice = this.juice + charge*output*time;
       }
        else if(this.state == "active"){
             let charge = (this.milliAmps / this.capacity);
             let output = 1 - this.rate[2];
             let time = min / 60;
             this.juice = this.juice + charge*output*time;
       }

        //resets juice to 1 if it has exceeded 1
        if(this.juice > 1){
             this.juice = 1;
       }



    };

}//end of the device declaration

//defines the testing code.
function main(){}
//runs the testing code.
main();
