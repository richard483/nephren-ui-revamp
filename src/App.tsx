import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import BorderLine from './component/BorderLine/BorderLine';

const RemoteBlogs = lazy(() => import('blogs/App'));

function App() {
  return (
    <BrowserRouter>
      <BorderLine />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hello-world" element={'Hello World!'} />
        <Route path="/blogs" element={<RemoteBlogs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
