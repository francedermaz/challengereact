import './App.css';
import { Routes ,Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Page404 from './components/Page404/Page404';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Account from './components/Account/Account';

function App() {
  let user = { id: -1 };
  if (localStorage.getItem("user")) {
    user = localStorage.getItem("user");
    user = JSON.parse(user);
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/login' element={user.id===-1?<Login/>:<Navigate to="/account"/>}/>
        <Route path='/home' element={user.id===-1?<Navigate to="/login"/>:<Home/>}/>
        <Route path="/account" element={user.id===-1?<Navigate to="/login"/>:<Account/>} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App;
