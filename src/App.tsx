import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import BorderLine from './component/BorderLine/BorderLine';
import ReactGA from 'react-ga4';
import BorderLineRight from './component/BorderLineRight/BorderLineRight';

const RemoteBlogs = lazy(() => import('blogs/App'));
const configValue: string = import.meta.env.VITE_GOOGLE_TAG as string;

function App() {
  useEffect(() => {
    ReactGA.initialize(configValue);
    ReactGA.send('pageview');
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BorderLine />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/hello-world" element={'Hello World!'} />
        <Route path="/blogs" element={<BorderLineRight />}>
          <Route path="/blogs" element={<RemoteBlogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
