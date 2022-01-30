import React from "react"
import Card from "./components/Card"
import PageHeaders from "./components/PageHeaders"

const App = () => {
	const data = [
		{
			id: 1,
			title: "ini title pertama",
			body: "ini body pertama",
		},
		{
			id: 2,
			title: "ini title kedua",
			body: "ini body kedua",
		},
		{
			id: 3,
			title: "ini title ketiga",
			body: "ini body ketiga",
		},
	]

	return (
		<>
			<PageHeaders />
			<div>
				<h1>Hello React SSR v3</h1>
				<small>fadli</small>

				{data.map((e) => {
					return <Card title={e.title} body={e.body} key={e.id} />
				})}
			</div>
		</>
	)
}

export default App
