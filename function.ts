// Function
// normal function, arrow function

function sum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(sum(5, 5));

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add(4, 5));

// object এর মধে ফাংশন ডিফাইন করব । যেটাকে বলা হয় 'মেথড'

const poorUser = {
  name: "Dipro",
  balance: 20,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    console.log(totalBalance);
    return totalBalance;
  },
};

poorUser.addBalance(50);

const results: number[] = [15, 20, 34];

const resultSquare = results.map((result: number): number => result * result);
console.log(resultSquare);
