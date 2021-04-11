import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Tousled beard semiotics green juice pickled tattooed activated
              charcoal put a bird on it iPhone lo-fi jianbing.
            </p>
            <p>Fingerstache deep v skateboard vice prism. </p>
            <p>
              Mixtape wolf yr, bicycle rights leggings hoodie fashion axe put a
              bird on it listicle viral ugh typewriter single-origin coffee tofu
              lumbersexual.{" "}
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea type="text" name="message" id="message" />
                <button type="submit" className="block btn">
                  submit
                </button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome source!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
