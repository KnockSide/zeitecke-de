import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//Dritte Seite
const DritteSeite = () => (
  <Layout>
    <Seo title="Prozessorenanalyse" />
    <h1>Finden sie ihren optimalen Prozessor</h1>
    <p>AMD Ryzen 7 3700X</p>
    <p>Technische Daten: </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
