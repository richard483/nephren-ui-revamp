import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import BorderLine from './component/BorderLine/BorderLine';
import BorderLineRight from './component/BorderLineRight/BorderLineRight';

const RemoteBlogs = lazy(() => import('blogs/App'));

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BorderLine />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/hello-world" element={'Hello World!'} />
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
