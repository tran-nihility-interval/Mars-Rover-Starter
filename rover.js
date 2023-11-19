class Rover {
   // Write code here!
   constructor(position, mode, generatorWatts) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
      if(!position){//
         throw Error("Expect Position value");//
      }//
      
   }
   receiveMessage(message) {
      let roverResponse = {
         message: message.name,
         results: []
      }
      for (let x = 0; x < message.commands.length; x++) {
         roverResponse.results[x] = {completed: 'true'};
         let roverStatus = {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
         }
      for(let command in message.commands) {//
         if(message.commands[x].commandType === 'STATUS_CHECK') {
            roverResponse.results[x].completed = true;
            roverResponse.results[x].roverStatus = roverStatus;
         } else if(message.commands[x].commandType === 'MODE_CHANGE') {
            roverResponse.results[x].completed = true;
            if(message.commands[x].value === 'LOW_POWER') {
               this.mode = message.commands[x].value;
               roverStatus.mode = this.mode;
               roverStatus.mode = message.commands[x].value;
               roverResponse.results[x].roverStatus = roverStatus;
            } else {
               this.mode = message.commands[x].value;
               roverStatus.mode = this.mode;
               roverResponse.results[x].roverStatus = roverStatus;
            }
         } else {
            if(this.mode === 'NORMAL') {
            this.position = message.commands[x].value;
            roverStatus.position = this.position;
            roverResponse.results[x].roverStatus = roverStatus;
         
            } else {
               roverResponse.results[x].completed = false;
            }
         }        
       }
      }
      return roverResponse
  }
}

 
   


   
   
      
   

      
  

  
  


module.exports = Rover;