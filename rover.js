class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
      
    }
   receiveMessage(message) {
      let results = [];
      //message = message.name;
      let roverResponse = {
         message: message.name,
         results: results.length
      }
      return roverResponse;
   };
   //for (let x = 0; x < commands.length; x++) //add new results to the command array
   if (commands= [x]["commandType"] == 'MOVE') {
      if (this.mode == 'LOW_POWER') {
      results.push({"completed": false})
   }
      else {
         this.position = message.commands[x].value
         results.push({"completed": true})
      }
   }
}
 
   


   
   
      
   

      
  

  
  


module.exports = Rover;