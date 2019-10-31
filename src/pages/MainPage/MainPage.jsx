/**
 * Main page for the app. Contains the youyouka
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
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import Youyouka from "./Youyouka";
import Card from "./Card";
import Purchase from "./Purchase";
import Refill from "./Refill";
import RecentActivity from "./RecentActivity";
import Visited from "./Visited";
import { isNullOrUndefined } from "util";

type Props = {};

type State = {
    amount: number,
    codes: Array<string>,
    subCodes: Array<string>,
};

const defaultCodes = ["StationKey1", "StationKey2", "StationKey3", "StationKey4"];
let localStorage = null;

function jsonArrayReviver(str: string): Array<string> {
    if (str.length <= 2) {
        return [];
    }
    let noBrackets = str.substring(1, str.length - 1);
    return noBrackets.replace('"', "").split(",");
}

class MainPage extends React.Component {
    state: State;

    constructor(props: Props) {
        super(props);
        //checks whether the application has been initialized and gets local data, else set variables to initial value and store them into local storage
        if (
            typeof window !== "undefined" &&
            window.localStorage.getItem("id") === "true"
        ) {
            localStorage = window.localStorage;
            console.log(localStorage.getItem("amount"));
            console.log(localStorage.getItem("codes"));
            console.log(localStorage.getItem("subCodes"));
            this.state = {
                amount: parseInt(localStorage.getItem("amount")),
                codes: JSON.parse(
                    localStorage.getItem("codes")),
                subCodes: JSON.parse(
                    localStorage.getItem("subCodes")),
            };
        } else {
            this.state = {
                amount: 3,
                codes: defaultCodes,
                subCodes: [],
            };

            if (typeof window !== "undefined") {
                localStorage = window.localStorage;

                localStorage.setItem("amount", this.amount);
                localStorage.setItem("codes", JSON.stringify(defaultCodes));
                localStorage.setItem("subCodes", JSON.stringify(this.subCodes));
                localStorage.setItem("id", "true");
            }
        }
    }

    //adds points by deleting code from array of possible codes to ensure code is not used twice"
    add = (amountToAdd: number, code: string): boolean => {
        let { amount, codes } = this.state;
        const index  = codes.indexOf(code);
        if (index > -1) {
            // delete codes[index];
            amount += amountToAdd;
            if (!isNullOrUndefined(localStorage)) {
                localStorage.setItem("amount", amount);
                localStorage.setItem("codes", JSON.stringify(codes));
            }
            // Sets the new state so components can reload
            this.setState({ amount: amount, codes: codes });
        } else {
            return false;
        }
        return true;
    };

    //subtracts points by adding code to array have an array that shows history of purchases
    subtract = (amountToSubtract: number, code: string): boolean => {
        let { amount, subCodes } = this.state;
        console.log("Subcodes: ");
        console.log(typeof subCodes);
        console.log(subCodes);
        //subCodes = subCodes || [];
        if (amount < amountToSubtract || defaultCodes.indexOf(code) < 0) {
          return false;
        }
        subCodes.push(code);
        amount -= amountToSubtract;
        if (!isNullOrUndefined(localStorage)) {
            localStorage.setItem("amount", amount);
            localStorage.setItem("subCodes", JSON.stringify(subCodes));
        }
        this.setState({ amount: amount, subCodes: subCodes });
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
                    amount={this.state.amount}
                    visited={this.state.subCodes}
                ></Card>
                {/* <Youyouka verifier={verifier}></Youyouka> */}
                <Purchase subtractFunc={this.subtract} />
                <Refill addFunc={this.add} />
                <RecentActivity visited={this.state.subCodes} />
                <Visited visited={this.state.subCodes} />
                <Footer />
            </div>
        );
    }
}

export default MainPage;
