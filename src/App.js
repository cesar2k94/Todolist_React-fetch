import './App.css';
import NewElement from './components/NewElement';

function App() {
  return (
    <div className="total">
      <div className="body">
        <h1 className="header">todos</h1>
        <NewElement />
      </div>
    </div>
  );
}

export default App;
