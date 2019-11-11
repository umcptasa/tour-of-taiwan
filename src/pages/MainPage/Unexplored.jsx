/**
 * Visited component
 * @flow
 */

import React from "react";
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

type Props = {
    remainingCodes: Array<string>,
    refillStations: Object,
};

const Unexplored = (props: Props) => {
    const { remainingCodes, refillStations } = props;
    const element = remainingCodes && remainingCodes.length > 0 ? 
        remainingCodes.map((key) => <p>{refillStations[key]}</p>) : <></>;
    return (
    <div>
      <GridContainer justify="center" style={{ margin: 10 }}>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
              style={{
                marginTop: 10,
                color: "white",
                backgroundColor: "#40a050"
              }}
            >
              <h4>UNEXPLORED CITIES</h4>
            </CardHeader>
            <CardBody>
              {element}
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>);
}

Unexplored.propTypes = {
    visited: PropTypes.array,
}

Unexplored.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default Unexplored