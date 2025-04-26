import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/home");
  }

  return (
    <div
      style={{
        margin: "auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>🔒 Login Page</h1>
      <p>Por favor, faça login para continuar.</p>
      <button
        onClick={handleLogin}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Entrar
      </button>
    </div>
  );
}

export default LoginPage;
