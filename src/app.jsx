import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import AuthPage from './components/AuthPage';
import CreatePage from './components/CreatePage';
import EditPage from './components/EditPage';
import ListPage from './components/ListPage/ListPage';
import { checkUser } from './services/fetch-utils';
import { useState, useEffect } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const userFetch = checkUser();

  useEffect(() => {
    function userData(user) {
      const userInfo = Promise.resolve(user);
      userInfo.then((user) => {
        setUser(user);
      });
    } userData(userFetch);
  }, []);

  return(
    <Router>
      <h1>Supabase Auth and CRUD List Exercise</h1>
      <Routes>
        <Route path="authPage" 
          element={<AuthPage />} />
        <Route path="listPage"
          element={
            !user 
              ? <AuthPage />
              : <ListPage />
          }
        />
        <Route path="createPage"
          element={<CreatePage />}/>
        <Route path="editPage/:id"
          element={<EditPage />}/>
      </Routes>
    </Router>
  );
}
