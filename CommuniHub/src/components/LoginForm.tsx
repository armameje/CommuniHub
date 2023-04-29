import '../styles/_loginForm.scss'

export default function LoginForm() {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form method="post">
        <div className="input-box">
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="input-box">
          <input type="password" required />
          <label>Password</label>
        </div>
      </form>
    </div>
  );
}
