import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import AuthPage from './components/AuthPage';
import ListPage from './components/ListPage/ListPage';
import CreatePage from './components/CreatePage';
import EditPage from './components/EditPage';

export default function App() {

  return(
    <Router>
      <h1>Supabase Auth and CRUD List Exercise</h1>
      <Routes>
        <Route path="authPage" 
          element={<AuthPage />}>
        </Route>
        <Route path="/"
          element={<ListPage/>} >
        </Route>
        <Route path="createPage"
          element={<CreatePage />}/>
        <Route path="editPage/:id"
          element={<EditPage />}/>
      </Routes>
    </Router>
  );
}
