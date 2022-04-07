import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'react-chat-widget/lib/styles.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/user/user.actions';
import MainHome from './components/home/sections/main.component';
import cdnScripts from './assets/scripts/main';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    cdnScripts();
    dispatch(checkUserSession());
  });
    return(
        <Routes>
            <Route index element={<MainHome />} />
            <Route path='signin' element={<SignInAndSignUpPage />} />
        </Routes>
    );
  }


export default App;
