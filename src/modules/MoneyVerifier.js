/**
 * Class used to verify and store money
 * @flow
 */

 class MoneyVerifier {
    amount: number;
    
    constructor(amount: number) {
        // Add more stuff if needed
        this.amount = amount;
    }

    add(amount: number, code: string): boolean {
        // to be filled out...
        this.amount += amount;
        return true;
    }

    subtract(amount: number, code: string): boolean {
        // to be filled out...
        this.amount -= amount;
        return true;
    }

    getAmount(): number {
        return this.amount;
    }

 }

 export default MoneyVerifier;