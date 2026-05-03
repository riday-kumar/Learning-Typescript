const user = {
  id: 123,
  name: {
    firstName: "Hridoy",
    lastName: "saha",
  },
  roll: 22,
  fbColor: "Red",
};

const {
  name: { lastName: surName },
  fbColor: favoriteColor,
} = user;
console.log(surName, favoriteColor);

const friends = ["Karim", "Rahim", "Mohin"];

// const [ myFriend] = friends; // 0 index
// const [, , myFriend] = friends; // 2 index
const [, myFriend] = friends; // 1 index
console.log(myFriend);
