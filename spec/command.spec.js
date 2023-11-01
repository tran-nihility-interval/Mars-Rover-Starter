const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
describe("Command class", function() {
//Test 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  }); //Result pass spec/command.spec.js and fail spec/message.spec.js & spec/rover.spec.js
//Test 2
  it("constructor sets command type", function() {
   // expect( function() { new Command();}).toThrow(new Error('Command type required.'));
    let command = new Command('STATUS_CHECK'); //get command STATUS_CHECK from Rover Command Types
    expect(command.commandType).toEqual('STATUS_CHECK'); //get command STATUS_CHECK from Rover Command Types
  });//Result pass spec/command.spec.js and fail spec/message.spec.js & spec/rover.spec.js
  //Test 3
  it("constructor sets a value passed in as the 2nd argument", function() {
    let modeCommand = new Command("MODE_CHANGE", "NORMAL"); 
    expect(modeCommand.value).toEqual("NORMAL")
  });
  
  


});