import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import AppRoutes from './routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <ToastContainer />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
