/**
 * Class used to verify and store money
 * @flow
 */

class MoneyVerifier {

    amount: number;
    codes: [];
    subCodes: [];
    
    //checks whether the application has been initialized and gets local data, else set variables to initial value and store them into local storage
    constructor() {

        if (window.localStorage.getItem("id")) {
            this.amount = window.localStorage.getItem("amount")
            this.codes = window.localStorage.getItem("codes")
            this.subCodes = window.localStorage.getItem("subCodes")
        }
        else {
            this.amount = 3;
            this.codes = ["StationKey1", "StationKey2", "StationKey3", "StationKey4"];
            this.subCodes = [];

            const uuidv4 = require('uuid/v4');
            window.localStorage.setItem("amount", this.amount)
            window.localStorage.setItem("codes", JSON.stringify(this.codes))
            window.localStorage.setItem("subCodes", JSON.stringify(this.subCodes))
            window.localStorage.setItem("id", uuidv4())
        }
    }

    //adds points by deleting code from array of possible codes to ensure code is not used twice"
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

    //subtracts points by adding code to array have an array that shows history of purchases
    subtract(amount: number, code: string): boolean {

        this.subCodes = this.subCodes || [];
        this.subCodes.push(code);
        this.amount -= amount
        window.localStorage.setItem("amount", this.amount)
        window.localStorage.setItem("subCodes", JSON.stringify(this.subCodes))

        return true;
    }

    getUsedCodes(): [] {
        return this.subCodes;
    }

    getAmount(): number {
        return this.amount;
    }

}

export default MoneyVerifier;