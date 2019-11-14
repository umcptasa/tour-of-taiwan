/**
 * Main page for the app. Contains the youyouka
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
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import Youyouka from "./Youyouka";
import Purchase from "./Purchase";
import Refill from "./Refill";
import RecentActivity from "./RecentActivity";
import Unexplored from "./Unexplored";

import image from "assets/img/bg7.jpg";

type Props = {};

type State = {
    amount: number,
    refills: Array<string>,
    purchases: Array<string>,
};

const foodStations = {
    chicken: "Taiwanese Chicken",
    noodles: "Rice Noodles",
    eggtart: "Egg Tarts",
    sago: "Sago Soup",
    mungbean: "Mung Bean Soup",
    stringbean: "String Beans",
    mochi: "Mochi",
    boba: "Bubble Tea",
    dumpling: "Dumplings",
};

const refillStations = {
    taibei: "Taipei",
    lanterns: "Shifen",
    rainbowroad: "Taichung",
    choochoo: "Alishan",
    pusa: "Tainan",
    dreammall: "Kaoshiung",
    hotairballoon: "Taitung",
    mountains: "Hualien",
};

let foodCodes = Object.keys(foodStations);
let refillCodes = Object.keys(refillStations);

class MainPage extends React.Component {
    state: State;
    localStorage;

    constructor(props: Props) {
        super(props);
        this.id = "yo"; // For now this is just defaulted to the empty string
        //checks whether the application has been initialized and gets local data, else set variables to initial value and store them into local storage
        // If we can store on browser, then define this.localStorage so we can store data
        this.localStorage = null;
        if (typeof window !== "undefined") {
            this.localStorage = window.localStorage;
        }

        if (this.localStorage !== null && this.localStorage.getItem("id") === this.id) {
            // This person already has data stored on device
            this.state = {
                amount: parseInt(localStorage.getItem("amount")),
                refills: JSON.parse(localStorage.getItem("refills")),
                purchases: JSON.parse(localStorage.getItem("purchases")),
            };
        } else {
            // Windows local storage not available
            this.state = {
                amount: 3,
                refills: refillCodes,
                purchases: [],
            };
        }
    }

    updateLocal = () => {
        if (this.localStorage !== null && this.localStorage !== undefined) {
            this.localStorage.setItem("amount", this.state.amount);
            this.localStorage.setItem(
                "refills",
                JSON.stringify(this.state.refills)
            );
            this.localStorage.setItem(
                "purchases",
                JSON.stringify(this.state.purchases)
            );
        }
    };

    //adds points by deleting code from array of possible refills to ensure code is not used twice"
    add = (amountToAdd: number, code: string): boolean => {
        let { amount, refills } = this.state;
        const index = refills.indexOf(code.toLowerCase());
        if (index > -1) {
            delete refills[index];
            amount += amountToAdd;
            // Sets the new state so components can reload
            this.setState(
                { amount: amount, refills: refills },
                this.updateLocal
            );
        } else {
            return false;
        }
        return true;
    };

    //subtracts points by adding code to array have an array that shows history of purchases
    subtract = (amountToSubtract: number, code: string): boolean => {
        let { amount, purchases } = this.state;
        const lowercase = code.toLowerCase();
        //purchases = purchases || [];
        if (amount < amountToSubtract || foodCodes.indexOf(lowercase) < 0) {
            return false;
        }
        purchases.push(lowercase);
        amount -= amountToSubtract;
        this.setState(
            { amount: amount, purchases: purchases },
            this.updateLocal
        );
        return true;
    };

    render() {
        return (
            <div>
                <Header
                    brand="My Youyouka"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white",
                    }}
                />
                <div
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                        height: "auto",
                        display: "inherit",
                        position: "relative",
                        margin: "0",
                        padding: "0",
                        paddingTop: "15vh",
                        border: "0",
                        alignItems: "center",
                    }}
                >
                    <Youyouka amount={this.state.amount} />
                    <Purchase subtractFunc={this.subtract} stations={foodStations}/>
                    <Refill addFunc={this.add} />
                    <Unexplored
                        remainingCodes={this.state.refills}
                        refillStations={refillStations}
                    />
                    <RecentActivity
                        visited={this.state.purchases}
                        foodStations={foodStations}
                    />
                    <Footer />
                </div>
            </div>
        );
    }
}

MainPage.defaultProps = {};

export default MainPage;
