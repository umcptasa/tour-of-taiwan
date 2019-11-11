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
import Typography from "@material-ui/core/Typography";

type Props = {
    visited: Array<string>,
    foodStations: Object,
};

const RecentActivity = (props: Props) => {
    const { visited, foodStations } = props;
    const body = visited && visited.length > 0 ? 
        visited.map((stationKey) => 
        <Typography paragraph="true" align="center">{foodStations[stationKey]}</Typography>) 
        : <></>;

    return (
    <div>
      <GridContainer justify="center" style={{ margin: 10 }}>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              style={{
                marginTop: 10,
                color: "white",
                backgroundColor: "#f13e74"
              }}
            >
              <h4>RECENT ACTIVITY</h4>
            </CardHeader>
            <CardBody>
              {body}
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>);
}

RecentActivity.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default RecentActivity
