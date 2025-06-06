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
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BorderLine />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/hello-world" element={`Hello World!\n02/05/25 13:20`} />
          <Route
            path="/blogs/*"
            element={
              <>
                <RemoteBlogs />
                <BorderLineRight />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
