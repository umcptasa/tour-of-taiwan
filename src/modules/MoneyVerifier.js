/**
 * Class used to verify and store money
 * @flow
 */

 class MoneyVerifier {
    amount: int;
    
    constructor(amount: int) {
        // Add more stuff if needed
        this.amount = amount;
    }

    add(amount: int, code: string): boolean {
        // to be filled out...
        return true;
    }

    subtract(amount: int, code: string): boolean {
        // to be filled out...
        return true;
    }

    getAmount(): int {
        return this.amount;
    }

 }

 export default MoneyVerifier;