import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from '
import Cali from './Cali';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cali' element={<Cali />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
