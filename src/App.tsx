import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import BorderLine from './component/BorderLine/BorderLine';
import ReactGA from 'react-ga4';

const RemoteBlogs = lazy(() => import('blogs/App'));
const configValue: string = import.meta.env.VITE_GOOGLE_TAG as string;

function App() {
  useEffect(() => {
    ReactGA.initialize(configValue);
    ReactGA.send('pageview');
  });
  return (
    <BrowserRouter>
      <BorderLine />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hello-world" element={'Hello World!'} />
        <Route path="/blogs/*" element={<RemoteBlogs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
