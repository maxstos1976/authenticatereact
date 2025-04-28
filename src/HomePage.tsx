import { useAuth } from "./AuthContext";

function HomePage() {
  const { logout } = useAuth();

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
      <h1>🏠 Home Page</h1>
      <p>Welcome! You are authenticate.</p>
      <button
        onClick={logout}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Close
      </button>
      {/* <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            listStyle: "none",
            margin: "auto",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <li>
            <button>useState</button>
          </li>
          <li>
            <button>useRef</button>
          </li>
          <li>
            <button>useContext</button>
          </li>
          <li>
            <button>useMemo</button>
          </li>
          <li>
            <button>useCallback</button>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default HomePage;
