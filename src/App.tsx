// src/App.js

import Landing from './pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;