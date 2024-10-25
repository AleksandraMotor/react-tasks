import logo from './logo.svg';
import './App.css';
import SideMenu from './components/task-1/SideMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Tasks
        </p>
      </header>
      <hr/>
      <h1>Task 1</h1>
      <SideMenu/>
    </div>
  );
}

export default App;
