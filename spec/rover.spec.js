const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

// Test 7
it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(360);
    expect(rover.position).toEqual(360);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
});
//Test 8
it("response returned by receiveMessage contains the name of the message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(360);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.message).toEqual(message.name);
  //console.log(response);


});
//Test 9
it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
  let message = new Message('two commands', commands);
  let rover = new Rover(360);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.results.length).toEqual(2);
  //console.log(response);

});
//Test 10
it("responds correctly to the status check command", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(360);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.message).toEqual(message.name);
 // console.log(response);

});

//Test 11
it("responds correctly to the mode change command", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
  let message = new Message('New mode command', commands);
  let rover = new Rover(360);
  let roverResponse = rover.receiveMessage(message);
 // expect(roverResponse.message).toEqual(message.results[1].completed, true);
  expect(roverResponse.message).toEqual(message.results[1].roverStatus.mode,'LOW_POWER')
  //console.log(response);

});
//Test 12
it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
  let message = new Message('New mode command', commands);
  let rover = new Rover(360);
  let roverResponse = rover.receiveMessage(message);
  expect(roverResponse.message).toEqual(message.results[0].complete,'false');
  expect(roverResponse.message).toEqual(message.results[1].roverStatus.mode,'LOW_POWER')
  //console.log(response);

});
//Test 13
it("responds with the position for the move command",function() {
  let commands = [new Command('MOVE', 300), new Command ('STATUS_CHECK')];
  let message = new Message('New position', commands);
  let rover = new Rover(360);
  let roverResponse = rover.receiveMessage(message);
  //expect(myResponse.message).toEqual(message.results[0].completed, true);
  //expect(myResponse.message).toEqual(results[0].roverStatus.position, 360)
  expect(rover.position).toEqual(360);
  expect(roverResponse.results[1]).toEqual(true)
  

});
});
