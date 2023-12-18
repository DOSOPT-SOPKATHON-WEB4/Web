import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddTagPage from './pages/AddTagPage';
import AddCandlePage from './pages/AddCandlePage';
import CakePage from './pages/CakePage';
import OnboardingPage from './pages/OnboardingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OnboardingPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/add-tag' element={<AddTagPage />} />
        <Route path='/add-candle' element={<AddCandlePage />} />
        <Route path='/cake' element={<CakePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
