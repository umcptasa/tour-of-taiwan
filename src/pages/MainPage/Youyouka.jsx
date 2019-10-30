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
import MoneyVerifier from "modules/MoneyVerifier.js";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

type Props = {
    verifier: MoneyVerifier
};

const Youyouka = (props: Props) => {
    const {verifier} = props;
    return (<div> 
        <h1>
            {verifier.getAmount()}
        </h1>
        <Button type="button" onPress={verifier.add(1, "chicken")}>Add</Button>
        <Button type="button" onPress={verifier.subtract(1, "chicken")}>Subtract</Button>
    </div>);
}

Youyouka.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default Youyouka