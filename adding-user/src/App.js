import React, { useState } from 'react';
import './App.css';
import Wrapper from './components/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    });
  }

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </Wrapper>
  );
}

export default App;
