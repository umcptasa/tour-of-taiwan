/**
 * Youyouka component
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "gatsby";
// @material-ui/core components
//import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import image from "./yoyoka-image.png";
import "./card.css";

type Props = {
    name: string,
    amount: number,
    visited: Array<string>,
};


const Card = (props: Props) => {
    const {name, amount, visited} = props;
    return (
      <div id="f1_container">
        <div id="f1_card" className="shadow">

          <div className="front face center">
            <img src={image} alt = "yoyoka" width = "450" height = "281" />
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
