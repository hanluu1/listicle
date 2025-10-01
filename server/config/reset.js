import { pool } from "./database.js"
import "./dotenv.js"
import itemData from "../data/items.js"


export const createItemsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS items;

        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(10) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL
        );
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 items table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating items table', err)
    }
}

export const seedItemsTable = async () => {
    await createItemsTable()

    for (const item of itemData) {
        const insertQuery = 'INSERT INTO items (name, pricePoint, image, description) VALUES ($1, $2, $3, $4)'
        const values = [
            item.name,
            item.pricePoint,
            item.image,
            item.description
        ]
        
        try {
            await pool.query(insertQuery, values)
            console.log(`✅ ${item.name} added successfully`)
        } catch (err) {
            console.error('⚠️ error inserting item', err)
        }
    }
}
seedItemsTable()