import React from "react"
import Helmet from "react-helmet"

const PageHeaders = ({
	title = "React Server Side Rendering",
	desc = "SSR Reactjs dengan express",
}) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={desc} />
		</Helmet>
	)
}

export default PageHeaders
