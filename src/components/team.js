import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Team() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/mariejulia.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/coralie.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="team">
      <div className="team">
        <div className="container">
          <h2>NOTRE ÉQUIPE</h2>

          <div className="team-card row">
            <div className="col-xs-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center">
              <Img
                fluid={data.image1.childImageSharp.fluid}
                alt="Marie-Julia GOUBOT"
                style={{
                  width: "250px",
                  height: "330px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="team-card-content col-xs-12 col-md-8 col-lg-9">
              <div className="btn-geoness-container btn-cv">
                <a
                  href="https://res.cloudinary.com/di2wcculd/image/upload/v1600344236/GEONESS/MJ_Goubot_CV.pdf"
                  className="btn btn-geoness my-3"
                  target="_blank"
                >
                  Parcours Pro
                </a>
              </div>
              <h3 className="mb-2">Marie-Julia GOUBOT</h3>
              <h4>Ingénieur diplômée INPL - ENSG</h4>
              <h4 className="mb-4">Fondatrice et gérante</h4>
              <p className="mb-4">
                Après 8 années de collaboration au sein d’un BE indépendant spécialisé en environnement et en géotechnique, Marie-Julia fonde en 2012 le bureau d’études GEONESS. Son expertise technique s’est développée autour d’une approche transversale et de terrain lui permettant d’accompagner entreprises et collectivités avec pragmatisme.
              </p>

              <p>Atouts : sens du contact, vision prospective</p>
              <p className="mb-4">Points forts : persévérance, engagement</p>

              <a
                href="mailto:contact@geoness.net?subject=Message à Geoness depuis le site internet"
                className="contact-link"
              >
                contact@geoness.net
              </a>
            </div>
          </div>

          <div className="team-limit"></div>

          <div className="team-card team-card2 row">
            <div className="col-xs-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center">
              <Img
                fluid={data.image2.childImageSharp.fluid}
                alt="Coralie TOUVENOT"
                style={{
                  width: "250px",
                  height: "330px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="team-card-content col-xs-12 col-md-8 col-lg-9">
              <div className="btn-geoness-container btn-cv">
                <a
                  href="https://res.cloudinary.com/di2wcculd/image/upload/v1600344236/GEONESS/C_Touvenot_CV.pdf"
                  className="btn btn-geoness my-md-3"
                  target="_blank"
                >
                  Parcours Pro
                </a>
              </div>
              <h3 className="mb-2">Coralie TOUVENOT</h3>
              <h4>Ingénieur Environnement</h4>
              <h4 className="mb-4">Spécialisation QSE</h4>

              <p className="mb-4">Ingénieur en environnement, Coralie intervient dans la réalisation des évaluations environnementales. Elle est également spécialisée en QSE et accompagne les entreprises  et les collectivités en tant qu’auditeur-conseil et pour la définition de leurs plans d’actions  dans un processus d’amélioration continue.</p>

              <p>Atouts : sens de l’écoute et de l’implication</p>
              <p className="mb-4">Points forts : rigueur, détermination</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
