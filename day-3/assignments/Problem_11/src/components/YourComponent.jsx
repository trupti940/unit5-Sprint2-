import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';

const YourComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, loginUser, logoutUser } = useContext(UserContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>{user ? `Welcome, ${user.name}` : 'Please log in'}</h1>
      
     
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      
      {user ? (
        <button onClick={logoutUser}>Log out</button>
      ) : (
        <button onClick={() => loginUser({ name: 'John Doe' })}>Log in</button>
      )}
    </div>
  );
};

export default YourComponent;
