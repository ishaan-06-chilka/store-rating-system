import { useEffect, useState } from "react";
import axios from "axios";

function StoreList() {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");

  // fetch stores from backend
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/stores"
        );
        setStores(res.data);
      } catch (error) {
        console.log("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  // handle rating change
  const handleRatingChange = (id, value) => {
    setStores((prev) =>
      prev.map((store) =>
        store.id === id
          ? { ...store, userRating: value }
          : store
      )
    );
  };

  // submit rating
  const submitRating = async (store) => {
    if (!store.userRating) {
      alert("Please select rating");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/ratings",
        {
          storeName: store.name,
          rating: store.userRating,
        }
      );

      alert(res.data.message);
    } catch (error) {
      alert("Failed to submit rating");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Store List</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search store..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      {/* Store Cards */}
      {stores
        .filter((store) =>
          store.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((store) => (
          <div
            key={store.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>{store.name}</h2>

            <p>📍 Address: {store.address}</p>

            <p>
              ⭐ Average Rating:{" "}
              <b>{store.average_rating}</b>
            </p>

            {/* Rating dropdown */}
            <select
              onChange={(e) =>
                handleRatingChange(
                  store.id,
                  e.target.value
                )
              }
              style={{ padding: "5px" }}
            >
              <option value="">Select Rating</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐</option>
              <option value="3">3 ⭐</option>
              <option value="4">4 ⭐</option>
              <option value="5">5 ⭐</option>
            </select>

            <br />
            <br />

            {/* Submit button */}
            <button
              onClick={() => submitRating(store)}
              style={{
                padding: "8px 12px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit Rating
            </button>
          </div>
        ))}
    </div>
  );
}

export default StoreList;