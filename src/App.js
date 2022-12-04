import { useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from './components/index';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
// import store from './redux/store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
