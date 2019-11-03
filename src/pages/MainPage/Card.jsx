/**
 * Youyouka component
 * @flow
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./card.css";

type Props = {
    name: string,
    amount: number,
    visited: Array<string>,
};


const Card = (props: Props) => {
    const {name, amount, visited} = props;
    const data = useStaticQuery(graphql`
        query CardQuery {
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
      <div id="f1_container">
        <div id="f1_card" className="shadow">

          <div className="front face center">
            <Img fluid={data.file.childImageSharp.fluid} alt="Youyouka"/>
            {/* <img src={image} alt = "yoyoka" width = "450" height = "281" /> */}
          </div>

          <div className="back face center">
            <p><b>Name:</b> {name}</p>
            <p><b>Remaining balance:</b> {amount}</p>
            <p><b>Places visited:</b> {visited.map((s) => s)}</p>
          </div>
      </div>
    </div>
    );
}



export default Card
