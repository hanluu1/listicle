import { pool } from '../config/database.js'

const getItems = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM items ORDER BY id ASC");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default { getItems };