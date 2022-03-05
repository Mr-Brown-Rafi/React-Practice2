import React from 'react';
import Card from '../UI/Card';
import Styles from './UsersList.module.css';


const UsersList = (props) => {
    return (
      <Card className={Styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.key}>
              {user.name} ({user.age} Years Old)
            </li>
          ))}
        </ul>
      </Card>
    );
}

export default UsersList;