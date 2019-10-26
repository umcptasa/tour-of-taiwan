/**
 * Main page for the app. Contains the youyouka
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
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Youyouka from "./Youyouka";

type Props = {};

const MainPage = (props: Props) => {
    const verifier = new MoneyVerifier(3);
    return (
    <div>
        <Header
          color="transparent"
          brand="Main Page"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
        />
        <Youyouka verifier={verifier}>
        </Youyouka>
        <Footer/>
    </div>
    );
}

export default MainPage