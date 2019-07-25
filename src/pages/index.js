import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from '../components/footer'
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>My Name is Gurpreet Kaur</h2>
      <p>Need Developer <Link to="/about">About Us</Link></p>
      <Footer />
    </Layout>
  )
}

export default IndexPage
