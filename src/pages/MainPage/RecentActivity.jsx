/**
 * RecentActivity component
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
//import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { FOOD_STATIONS } from "modules/Codes";

type Props = {
    purchases: Array<string>,
    visited: Array<string>,
};

const RecentActivity = (props: Props) => {
    const { purchases, visited } = props;
    const purchaseBody =
        purchases && purchases.length > 0 ? (
            purchases.map(stationKey => (
                <p align="center">{FOOD_STATIONS[stationKey]}</p>
            ))
        ) : (
            <></>
        );

    const visitedbody =
        visited && visited.length > 0 ? (
            visited.map(city => <p align="center">{city}</p>)
        ) : (
            <></>
        );

    return (
        <div>
            <GridContainer justify="center" style={{ margin: 10 }}>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader
                            style={{
                                marginTop: 10,
                                color: "white",
                                backgroundColor: "#f13e74",
                            }}
                        >
                            <h4 align="center">RECENT ACTIVITY</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer justify="center">
                                <GridContainer xs={6} direction="column">
                                    <h4 align="center">Purchases</h4>
                                    {purchaseBody}
                                </GridContainer>

                                <GridContainer xs={6} direction="column">
                                    <h4 align="center">Visited Cities</h4>
                                    {visitedbody}
                                </GridContainer>
                            </GridContainer>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
};

RecentActivity.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default RecentActivity;
