
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: darkMode ? '#333' : '#eee',
      color: darkMode ? '#fff' : '#000'
    }}>
      <h1>Mini-Social</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}

export default Navbar;
