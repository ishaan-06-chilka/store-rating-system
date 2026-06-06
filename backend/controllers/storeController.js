const pool = require("../db");

const getStores = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        s.id,
        s.name,
        s.address,
        COALESCE(AVG(r.rating), 0) AS average_rating
      FROM stores s
      LEFT JOIN ratings r
      ON s.name = r.store_name
      GROUP BY s.id, s.name, s.address
      ORDER BY s.id;
    `);

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching stores" });
  }
};

module.exports = { getStores };