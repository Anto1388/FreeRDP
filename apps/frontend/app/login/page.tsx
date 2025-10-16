import { loginEmail } from './actions';

export default function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <p>Login via email or OAuth (TikTok, Instagram, YouTube, X).</p>
      <form action={loginEmail} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input name="email" type="email" placeholder="email@example.com" required />
        <select name="type" defaultValue="creator">
          <option value="creator">Creator</option>
          <option value="business">Business</option>
        </select>
        <button type="submit">Login</button>
      </form>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <a href="#">TikTok</a>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">X</a>
      </div>
    </div>
  );
}
