import React,{useState} from 'react';
import AddUser from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';

function App(props) {
  const [usersList, setUsersList]=useState([]);

  const addUserHandler = (newUser) =>{
    setUsersList((prevUserList) => {
      return [...prevUserList,newUser]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
