/**
 * Refill component
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
    addFunc: (number, string) => boolean,
};

function Refill(props: Props) {
    const { addFunc } = props;
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("null");
    let input = null;
    let accept = false;
    const handleClickOpen = () => {
        accept = addFunc(1, input);
        console.log(accept);
        if (accept) {
          setMsg("Refill: Successful");
        } else {
          setMsg("Refill Failed: Code used already or does not exist");
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
      input = e.target.value;
    }

    const data = useStaticQuery(graphql`
        query RefillQuery {
            file(relativePath: { eq: "youyoukagoodjob.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid(maxWidth: 100, maxHeight: 100) {
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
                          <p
                              style={{
                                  marginTop: 10,
                                  marginLeft: 10,
                                  marginBottom: 0,
                                  paddingTop: 10,
                                  paddingLeft: 10,
                              }}
                          >
                              I want to refill money:
                          </p>
                          <CardBody>
                              <TextField
                                  id="refill-code"
                                  label="Refill Code"
                                  style={{ width: 200, margin: 10, padding: 10 }}
                                  onChange = {handleChange}
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
                                  <DialogTitle id="alert-dialog-title">
                                      {msg}
                                  </DialogTitle>
                                  <DialogContent style={{ paddingBottom: "0px" }}>
                                      <DialogContentText color="black">
                                          Complete more activities to gain more
                                          money !!!
                                      </DialogContentText>
                                  </DialogContent>
                                  <div
                                      style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          padding: "20px",
                                      }}
                                  >
                                    <Img fluid={data.file.childImageSharp.fluid} alt="Thank You"/>
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

export default Refill;
