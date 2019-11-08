/**
 * Map component
 * @flow
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Typography from "@material-ui/core/Typography";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";

import image from "assets/img/bg5.jpg";

type Props = {};

const Map = (props: Props) => {
    const data = useStaticQuery(graphql`
        query MapQuery {
            file(relativePath: { eq: "totmap.JPG" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
      <div>
        <Header
            absolute
            brand="Map"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
                height: 200,
                color: "white",
            }}
        />
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            height: "auto",
            display: "inherit",
            position: "relative",
            margin: "0",
            padding: "0",
            paddingTop: "15vh",
            border: "0",
            alignItems: "center",
          }}
        >
          <GridContainer alignItems="center" justify="center" style={{ margin: 10 }}>
              <GridItem sm={12} md={4}>
                  <Img
                      fluid={
                          data.file.childImageSharp
                              .fluid
                      }
                      style={{minHeight: "500px"}}
                      alt="Map"
                  />
              </GridItem>
          </GridContainer>
          <Footer whiteFont />
        </div>
    </div>
    );
};

export default Map;
