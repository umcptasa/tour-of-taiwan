/**
 * Class used to verify and store money
 * @flow
 */

class MoneyVerifier {

    amount: number;
    codes: [];
    subtract: [];
 
    constructor() {

        if (window.localStorage.getItem("id")) {
            this.amount = window.localStorage.getItem("amount")
            this.codes = window.localStorage.getItem("codes")
            this.subtract = window.localStorage.getItem("subtract")
        }
        else {
            this.amount = 3;
            this.codes = ["StationKey1", "StationKey2", "StationKey3", "StationKey4"];
            this.subtract = [];

            const uuidv4 = require('uuid/v4');
            window.localStorage.setItem("amount", this.amount)
            window.localStorage.setItem("codes", JSON.stringify(this.codes))
            window.localStorage.setItem("subtract", JSON.stringify(this.subtract))
            window.localStorage.setItem("id", uuidv4())
        }
    }

    add(amount: number, code: string): boolean {

        const index = this.codes.indexOf(code)
        if (index > -1) {
            delete this.codes[index]
            this.amount += amount
            window.localStorage.setItem("amount", this.amount)
            window.localStorage.setItem("codes", JSON.stringify(this.codes))
        }
        else {
            return false;
        }
        return true;
    }

    subtract(amount: number, code: string): boolean {

        this.subtract.push(code);
        this.state.amount -= amount
        window.localStorage.setItem("amount", this.amount)
        window.localStorage.setItem("subtract", JSON.stringify(this.subtract))

        return true;
    }

    getAmount(): number {
        return this.amount;
    }

}

export default MoneyVerifier;