import React, { useState, useEffect, useCallback } from 'react'
import { Flex, LandingSection, Navbar, UserSearch } from './Components';
import { GitHubService, SearchUsersAttributes } from './Api/GitHubService';
function App() {

  const [foundUsers, setFoundUsers] = useState<SearchUsersAttributes[]>([])
  const [debouncedValue, setDebouncedValue] = useState('');

  const handleUserSearch = async (value: any) => {
    const data = await GitHubService.SearchUsersAsync(value)
    setFoundUsers(data)
    console.log(`FOUND USERS: `, data);
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
