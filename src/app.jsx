import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import AuthPage from './components/AuthPage';
import ListPage from './components/ListPage/ListPage';
import CreatePage from './components/CreatePage';

export default function App() {

  return(
    <Router>
      <h1>Supabase Auth and CRUD List Exercise</h1>
      <Routes>
        <Route path="/" 
          element={<AuthPage />}/>
        <Route path="listPage"
          element={<ListPage />}/>
        <Route path="createPage"
          element={<CreatePage />}/>
      </Routes>
    </Router>
  );
}
