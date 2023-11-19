const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

// Test 7
it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
});
//Test 8
it("response returned by receiveMessage contains the name of the message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
  let message = new Message('Name of message', commands);
  let rover = new Rover(98382);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.message).toEqual('Name of message');
 


});
//Test 9
it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
  let message = new Message('two commands', commands);
  let rover = new Rover(98382);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.results.length).toEqual(2);
  

});
//Test 10
it("responds correctly to the status check command", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK'), new Command ('MODE_CHANGE', 'NORMAL'), new Command('MOVE', 360)];
  let message = new Message('Status check commands', commands);
  let rover = new Rover(98382);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.results[3].roverStatus.position).toEqual(360);
  expect(roverResponse.results[1].roverStatus.mode).toEqual('LOW_POWER');
  expect(roverResponse.results[0].roverStatus.generatorWatts).toEqual(110);
 

});

//Test 11
it("responds correctly to the mode change command", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK'), new Command('MOVE', 365), new Command ('MODE_CHANGE', 'NORMAL')];
  let message = new Message('mode change', commands);
  let rover = new Rover(98382);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.results[0].completed).toEqual(true);
  expect(roverResponse.results[3].roverStatus.mode).toEqual('NORMAL');
  expect(roverResponse.results[0].roverStatus.mode).toEqual('LOW_POWER');
});
//Test 12
it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
  let commands = [new Command('MODE_CHANGE', 'NORMAL'), new Command ('STATUS_CHECK'), new Command ('MOVE', 400)];
  let message = new Message('move to low power mode', commands);
  let rover = new Rover(98382);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.results[1].completed).toEqual(true);
  expect(roverResponse.results[2].roverStatus.position).toEqual(400)
 

});
//Test 13
it("responds with the position for the move command",function() {
  let commands = [new Command('MOVE', 400), new Command ('STATUS_CHECK')];
  let message = new Message('New position', commands);
  let rover = new Rover(98382);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.results[1].roverStatus.position).toEqual(400);
  expect(roverResponse.results[1].completed).toEqual(true);
  

});
});
