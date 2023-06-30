import { createUser, loginUser } from '../services/fetch-utils';
import { useState } from 'react';

export default function AuthPage({ errorMsg }) {
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [existingUser, setExistingUser] = useState('');
  const [existingPassword, setExistingPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState('');


  
  async function handleCreate(e) {
    e.preventDefault();
    try {
      const user = await createUser(newUser, newPassword);
      window.location.href = '/listPage';
      setUser(user);
    } catch(e) {
      setError(e.message);
    }
  }
  
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const user = await loginUser(existingUser, existingPassword);
      window.location.href = '/listPage';
      setUser(user);
    } catch(e) {
      setError(e.message);
    }
  } 

  return (
    <div>
      <h2>This is the Auth Page</h2>
      <h4>{errorMsg}</h4>
      <div>
        <form onSubmit={handleCreate}>
          <h2>Create New User</h2>
          Email: <input type="text" 
            placeholder="New Email"
            value={newUser}
            onChange={e => setNewUser(e.target.value)} />
          Password: <input type="password" 
            placeholder="Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)} />
          <button>New User</button>
        </form>
        <form onSubmit={handleLogin}>
          <h2>Login Existing User</h2>
          Email: <input type="text" 
            placeholder="New Email" 
            value={existingUser}
            onChange={e => setExistingUser(e.target.value)}/>
          Password: <input type="password" 
            placeholder="Password" 
            value={existingPassword}
            onChange={e => setExistingPassword(e.target.value)}/>
          <button>Login User</button>
        </form>
      </div>
    </div>
  );
}
