
import Box from './components/Box';
import './App.css';

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
      <div className='container'>
        <Box 
        text="im box 1" 
        background="red"
        color="pink"
        textClass="smallText"
       
        />
        <Box 
        text="im box 2" 
        background="orange"
        color="blue"
        textClass="boldText"
        
        />
        <Box 
        text="im box 3" 
        background="green"
        color="red"
        
        />
      </div>
      </header>
      </div>

  );
}

export default App;
