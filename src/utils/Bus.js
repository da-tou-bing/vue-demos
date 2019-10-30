export default class Bus{
  constructor(){
    this.eventMaps = {}
  }
  
  $xxx(event,cb){
    this.eventMaps[event] = this.eventMaps[event] || [];
    this.eventMaps[event].push(cb);
  }

  $ooo(event,args){
    if(this.eventMaps[event]){
      this.eventMaps[event].forEach(cb=> cb(args));
    }
  }
}