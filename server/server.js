//PACKAGE
import express from "express"
import path from "path"
const app = express()
import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "../src/App.jsx"
import fs from "fs"

//MIDDLEWARE
app.use(express.json({ limit: "100mb" }))
app.use(express.urlencoded({ extended: false }))

//ROUTES
app.use("^/$", (req, res, next) => {
	fs.readFile(path.join(__dirname, "../build/index.html"), "utf-8", (err, data) => {
		if (err) {
			console.log(err)
			return res.status(500).json({
				success: false,
				msg: "terjadi kesalahan",
			})
		}

		res.send(
			data.replace(
				`<div id="root"></div>`,
				`<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
			)
		)
	})
})

app.use(express.static(path.resolve(__dirname, "../build/")))

//LISTENER
app.listen(5000, () => {
	console.log(`listen port PORT`)
})
