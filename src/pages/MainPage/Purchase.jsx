/**
 * Purchase component
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

import { YouyoukaImageTypes } from "modules/Codes";

type Props = {
    subtractFunc: (number, string) => boolean,
    stations: Object,
};

function Purchase(props: Props) {
    const { subtractFunc, stations } = props;
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("null");
    const [item, setItem] = React.useState(<></>);
    const [input, setInput] = React.useState("");
    const [imgType, setImgType] = React.useState(YouyoukaImageTypes.NONE);
    const handleClickOpen = () => {
        const b = subtractFunc(1, input);
        if (b) {
            setMsg("Thank You For The Purchase");
            setItem(
                <div>
                    <DialogContentText color="black" align="center">
                        Order Summary:
                    </DialogContentText>
                    <DialogContentText align="center">
                        {stations[input]}
                    </DialogContentText>
                </div>
            );
            setImgType(YouyoukaImageTypes.THANKYOU);
        } else {
            setMsg("Purchase Failed: Incorrect Code or Insufficient Funds");
            setItem(<></>);
            setImgType(YouyoukaImageTypes.FAILURE);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = e => {
        setInput(e.target.value);
    };

    return (
        <div>
            <GridContainer justify="center" style={{ margin: 10 }}>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader
                            style={{
                                marginTop: 10,
                                color: "white",
                                backgroundColor: "#f8964b",
                            }}
                        >
                            <h4>Insert food code here to purchase:</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer
                                alignItems="stretch"
                                justify="center"
                            >
                                <GridItem xs={8}>
                                    <TextField
                                        id="food-code"
                                        label="Food Code"
                                        onChange={handleChange}
                                    />
                                </GridItem>
                                <GridItem xs={4}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        style={{
                                            color: "white",
                                            backgroundColor: "#f8964b",
                                        }}
                                        onClick={handleClickOpen}
                                    >
                                        Purchase
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
                                <DialogContent style={{ paddingBottom: "0px" }}>
                                    {item}
                                    <GridContainer
                                        alignContent="center"
                                        alignItems="center"
                                        justify="center"
                                    >
                                        <GridItem sm={5}>
                                            <YouyoukaImage type={imgType} />
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

Purchase.defaultProps = {
    // if we had any optional props, we can define what values they have here
};

export default Purchase;
