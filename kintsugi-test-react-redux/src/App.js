import SharedLayout from './components/SharedLayout/SharedLayout'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import GoodsDetails from './components/Goods/GoodsDetails/GoodsDetails';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path=":goodsId" element={<GoodsDetails />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
