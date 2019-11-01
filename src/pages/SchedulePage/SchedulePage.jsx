/**
 * Scheedule page for the app
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx";

type Props = {};

const SchedulePage = (props: Props) => {
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
        <Footer/>
    </div>
    );
}

export default SchedulePage