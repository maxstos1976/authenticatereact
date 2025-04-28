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
        borderRadius: "40px",
        backgroundColor: "lightblue",
        boxShadow: "0px 0px 105px lightblue",
      }}
    >
      <h1>🔒 Login Page</h1>
      <p>Please, make login to continue.</p>
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
