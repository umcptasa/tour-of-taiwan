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

type Props = {
    amount: number,
    visited: Array<string>,
};


const Card = (props: Props) => {
    const {amount, visited} = props;
    return (
      <div id="f1_container">
        <div id="f1_card" class="shadow">

          <div className="front face center">
            <img src={image} alt = "yoyoka" width = "450" height = "281" />
          </div>

          <div className="back face center">
            <p>Name: </p>
            <p>Remaining balance: {amount}</p>
            <p>Places visited: {visited}</p>
          </div>
      </div>
    </div>
    );
}



export default Card
