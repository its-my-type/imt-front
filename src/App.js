import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProcessPage from './ProcessPage';
import StartPage from './StartPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/processpage" element={<ProcessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
