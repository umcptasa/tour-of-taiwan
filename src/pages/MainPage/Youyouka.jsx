/**
 * Youyouka component
 * @flow
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Typography from "@material-ui/core/Typography";
import "./card.css";
import Parallax from "components/Parallax/Parallax.jsx";

type Props = {
    amount: number,
    visited: Array<string>,
};

const style = {
    minHeight: "215px",
    backgroundSize: "cover",
};

const Youyouka = (props: Props) => {
    const { amount } = props;
    const data = useStaticQuery(graphql`
        query YouyoukaQuery {
            file(relativePath: { eq: "youyouka.png" }) {
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
        <GridContainer alignItems="center" justify="center" style={{ margin: 10 }}>
            <GridItem sm={12} md={4}>
                <Card>
                    <BackgroundImage
                        fluid={data.file.childImageSharp.fluid}
                        style={style}
                    >
                        <GridContainer
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography
                                align="center"
                                variant="h4"
                                color="textPrimary"
                            >
                                Amount: {amount}
                            </Typography>
                        </GridContainer>
                    </BackgroundImage>
                </Card>
            </GridItem>
        </GridContainer>

        //   <div id="f1_container">
        //     <div id="f1_card" className="shadow">

        //       <div className="front face center">
        //         <Img fluid={data.file.childImageSharp.fluid} alt="Youyouka"/>
        //       </div>

        //       <div className="back face center">
        //         <p><b>Remaining balance:</b> {amount}</p>
        //       </div>
        //   </div>
        // </div>
    );
};

export default Youyouka;
