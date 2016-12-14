import React from 'react';
import AddForm from './add-form/AddForm';
import UserCard from './user-card/UserCard';
import './app.scss';

class AppComponent extends React.Component {


  render() {

    const {user, textfield} = this.props;

    return (
      <div className="index box">
        <AddForm user={user} textfield={textfield} />
          <ul>
            {this.props.user.list.map(function(usr) {
              return <UserCard key={usr.id} user={usr} />;
            })}
          </ul>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
