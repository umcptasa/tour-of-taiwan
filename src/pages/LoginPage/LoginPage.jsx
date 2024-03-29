/**
 * @flow
 */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import LockOutlined from "@material-ui/icons/LockOutlined";
// React icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { Link, navigate } from "gatsby";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import {ENTRY_PASSWORD} from "modules/Codes.js";

import image from "assets/img/bg8.jpg";

type State = {
    cardAnimation: string,
    // name: string,
    passcode: string,
};

class LoginPage extends React.Component {
    state: State;
    localStorage;

  constructor(props) {
    super(props);
    this.localStorage = null;
    if (typeof window !== "undefined") {
        this.localStorage = window.localStorage;
    }
    
    if(this.localStorage != null && this.localStorage.getItem("password") === ENTRY_PASSWORD) {
        // Redirect to main page if username has already been set
        navigate("/main-page")
    }

    // we use this to make the card to appear after the page has been rendered
    this.state = {
        cardAnimation: "cardHidden",
        // name: "",
        passcode: "",
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimation: "" });
      }.bind(this),
      700
    );
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handlePassChange = (event) => {
    this.setState({passcode: event.target.value});
  }

  proceedButton(passcode: string): React.Component {
      if(passcode.trim().toLowerCase() === ENTRY_PASSWORD) {
            if(this.localStorage != null) this.localStorage.setItem("password", ENTRY_PASSWORD);
          return (
            <Link to="/main-page">
            <Button color="primary">
            START THE TOUR
            </Button>
            </Link>
          );
      } else {
          return (
            <Button color="primary" disabled>
            INVALID PASSWORD
            </Button>
          );
      }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="TASA Tour of Taiwan"
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimation]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                    </CardHeader>
                    <p className={classes.divider}>Welcome to Tour of Taiwan :)</p>
                    <CardBody>
                      <CustomInput
                        labelText="Entry Code"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          onChange: this.handlePassChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined/>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                        {this.proceedButton(this.state.passcode)}
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
