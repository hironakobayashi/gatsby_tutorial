import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Before they sold out williamsburg tbh selvage.</h2>
            <p>
              Schlitz synth listicle succulents gastropub mumblecore normcore
              portland pabst farm-to-table chambray umami.
            </p>
            <p>
              Tousled yuccie twee small batch hammock, tilde tacos knausgaard
              literally kale chips taiyaki enamel pin neutra yr vice. Four
              dollar toast stumptown blue bottle church-key.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
