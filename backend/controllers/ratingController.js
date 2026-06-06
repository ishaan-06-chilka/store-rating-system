const pool = require("../db");

const addRating = async (req, res) => {
  try {
    const { storeName, rating } = req.body;

    // check if rating already exists
    const existing = await pool.query(
      "SELECT * FROM ratings WHERE store_name=$1",
      [storeName]
    );

    if (existing.rows.length > 0) {
      // update rating
      await pool.query(
        "UPDATE ratings SET rating=$1 WHERE store_name=$2",
        [rating, storeName]
      );

      return res.json({ message: "Rating updated successfully" });
    }

    // insert new rating
    await pool.query(
      "INSERT INTO ratings(store_name, rating) VALUES($1,$2)",
      [storeName, rating]
    );

    res.json({ message: "Rating saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error saving rating" });
  }
};

module.exports = { addRating };