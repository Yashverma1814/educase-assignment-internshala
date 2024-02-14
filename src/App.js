import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/account' element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
