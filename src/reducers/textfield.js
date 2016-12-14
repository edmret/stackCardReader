
import * as types from 'actions/const';

const initialState = {
  text: ''
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case types.TEXTFIELD_CHANGE: {
      let nextState = Object.assign({}, action);
      nextState.text = action.text;
      return nextState;
    }

    case types.TEXTFIELD_CLEAN: {
      return initialState;
    }


    default: {
      return state;
    }
  }
}

module.exports = reducer;
