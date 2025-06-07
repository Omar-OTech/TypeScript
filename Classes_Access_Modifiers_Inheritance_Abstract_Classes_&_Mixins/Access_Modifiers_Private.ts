// TypeScript supports three access modifiers on class members:
// - `public` (default): accessible anywhere.
// - `protected`: accessible within the class and its subclasses.
// - `private`: accessible only within the class itself.
// - Additionally, `readonly` can be combined with any modifier to prevent reassignment after initialization.


// private balance ensures only BankAccount methods can read/write balance.

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acct = new BankAccount(1000);
acct.deposit(500);
console.log(acct.getBalance()); // 1500
// console.log(acct.balance);   // ❌ Error: 'balance' is private
