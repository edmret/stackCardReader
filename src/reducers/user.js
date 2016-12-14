/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import * as types from '../actions/const';

const initialState = {
  list:[]
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case types.USER_ADD: {

      let nextState = Object.assign({},state);

      console.log(nextState.list);

      if( nextState.list.filter(u => action.id === u.id ).length > 0 ){
        return nextState;
      }

      nextState.list.push({id: action.id});
      return nextState;
    }

    case types.USER_GET_CARD: {

      //let nextState = Object.assign({},state);
      //nextState.list.push(action.id);
      return nextState;
    }



    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
