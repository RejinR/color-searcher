import { Container } from '@mui/material';
import './App.css';
import ApplicationBar from './components/AppBar';
import ColorSearcher from './components/ColorSearcher';

function App() {
  return (
    <div className="App">
      <ApplicationBar />
      <Container>
          <ColorSearcher />
      </Container>
    </div>
  );
}

export default App;
