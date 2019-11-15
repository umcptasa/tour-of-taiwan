/**
 * Youyouka component
 * @flow
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { YouyoukaImageTypes } from "modules/Codes";
import Img from "gatsby-image";

type Props = {
    type: number,
};

const YouyoukaImage = (props: Props) => {
    const { type } = props;
    const data = useStaticQuery(graphql`
        query YouyoukaImageQuery {
            thankyou: file(relativePath: { eq: "youyoukathankyou.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            failure: file(relativePath: { eq: "youyoukasad.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            goodjob: file(relativePath: { eq: "youyoukagoodjob.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    switch (type) {
        case YouyoukaImageTypes.THANKYOU:
            return (
                <Img
                    fluid={data.thankyou.childImageSharp.fluid}
                    alt="Thank you"
                />
            );
        case YouyoukaImageTypes.GOODJOB:
            return (
                <Img
                    fluid={data.goodjob.childImageSharp.fluid}
                    alt="Good job"
                />
            );
        case YouyoukaImageTypes.FAILURE:
            return (
                <Img fluid={data.failure.childImageSharp.fluid} alt="Failure" />
            );
        default:
            return <></>;
    }
};

export default YouyoukaImage;
