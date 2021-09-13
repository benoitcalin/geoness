import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Who() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/concass.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    image2: file(relativePath: { eq: "images/carte_france.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="who">
      <div className="who">
        <div className="container">
          <h2>QUI SOMMES-NOUS ?</h2>
          <div className="mapmap mb-4">
            <div className="map-container">
              <Img
                fluid={data.image2.childImageSharp.fluid}
                alt="Image carte de france"
                className="map"
              />
            </div>
            <h3>
              Bureau d'études
              <br />
              Experts Environnement, Réglementation, Transition énergétique
              <br />
              <em>Partenaire de la réussite de vos projets</em>
            </h3>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <Img
                fluid={data.image1.childImageSharp.fluid}
                alt="Photo d'un carrière"
              />
            </div>
            <div className="col-sm-12 col-md-8 d-flex align-items-center">
              <div className="content mt-4 mt-md-0">
                <p>
                  <strong>Bienvenue,</strong>
                </p>
                <p>
                  Nous sommes <strong>GEONESS Développement</strong>,
                  consultants en conseils et ingénierie environnementale.
                </p>
                <p>
                  Votre partenaire sur le{" "}
                  <strong>
                    volet environnemental et réglementaire de vos projets.
                  </strong>
                </p>
                <p className="mb-0 d-none d-md-block">
                  <strong>
                    GEONESS Développement est un bureau d’études en perpétuel
                    développement
                  </strong>{" "}
                  pour répondre aux besoins d’une société qui évolue très
                  rapidement dans la prise de conscience du monde qui l’héberge.
                </p>
              </div>
            </div>
            <div className="w-100 d-flex flex-column flex-md-row flew-wrap align-items-center justify-content-center">
              <h3 className="who-values">
                FIABILITÉ &nbsp;&nbsp;-&nbsp;&nbsp; SAVOIR-FAIRE
              </h3>
              <span className="d-none d-md-inline">
                <h3 className="who-values">&nbsp;&nbsp;-&nbsp;&nbsp; </h3>
              </span>
              <h3 className="who-values">
                ADAPTABILITÉ &nbsp;&nbsp;-&nbsp;&nbsp; CONSEIL
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
