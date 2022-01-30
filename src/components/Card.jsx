import React from "react"

const Card = ({ title = "Card Title", body = "Card Body" }) => {
	return (
		<div className="card">
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	)
}

export default Card
