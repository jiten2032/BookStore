import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";



function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBook />
      </BookContextProvider>

    </div>
  );
}

export default App;
