export default function AuthPage() {
  return (
    <div>
      <h2>This is the Auth Page</h2>
      <div>
        <form>
          <h2>Create New User</h2>
          Email: <input type="text" placeholder="New Email" />
          Password: <input type="password" placeholder="Password" />
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
