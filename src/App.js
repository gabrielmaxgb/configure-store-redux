import './App.css';
import Addbook from './components/addBook/AddBook';
import Counter from './components/counter/Counter';
import Header from './components/header/Header';
import Library from './components/library/Library';

function App() {
  return (
    <div className="App">
      <Counter />
      <Header />
      <Addbook />
      <Library />
    </div>
  );
}

export default App;
