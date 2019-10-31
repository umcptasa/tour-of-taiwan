/**
 * Refill component
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import image from "./youyoukagoodjob.png";

type Props = {};

function Refill(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <GridContainer justify="center" style={{ margin: 10 }}>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <p style={{ marginTop: 10, marginLeft: 10, marginBottom: 0, paddingTop: 10, paddingLeft: 10 }}>
              I want to refill money:
            </p>
            <CardBody>
            <TextField
              id="refill-code"
              label="Refill Code"
              style={{ width: 200, margin: 10, padding: 10 }}
            />
            <Button
              variant="outlined"
              style={{ margin: 10, padding: 10 }}
              color="primary"
              onClick={handleClickOpen}
            >
              Refill
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Money Refilled Sucessfully"}</DialogTitle>
              <DialogContent style={{ paddingBottom: "0px" }}>
                <DialogContentText color="black">
                  Complete more activities to gain more money !!!
                </DialogContentText>
              </DialogContent>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                <img src={image} alt="thank you" width="100" height="100" />
              </div>
            </Dialog>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Refill.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default Refill
