var reducer = require('../../src/reducers/textfieldchanged');

describe('textfieldchanged', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
