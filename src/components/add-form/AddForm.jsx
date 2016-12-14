import React from 'react';
import store from 'stores';
import * as types from 'actions/const';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let action = {
      type: types.TEXTFIELD_CHANGE,
      text: e.target.value
    };

    store.dispatch(action);
  }

  addUser(e) {
    e.preventDefault();

    let action = {
      type: types.USER_ADD,
      id: store.getState().textfield.text
    };

    store.dispatch(action);
    store.dispatch({type: types.TEXTFIELD_CLEAN});


  }

  render() {
    return (
      <form onSubmit={this.addUser}>
        <fieldset>
          <div>
            <label htmlFor="userId">Add user</label>
            <input
              id="userId"
              type="text"
              value={this.props.textfield.text}
              placeholder="insert new user ID"
              pattern="^[0-9]+$"
              onChange={this.handleChange}
              title="The Id must be number only" />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </fieldset>
        
      </form>
    );
  }
}

AppComponent.defaultProps = {
  user: {
    list: []
  }
};

export default AppComponent;
