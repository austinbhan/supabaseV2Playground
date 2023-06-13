import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AuthPage from './Authpage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';

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
