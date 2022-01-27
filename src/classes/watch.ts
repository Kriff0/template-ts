import { Button} from './button.js';
export class Watch{

    //Time
    private _hour: number;
    private _minute: number;
    private _second: number;
    private _screen: boolean;
    

    //Buttons
    mode_button = new Button('Mode', 0);
    increase_button = new Button('Increase', 0);
    light_button = new Button('Light', 0);

    constructor(h: number, m: number, s: number){
      this._hour = h;
      this._minute = m;
      this._second = s;
      this._screen = false; //the screen is not lighted    
    }

    get get_hour() {  
      return this._hour; 
    }
    get get_minute() {  
      return this._minute; 
    }
    get get_second() {  
      return this._second; 
    }
    get get_screen_lighting(){
      return this._screen;
    }

    set set_hour(new_hour : number) {  
      this._hour = new_hour;  
    }  
    set set_minute(new_minute : number) {  
      this._minute = new_minute;  
    }  
    set set_second(new_second : number) {  
      this._second = new_second;  
    }  

    //functions :

    change_light = () =>{
      //this.change_screen_lighting;
      //this._screen = !this.get_screen_lighting;
      this._screen = true;
    }
    change_mode = () =>{
      var state = this.mode_button.get_state;
      if (state <2){
        this.mode_button.set_state = state + 1;
      }
      else{
        this.mode_button.set_state = 0;
      }
    }
    increase = () =>{
      var mode_state = this.mode_button.get_state;
      var hour = this.get_hour;
      var minute = this.get_minute;
      if (mode_state == 0){
        console.log("hour");
        if(hour == 23){
          this.set_hour = 0;
        }
        else{
          this.set_hour = hour + 1;
        }
      }
      if (mode_state == 1){
        console.log("minute");
        if(minute == 59){
          this.set_hour = hour + 1;
          this.set_minute = 0;
        }
        else{
          this.set_minute = minute + 1;
        }
      }
    }
}