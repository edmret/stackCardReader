/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import {addUser} from '../actions/user-actions';
const actions = { addUser };
module.exports = actions;
