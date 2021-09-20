import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Activities() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/mosaique.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/fleche.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card1: file(relativePath: { eq: "images/expertise.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card2: file(relativePath: { eq: "images/secu.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card3: file(relativePath: { eq: "images/accomp.png" }) {
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
    <div id="activities">
      <div className="activities">
        <div className="container">
          <h2>NOS ACTIVITÉS</h2>
          <div className="row mb-4">
            <div className="col-md-4 col-12">
              <ul>
                <li>ICPE Spécialiste industrie extractive</li>
                <li>Solaire, photovoltaïque</li>
                <li>Communication, pédagogie de projets</li>
                <li>Transition énergétique et environnementale</li>
                <li>Prospection et stratégie foncière (carrière, solaire)</li>
                <li>Urbanisme, planification</li>
              </ul>
            </div>
            <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
              <Img
                fluid={data.image1.childImageSharp.fluid}
                alt="Mosaique de photos"
                style={{
                  width: "250px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-md-4 col-12">
              <ul>
                <li>Évaluations environnementales</li>
                <li>Dossiers réglementaires</li>
                <li>AMO</li>
                <li>PCAET</li>
                <li>Gestion des risques et impacts environnementaux</li>
                <li>Management HSE, audits internes</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cards-container">
          <div className="activity-card">
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="haut de carte fléché"
              className="position-absolute"
              style={{
                width: "374px",
                top: -2,
                left: -2,
                objectFit: "contain",
              }}
            />
            <h3>Expertise Environnementale</h3>
            <Img
              fluid={data.card1.childImageSharp.fluid}
              alt="expertise"
              style={{
                top: 5,
                left: 15,
                width: "200px",
                // objectFit: "contain",
              }}
            />
            <div className="activity-card-content content-card-1">
              <p className="title">ICPE</p>
              <p>Autorisation environnementale, Enregistrement, Déclaration</p>
              <p>Notifications, portés à connaissance</p>
              <p>ISDI, plan de gestion</p>
              <p>Garanties financières, étude de dangers</p>
              <p className="title mb-3">
                Audits et suivi de vos sites d’exploitation
              </p>
              <p className="title mb-3">Etudes acoustiques</p>
              <p className="title mb-3">
                Evaluations environnementales (projets, documents de planification)
              </p>
              <p className="title mb-3">
                Etudes d’impact de projets photovoltaïques
              </p>
            </div>
          </div>

          <div className="activity-card">
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="haut de carte fléché"
              className="position-absolute"
              style={{
                width: "374px",
                top: -2,
                left: -2,
                objectFit: "contain",
              }}
            />
            <h3>Hygiène et Sécurité</h3>
            <Img
              fluid={data.card2.childImageSharp.fluid}
              alt="expertise"
              style={{
                top: 5,
                left: 15,
                width: "200px",
                // objectFit: "contain",
              }}
            />
            <div className="activity-card-content content-card-2">
              <p className="title">Planifier</p>
              <p>
                Évaluer les risques professionnels : réaliser et mettre à jour
                le document unique
              </p>
              <p>
                Planifier les actions issues des évaluations = amélioration
                continue
              </p>
              <p className="mb-3">
                Contribuer à la définition des objectifs d’entreprise (HSE)
              </p>
              <p className="title">Réaliser</p>
              <p>Etablir, améliorer la trame documentaire </p>
              <p>Mettre en œuvre, suivre la prévention des risques </p>
              <p>
                Gérer les non-conformités, piloter l’amélioration au travers des
                actions correctives et préventives
              </p>
              <p>Impliquer et sensibiliser les collaborateurs </p>
              <p>
                Synthétiser, analyser, suivre les indicateurs Déployer le
                programme des audits
              </p>
            </div>
          </div>

          <div className="activity-card">
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="haut de carte fléché"
              className="position-absolute"
              style={{
                width: "374px",
                top: -2,
                left: -2,
                objectFit: "contain",
              }}
            />
            <h3>Accompagnement</h3>
            <Img
              fluid={data.card3.childImageSharp.fluid}
              alt="expertise"
              style={{
                top: 5,
                left: 15,
                width: "170px",
                // objectFit: "contain",
              }}
            />
            <div className="activity-card-content content-card-3">
              <p className="title">Etude de faisabilité</p>
              <p>Evaluation de la ressource</p>
              <p className="mb-2">
                Recensement des contraintes environnementales et réglementaires
              </p>
              <p className="title mb-2">
                Stratégie : foncier, exploitation, réaménagement
              </p>
              <p className="title">Accompagnement technique</p>
              <p>
                Phase de concertation (administration, collectivités, riverains)
              </p>
              <p className="mb-2">Réunions publiques</p>
              <p className="title mb-2">
                Communication, concertation, co-construction
              </p>
              <p className="title mb-2">Veille réglementaire personnalisée</p>
              <p className="title mb-2">
                Maîtrise d’œuvre et assistance à maîtrise d’ouvrage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
