
import './App.css'
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { UserProvider } from './components/UserContext';
import YourComponent from './components/YourComponent'; // Example component to use the contexts

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <YourComponent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;


