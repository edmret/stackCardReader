import * as types from './const';

export function addUser(id) {
  return {
    type: types.USER_ADD,
    id
  };
}
