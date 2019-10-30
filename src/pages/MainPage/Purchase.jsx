/**
 * Purchase component
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
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type Props = {};

const Purchase = props => {
    return (
    <div>
      <GridContainer justify="center" style={{ margin: 10 }}>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <p style={{ marginTop: 10, marginLeft: 10, marginBottom: 0, paddingTop: 10, paddingLeft: 10 }}>
              Insert food code here to purchase:
            </p>
            <CardBody>
            <TextField
              id="food-code"
              label="Food Code"
              style={{ width: 200, margin: 10, padding: 10 }}
            />
            <Button
              variant="outlined"
              style={{ margin: 10, padding: 10 }}
            >
              Purchase
            </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>);
}

Purchase.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default Purchase
