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

    //adds an user/employee ID
    case types.USER_ADD: {

      let nextState = Object.assign({},state);


      if( nextState.list.filter(u => action.id === u.id ).length > 0 || !action.id ){
        return nextState;
      }

      nextState.list.push({
        id: action.id,
        badge_counts: {
            gold: 0,
            silver: 0,
            bronze: 0
        }
      });
      return nextState;
    }

    //gets the entire information of given ID
    case types.USER_GET_CARD: {
      let nextState = Object.assign({},state);
      let user = nextState.list.find(u => action.card.user_id == u.id );
      Object.assign(user, action.card);


      return nextState;
    }


    //removes from ID
    case types.USER_REMOVE: {
        let usersCopy = Object.assign({},state);
        usersCopy.list  =  usersCopy.list.filter(u => action.id !== u.id );
        return  Object.assign({},usersCopy);
    }



    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
