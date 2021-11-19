import React, { useState, useEffect, useCallback } from 'react'
import { Flex, LandingSection, Navbar, UserSearch } from './Components';
import { GitHubService, SearchUsersAttributes } from './Api/GitHubService';
function App() {

  const [foundUsers, setFoundUsers] = useState<SearchUsersAttributes[]>([])
  const [debouncedValue, setDebouncedValue] = useState('');

  const handleUserSearch = async (value: any) => {
    const foundUsers = await GitHubService.SearchUsersAsync(value)
    setFoundUsers(foundUsers)
    console.log(`FOUND USERS: `, foundUsers);
  }

  return (
    <Flex column style={{ width: '100%' }}>
      <Navbar />
      <LandingSection />
      <UserSearch data={foundUsers} onChange={handleUserSearch} />
    </Flex>
  );
}

export default App;
