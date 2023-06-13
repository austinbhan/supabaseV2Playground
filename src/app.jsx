import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AuthPage from './components/AuthPage';
import ListPage from './components/ListPage/ListPage';
import CreatePage from './components/CreatePage';

export default function App() {
  return(
    <Router>
      <h1>Supabase Auth and CRUD List Exercise</h1>
      <AuthPage /> 
      <ListPage />
      <CreatePage />
    </Router>
  );
}
