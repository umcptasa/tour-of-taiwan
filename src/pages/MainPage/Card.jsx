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
import "./card.css";
console.log(image);


const Card = (props: Props) => {
    return (
      <div id="f1_container">
        <div id="f1_card" class="shadow">

          <div class="front face">
            <img src={image} alt = "yoyoka" width="450" height="281"/>
          </div>

          <div class="back face center">
            <p>Name: </p>
            <p>Remaining balance:</p>
            <p>Places visited: </p>
          </div>
      </div>
    </div>
    );
}



export default Card
