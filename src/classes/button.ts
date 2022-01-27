export class Button{
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