import logo from './logo.svg';
import './App.css';
import Counter from "./component/Counter";

function App() {
  return (
    <div className="App">
      <Counter inc={1} dec={-1} double={2}/>
    </div>
  );
}

export default App;
