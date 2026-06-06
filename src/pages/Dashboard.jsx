import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Store Rating Dashboard</h1>

      <br />

      <button
        onClick={() => navigate("/stores")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        View Stores
      </button>

      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;