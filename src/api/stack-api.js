import 'whatwg-fetch';
import store from 'stores';
import * as types from 'actions/const';

export function getUserCard(id){
  return fetch(`https://api.stackexchange.com/2.2/users/${id}?site=stackoverflow`)
    .then(response => {

      console.log(response.json());
      let responseJson = response.json();

      let action: {
        type: types.USER_GET_CARD,
        card: responseJson
      }
      store.dispatch(action);
      return response;
    });
}
