let get_name: () => string;
let get_state: () => number;
let set_name:(string) => void;
let set_state:(number) => void;

let press_button: (pressed_button: Button, myWatch: Watch) => void;
let get_hour: () => number;
let get_minute: () => number;
let get_second: () => number;
let set_hour: (h: number) => void;
let set_minute: (m: number) => void;
let set_second: (s: number) => void;
let get_screen_lighting: () => boolean;

let change_light:() => void
let change_mode:() => void
let increase:() => void

let loop: (myWatch : Watch) => void;

class Button{
    _name : string;
    _state : number;


    constructor(n: string, s: number){
        this._name = n;
        this._state = s;
    }

    get get_name() {  
      return this._name; 
    }
    get get_state() {  
      return this._state; 
    }

    set set_name(new_name : string) {  
      this._name = new_name;  
    }  
    set set_state(new_state : number) {  
      this._state = new_state;  
    }  
}

class Watch{

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

  
  loop = () =>{
    hour = myWatch.get_hour;
    minute = myWatch.get_minute;
    second = myWatch.get_second;

    if (second == 59){
      if(minute == 59){
        if (hour == 23){
          myWatch.set_hour = 0;
        }
        else{
          myWatch.set_hour = hour + 1;
        }
        myWatch.set_minute = 0;
      }
      else{
        myWatch.set_minute = minute + 1;
      }
      myWatch.set_second = 0;
    }
    else{
      myWatch.set_second = second + 1;
    }

    document.getElementById('hours').innerHTML = hour.toLocaleString();
    if (hour <10){
      document.getElementById('hours').innerHTML = '0' + hour.toLocaleString();
    }
    document.getElementById('minutes').innerHTML = minute.toLocaleString();
    if (minute <10){
      document.getElementById('minutes').innerHTML = '0' + minute.toLocaleString();
    }
    document.getElementById('seconds').innerHTML = second.toLocaleString();
    if (second <10){
      document.getElementById('seconds').innerHTML = '0' + second.toLocaleString();
    }

    lightButton.addEventListener('click', (e:Event) => myWatch.change_light());
    modeButton.addEventListener('click', (e:Event) => myWatch.change_mode());
    increaseButton.addEventListener('click', (e:Event) => myWatch.increase());
    console.log(myWatch.mode_button.get_state);
    console.log(myWatch.get_screen_lighting);
}


var time = new Date();
var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();
var myWatch = new Watch(hour, minute, second);
var modeButton = document.querySelector('#button_mode');
var increaseButton = document.querySelector('#button_increase');
var lightButton = document.querySelector('#button_light');

setInterval(loop, 1000) ;

