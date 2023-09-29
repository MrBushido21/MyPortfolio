import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './BasicComponents/Footer';
import { Header } from './BasicComponents/Header';
import { Main } from './BasicComponents/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
