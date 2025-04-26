import { useAuth } from "./AuthContext";

function HomePage() {
  const { logout } = useAuth();

  return (
    <div
      style={{
        margin: "auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>🏠 Home Page</h1>
      <p>Bem-vindo! Você está autenticado.</p>
      <button
        onClick={logout}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Sair
      </button>
    </div>
  );
}

export default HomePage;
