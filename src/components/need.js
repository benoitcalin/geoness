import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsers,
  faTools
} from "@fortawesome/free-solid-svg-icons"

export default function Need() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/dumperroseaux2.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="need">
      <div className="need">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <h3>Vos besoins</h3>
              <p className="subtitle-need">
                Vous êtes une entreprise, une collectivité :
              </p>
              <ul className="pr-4">
                <li>
                  Vous recherchez un <strong>partenaire engagé</strong>,{" "}
                  <strong>force de propositions</strong>
                </li>
                <li>
                  Vous attendez de la <strong>disponibilité</strong>, de la{" "}
                  <strong>réactivité</strong>, du <strong>pragmatisme</strong>
                </li>
                <li>
                  Vous souhaitez un <strong>suivi stable</strong> par un{" "}
                  <strong>consultant dédié</strong> tout au long de votre projet
                </li>
              </ul>

              <p className="subtitle-need">Vous êtes un bureau d’études :</p>
              <ul className="pr-4">
                <li>
                  Avec besoin d'un <strong>soutien ponctuel</strong>
                </li>
              </ul>

              <p className="subtitle-need">Vous êtes indépendant :</p>
              <ul className="pr-4">
                <li>
                  Contactez-nous et <strong>intégrez notre réseau</strong>{" "}
                  d’experts
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 image-need">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Dumper camion de carrières"
                className="fleur"
                imgStyle={{
                  maxHeight: "450px",

                }}
              />
            </div>
          </div>
          <div className="btn-geoness-container">
            <a
              href="mailto:contact@geoness.net?subject=Message à Geoness depuis le site internet"
              className="btn btn-geoness my-3"
            >
              Contactez-nous
            </a>
          </div>
          <div className="row clients-assets">
            <div className="col-xs-12 col-sm-6">
              <h3>
                Nos clients
                <FontAwesomeIcon
                  icon={faUsers}
                  size="1x"
                  className="fontawesome-icons"
                />
              </h3>
              <ul className="client-list">
                <li>Industriels (industrie extractive, BTP)</li>
                <li>Développeurs solaire-photovoltaïque</li>
                <li>Collectivités</li>
                <li>Bureaux d’études</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3>
                Nos atouts
                <FontAwesomeIcon
                  icon={faTools}
                  size="1x"
                  className="fontawesome-icons"
                />
              </h3>
              <ul className="asset-list ml-3 ml-sm-0">
                <li>
                  Une structure souple par son organisation, robuste par
                  l’engagement de ses collaborateurs et la confiance de ses
                  clients
                </li>
                <li>Notre approche transversale​</li>
                <li>Une communication engageante, claire, efficace​</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
