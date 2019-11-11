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
    visited: Array<string>,
};

const Visited = (props: Props) => {
    const { visited } = props;
    const element = visited && visited.length > 0 ? visited.map((stationKey) => <p>{stationKey}</p>) : <></>;
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
              <h4>PLACE VISITED</h4>
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

Visited.propTypes = {
    visited: PropTypes.array,
}

Visited.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default Visited