var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',() => {
  it('should generetae correct message',()=>{
    var text = "test message";
    var message = generateMessage(text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({text});
  });
})
