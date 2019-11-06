/**
 * Map page for the app
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
// @material-ui/core components
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";

type Props = {};

const MapPage = (props: Props) => {
    return (
        <div style={{paddingTop: "80px"}}>
            <Header
                color="transparent"
                brand="Map"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white",
                }}
            />
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="info">
                                <h4>Map</h4>
                            </CardHeader>
                        </Card>
                    </GridItem>
                </GridContainer>
            <Footer />
        </div>
    );
};

export default MapPage;
