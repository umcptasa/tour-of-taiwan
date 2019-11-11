/**
 * Schedule component
 * @flow
 */

import React from "react"
// nodejs library that concatenates classes
//import classNames from "classnames"
// Gatsby GraphQL libraries
import { useStaticQuery, graphql } from "gatsby"
// @material-ui/core components
//import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components

type Props = {}

const ScheduleComponent = (props: Props) => {
  const data = useStaticQuery(graphql`
    query ScheduleComponentQuery {
      markdownRemark(frontmatter: { title: { eq: "Schedule" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `);
  return (
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  );
}

export default ScheduleComponent
