import './App.css';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Nav';
import BookList from './components/BookList';
import NewBookForm from './components/NewBook';


function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <Navbar />
      <BookList />
      <NewBookForm />

    </BookContextProvider>
    </div>
  );
}

export default App;
