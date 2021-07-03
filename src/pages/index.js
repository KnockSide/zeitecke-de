import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Prozessoren Vergleichsportal</h1>
    <p>Finden sie den optimalen Prozessor für ihren Computer</p>
    <p>Intel VS AMD</p>
    <p>Unsere CPU Empfehlungen</p>
    
    <StaticImage
      src="../images/gatsbyastronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/page-3/">Zum Prozessorenvergleich</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
