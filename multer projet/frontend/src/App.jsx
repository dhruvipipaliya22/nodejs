import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () =>{
  return (
    <>
    <div className='head'>📚 Book Manager</div>
    <BookForm />
    <BookList />
    </>
  );
};
export default App;