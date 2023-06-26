import { createUser } from '../services/fetch-utils';
import { useState } from 'react';

export default function AuthPage() {
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');

  async function handleNewUser(e) {
    e.preventDefault();
    createUser(newUser, newPassword);
  }

  return (
    <div>
      <h2>This is the Auth Page</h2>
      <div>
        <form onSubmit={handleNewUser}>
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
        <form>
          <h2>Login Existing User</h2>
          Email: <input type="text" placeholder="New Email" />
          Password: <input type="password" placeholder="Password" />
          <button>Login User</button>
        </form>
      </div>
    </div>
  );
}
