import React from 'react';
import store from 'stores';
import * as types from 'actions/const';
import {getUserCard} from 'api/stack-api';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    getUserCard(this.props.user);
  }

  render() {
    return (
      <article>
        <h1>display_name ({this.props.user.id})</h1>
        <div className="infoCard">
          <figure>
            <img
              src="https://www.gravatar.com/avatar/d4d284c3c214d52f004df795aee394e3?s=128&d=identicon&r=PG"
              alt="profile_image" />
          </figure>
          <p>
            <h6>Badges</h6>
            <ul>
              <li>
                Gold: 4
              </li>
            </ul>
          </p>
        </div>
      </article>
    );
  }
}

AppComponent.defaultProps = {
  user: {
    list: []
  }
};

export default AppComponent;
