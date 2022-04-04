import express from "express"
import os from "os"
import sqlite3 from "sqlite3"
import { open } from 'sqlite'
import path from "path"
const app = express()
const port = 3333
let db
if(!process.env.SQLLITE_FILEPATH) {
	throw new Error("SQLLITE_FILEPATH is not set")
}
const initSqlLite = async () => {
	const sqlLiteFilePath = path.resolve(process.env.SQLLITE_FILEPATH)
	const db = await open({
		filename: sqlLiteFilePath,
		driver: sqlite3.Database
	})
	await db.exec('CREATE TABLE IF NOT EXISTS app (id INTEGER PRIMARY KEY AUTOINCREMENT, counter INTEGER)')
	const result = await db.get('SELECT counter FROM app')
	if(result?.counter === undefined) {
		await db.exec('INSERT INTO app (counter) VALUES (0)')
	}
	return db
}
app.get('/', async (req, res) => {
	await db.exec('UPDATE app SET counter = counter + 1')
	const {counter} = await db.get('SELECT * FROM app')
	const contact = process.env.TRAINEE ?? "World"
	res.send(`Hello ${contact} from ${os.hostname()} - you've been here ${counter} times`)
})
app.listen(port, async () => {
	db = await initSqlLite()
	console.log(`Hello World app listening on port ${port}`)
})