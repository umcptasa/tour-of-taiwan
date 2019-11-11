/**
 * Purchase component
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type Props = {
    subtractFunc: (number, string) => boolean,
    stations: Object,
};

function Purchase(props: Props) {
    const {subtractFunc, stations} = props;
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("null");
    const [item, setItem] = React.useState(<></>);
    const [input, setInput] = React.useState("");
    let b = false;
    const handleClickOpen = () => {
        b = subtractFunc(1, input);
        if (b) {
          setMsg("Thank You For The Purchase");
          setItem(<DialogContentText align="center">
        {stations[input]}</DialogContentText>)
        } else {
          setMsg("Purchase Failed: Incorrect Code or User does not have enough token");
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const data = useStaticQuery(graphql`
        query PurchaseQuery {
            file(relativePath: { eq: "youyoukathankyou.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <div>
            <GridContainer justify="center" style={{ margin: 10 }}>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                      <CardHeader
                        style={{
                          marginTop: 10,
                          color: "white",
                          backgroundColor: "#f8964b"
                        }}
                      >
                        <h4>Insert food code here to purchase:</h4>
                      </CardHeader>
                        <p
                            style={{
                                marginTop: 10,
                                marginLeft: 10,
                                marginBottom: 0,
                                paddingTop: 10,
                                paddingLeft: 10,
                            }}
                        >
                            Insert food code here to purchase:
                        </p>
                        <CardBody>
                            <TextField
                                id="food-code"
                                label="Food Code"
                                style={{ width: 200, margin: 10, padding: 10 }}
                                onChange={handleChange}
                            />
                            <Button
                                variant="contained"
                                style={{
                                  margin: 10,
                                  padding: 10,
                                  color: "white",
                                  backgroundColor: "#f8964b"
                                }}
                                onClick={handleClickOpen}
                            >
                                Purchase
                            </Button>
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
                                    <DialogContentText color="black" align="center">
                                        Order Summary:
                                    </DialogContentText>
                                    {item}
                                    <GridContainer
                                        alignContent="center"
                                        alignItems="center"
                                        justify="center"
                                    >
                                        <GridItem sm={5}>
                                            <Img
                                                fluid={
                                                    data.file.childImageSharp
                                                        .fluid
                                                }
                                                alt="Good Job"
                                            />
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
