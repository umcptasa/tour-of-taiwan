/**
 * Refill component
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
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import YouyoukaImage from "./YouyoukaImage";

import {YouyoukaImageTypes} from "modules/Codes";

type Props = {
    addFunc: (number, string) => boolean,
};

function Refill(props: Props) {
    const { addFunc } = props;
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("null");
    const [input, setInput] = React.useState("");
    const [imgType, setImgType] = React.useState(YouyoukaImageTypes.NONE);
    const handleClickOpen = () => {
        const accept = addFunc(1, input);
        console.log(accept);
        if (accept) {
          setMsg("Refill: Successful");
          setImgType(YouyoukaImageTypes.GOODJOB);
        } else {
          setMsg("Refill Failed: Code used already or does not exist");
          setImgType(YouyoukaImageTypes.FAILURE);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    }

      return (
          <div>
              <GridContainer justify="center" style={{ margin: 10 }}>
                  <GridItem xs={12} sm={12} md={4}>
                      <Card>
                          <CardHeader
                            style={{
                              marginTop: 10,
                              color: "white",
                              backgroundColor: "#039fdd"
                            }}
                          >
                            <h4>I want to refill money:</h4>
                          </CardHeader>
                          <CardBody>
                          <GridContainer alignItems="stretch" justify="center">
                                <GridItem xs={8}>
                                    <TextField
                                        id="refill-code"
                                        label="Refill Code"
                                        style={{
                                            //width: 200,
                                            //margin: 10,
                                            //padding: 10,
                                        }}
                                        onChange={handleChange}
                                    />
                                </GridItem>
                                <GridItem xs={4}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        style={{
                                            //margin: 10,
                                            //padding: 10,
                                            color: "white",
                                            backgroundColor: "#039fdd",
                                        }}
                                        onClick={handleClickOpen}
                                    >
                                        Refill
                                    </Button>
                                </GridItem>
                            </GridContainer>

                              <Dialog
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                              >
                                  <DialogTitle id="alert-dialog-title">
                                      {msg}
                                  </DialogTitle>
                                  <DialogContent
                                      style={{ paddingBottom: "0px" }}
                                  >
                                      <DialogContentText color="black" align="center">
                                        Answer more questions to gain more money!
                                      </DialogContentText>
                                      <GridContainer
                                          alignContent="center"
                                          alignItems="center"
                                          justify="center"
                                      >
                                          <GridItem sm={4}>
                                              <YouyoukaImage type={imgType}/>
                                          </GridItem>
                                      </GridContainer>
                                  </DialogContent>
                                  <DialogActions>
                                      <Button
                                          autoFocus
                                          onClick={handleClose}
                                          color="primary"
                                      >
                                          Close
                                      </Button>
                                  </DialogActions>
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

export default Refill;
