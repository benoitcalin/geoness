import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Slider from "react-slick"

export default function Banner() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: childImageSharp___fluid___originalName },
        filter: { relativeDirectory: { eq: "slider-images" } }
      ) {
        edges {
          node {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false
  }

  return (
    <Slider {...settings}>
      {images.map(image => (
        <BackgroundImage
          key={image.node.childImageSharp.fluid}
          fluid={image.node.childImageSharp.fluid}
          className="slider-image"
        >
          <div>
            <h1>“Faire de toute contrainte une opportunité”</h1>
            <p>
              <em>MJ Goubot</em>
            </p>
          </div>
        </BackgroundImage>
      ))}
    </Slider>
  )
}
