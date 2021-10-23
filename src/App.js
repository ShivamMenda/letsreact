import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../src/components/navbar'
import MainContainer from '../src/components/mainContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
