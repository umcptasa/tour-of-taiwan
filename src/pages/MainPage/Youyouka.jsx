/**
 * Youyouka component
 * @flow
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Card from "components/Card/Card.jsx"
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

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
                <Card style={{ borderRadius: "20px" }}>
                <BackgroundImage
                      fluid={data.file.childImageSharp.fluid}
                      style={style}
                  >
                    <GridContainer direction="column" justify="center">
                        <h2 align="center" style={{padding: "50px 0", textShadow: "1px 1px 3px white, 1px 1px 5px black"}}>
                        <b> Amount: {amount} </b>
                            
                        </h2>
                    </GridContainer>
                  </BackgroundImage>
                </Card>
            </GridItem>
        </GridContainer>
    );
};

export default Youyouka;
