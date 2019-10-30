/**
 * Schedule component
 * @flow
 */

import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// Gatsby GraphQL libraries
import { useStaticQuery, graphql } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import materialStyle from "assets/jss/material-kit-react.jsx"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

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
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  );
}

export default Schedule
