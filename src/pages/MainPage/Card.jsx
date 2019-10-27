/**
 * Youyouka component
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import image from "./yoyoka-image.png";
console.log(image);
const Card = (props: Props) => {
    return (
      <img src = {image} alt ="yo yo ka"/>
    );
}



export default Card
