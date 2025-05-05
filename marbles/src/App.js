
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Components/NavBar';
import PostList from './Components/PostList';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <PostList  />
    </ThemeProvider>
  );
}

export default App;
