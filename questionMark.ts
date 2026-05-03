// ? -----> turnary operator
// ?? -------- > nullish (null / undefined হলে কাজ করে।)
// ?. ----------> optional chaining
const userAge: number = 15;

userAge >= 18 ? console.log("eligibal for marrage") : console.log("খোকা");

// const userTheme = undefined;
const userTheme = "green theme";
const selectedTheme = userTheme ?? "light";
console.log(selectedTheme);

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Rampura",
    postalCode: "4546",
  },
};

console.log(user?.address?.postalCode);
