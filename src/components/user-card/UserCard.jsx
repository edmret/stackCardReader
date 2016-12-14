import React from 'react';
import store from 'stores';
import * as types from 'actions/const';
import {getUserCard} from 'api/stack-api';

import './user-card.scss';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    getUserCard(this.props.user.id);
  }

  removeUser(removeID){

      let action = {
          type: types.USER_REMOVE,
          id: removeID
      };
      store.dispatch(action);
  }

  render() {
    return (
      <article  className="box notification">
        <button className="delete" onClick={() => this.removeUser(this.props.user.id)}></button>

        <div className="infoCard media">
          <figure className="media-left">
            <img
              className="image is-128x128"
              src={this.props.user.profile_image}
              alt="profile_image" />
          </figure>
            <div className="media-Content">
                <h1><strong>John Smith{this.props.user.display_name}</strong> <small>({this.props.user.id})</small></h1>
                <h6>Badges</h6>
                <ul>
                    <li>
                        Gold: {this.props.user.badge_counts.gold}
                    </li>
                    <li>
                        Silver: {this.props.user.badge_counts.silver}
                    </li>
                    <li>
                        Bronze: {this.props.user.badge_counts.bronze}
                    </li>
                </ul>
            </div>
        </div>
      </article>
    );
  }
}

AppComponent.defaultProps = {
  user: {
    badge_counts: {
        gold: 0,
        silver: 0,
        bronze: 0
    }
  }
};

export default AppComponent;
