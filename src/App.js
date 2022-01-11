import './App.css';
import Addbook from './components/addBook/AddBook';
import Header from './components/header/Header';
import Library from './components/library/Library';

function App() {
  return (
    <div className="App">
      <Header />
      <Addbook />
      <Library />
    </div>
  );
}

export default App;
