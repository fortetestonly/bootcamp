import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
const aboutpage = () => (
		<Layout>
			<h1>About Us</h1>
			<p>Here is the content of About us page</p>
			<Link to="/contact">Contact Us</Link>
			<Footer />
			</Layout>
		
)
export default aboutpage