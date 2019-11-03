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

const Schedule = (props: Props) => {
  const data = useStaticQuery(graphql`
    query ScheduleQuery {
      markdownRemark(frontmatter: { title: { eq: "Schedule" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `);
  console.log(data);
  return (
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  );
}

export default Schedule
