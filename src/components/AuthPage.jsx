import { createUser, loginUser } from '../services/fetch-utils';
import { useState } from 'react';

export default function AuthPage() {
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [existingUser, setExistingUser] = useState('');
  const [existingPassword, setExistingPassword] = useState('');
  const [error, setError] = useState('');

  async function handleCreate(e) {
    e.preventDefault();
    try {
      await createUser(newUser, newPassword);
      window.location.href = '/listPage';
    } catch(e) {
      setError(e.message);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    await loginUser(existingUser, existingPassword);
    window.location.href = '/listPage';
  } // HOW TO GIVE ERROR MESSAGE IF LOGIN INCORRECT

  return (
    <div>
      <h2>This is the Auth Page</h2>
      <div>
        <h2>{error}</h2>
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
