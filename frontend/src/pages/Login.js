import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert("Welcome " + user.displayName);
    onLogin(user.displayName);   // ✅ IMPORTANT FIX
  } catch (error) {
    console.log(error);
  }
};

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Admin Login</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        {/* Google Login Button */}
        <button
          style={{ ...styles.button, background: "#4285F4", marginTop: "10px" }}
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>

        <p
          style={styles.forgot}
          onClick={() => setShowForgot(!showForgot)}
        >
          Forgot Password?
        </p>

        {showForgot && (
          <p style={styles.info}>
            Default ID: admin <br />
            Default Password: 1234
          </p>
        )}

        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fce4ec",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
  },
  heading: {
    color: "#c2185b",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    background: "#c2185b",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  forgot: {
    marginTop: "10px",
    color: "#c2185b",
    cursor: "pointer",
    fontSize: "14px",
  },
  info: {
    fontSize: "13px",
    marginTop: "5px",
    color: "#555",
  },
};

export default Login;