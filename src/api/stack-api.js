//import 'whatwg-fetch';
import axios from 'axios';
import store from 'stores';
import * as types from 'actions/const';

export function getUserCard(id){
  return axios.get(`https://api.stackexchange.com/2.2/users/${id}?site=stackoverflow`)
    .then(response => {

      let action = {
        type: types.USER_GET_CARD,
        card: Object.assign({},response.data.items[0])
      };
      store.dispatch(action);
      console.log(store.getState());
      return response;
    });
}
