/**
 * Main page for the app. Contains the youyouka
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import Card from "./Card";
import Purchase from "./Purchase";
import Refill from "./Refill";
import RecentActivity from "./RecentActivity";
import Visited from "./Visited";

type Props = {
    location: {
        name: string,
    },
};

type State = {
    amount: number,
    codes: Array<string>,
    subCodes: Array<string>,
};

const defaultCodes = [
    "StationKey1",
    "StationKey2",
    "StationKey3",
    "StationKey4",
];

function jsonArrayReviver(str: string): Array<string> {
    if (str.length <= 2) {
        return [];
    }
    let noBrackets = str.substring(1, str.length - 1);
    return noBrackets.replace('"', "").split(",");
}

class MainPage extends React.Component {
    state: State;
    localStorage;
    id: string;

    constructor(props: Props) {
        super(props);
        console.log(props);
        this.id = props.location.state.name;
        //checks whether the application has been initialized and gets local data, else set variables to initial value and store them into local storage
        if (typeof window !== "undefined") {
            this.localStorage = window.localStorage;
            if (this.localStorage.getItem("id") === this.id) {
                // This person already has data stored on device
                this.state = {
                    amount: parseInt(localStorage.getItem("amount")),
                    codes: JSON.parse(
                        localStorage.getItem("codes"),
                        jsonArrayReviver
                    ),
                    subCodes: JSON.parse(
                        localStorage.getItem("subCodes"),
                        jsonArrayReviver
                    ),
                };
            } else {
                // Data stored on device does not match ID so create new state
                this.state = {
                    amount: 3,
                    codes: defaultCodes,
                    subCodes: [],
                };
                this.localStorage.setItem("id", this.id);
                this.updateLocal();
            }
        } else {
            // Windows local storage not available
            this.state = {
                amount: 3,
                codes: defaultCodes,
                subCodes: [],
            };
        }
    }

    updateLocal() {
        if (this.localStorage !== null && this.localStorage !== undefined) {
            this.localStorage.setItem("amount", this.state.amount);
            this.localStorage.setItem(
                "codes",
                JSON.stringify(this.state.codes)
            );
            this.localStorage.setItem(
                "subCodes",
                JSON.stringify(this.state.subCodes)
            );
        }
    }

    //adds points by deleting code from array of possible codes to ensure code is not used twice"
    add = (amountToAdd: number, code: string): boolean => {
        let { amount, codes } = this.state;
        const index = codes.indexOf(code);
        if (index > -1) {
            delete codes[index];
            amount += amountToAdd;
            // Sets the new state so components can reload
            this.setState({ amount: amount, codes: codes }, this.updateLocal);
        } else {
            return false;
        }
        return true;
    };

    //subtracts points by adding code to array have an array that shows history of purchases
    subtract = (amountToSubtract: number, code: string): boolean => {
        let { amount, subCodes } = this.state;
        //subCodes = subCodes || [];
        if (amount < amountToSubtract || defaultCodes.indexOf(code) < 0) {
            return false;
        }
        subCodes.push(code);
        amount -= amountToSubtract;
        this.setState({ amount: amount, subCodes: subCodes }, this.updateLocal);
        return true;
    };

    render() {
        console.log(this.state.amount);
        return (
            <div>
                <Header
                    color="transparent"
                    brand="My Youyouka"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white",
                    }}
                />
                <Card
                    name={this.id}
                    amount={this.state.amount}
                    visited={this.state.subCodes}
                ></Card>
                <Purchase subtractFunc={this.subtract} />
                <Refill addFunc={this.add} />
                <RecentActivity visited={this.state.subCodes} />
                <Visited visited={this.state.subCodes} />
                <Footer />
            </div>
        );
    }
}

MainPage.defaultProps = {
    location: {
        state: {
            name: "",
        },
    },
};

export default MainPage;
