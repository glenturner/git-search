import logo from './logo.svg';
import './App.css';
import { DebouncedInput } from './Components';
import { GitHubService, SearchUsersAttributes, UserAttributes } from './Api/GitHubService';
import React, { useState, useEffect, useCallback, ChangeEvent } from 'react'
function App() {

  const [foundUsers, setFoundUsers] = useState<SearchUsersAttributes[]>([])
  const [userAttributes, setUserAttributes] = useState<UserAttributes[]>([])
  const [debouncedValue, setDebouncedValue] = useState('');

  const doThisDelayedThing = async (value: any) => {
    const foundUsers = await GitHubService.SearchUsersAsync(value)
    setFoundUsers(foundUsers)
    console.log(`FOUND USERS: `, foundUsers);
  }

  const getUserAttributes = async (value: any) => {
    const foundUser = await GitHubService.GetUserAttributesAsync(value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DebouncedInput onChange={doThisDelayedThing} />
      </header>
    </div>
  );
}

export default App;
