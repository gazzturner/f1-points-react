import './App.css';
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import 'bootstrap';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
