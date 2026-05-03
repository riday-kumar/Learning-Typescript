const friends: string[] = ["Rahim", "Karim"];

const schoolFriends: string[] = ["Dipro", "Dipto"];

const clgFriends: string[] = ["Sumon", "Hridoy"];

friends.push(...schoolFriends);
const allFriends = [...friends, ...clgFriends];
console.log(allFriends);

const user = {
  name: "Hridoy",
  roll: 13,
};

const userOtherInfo = {
  hobby: "coding",
  favouriteColor: "Blue",
};

const userInfo = { ...user, ...userOtherInfo };

console.log(userInfo);

// rest operator
const sentInvitation = (...friends: string[]) => {
  //   console.log(`send invitation to ${friends}`);
  friends.map((friend) => console.log("invitatio send to :", friend));
};
sentInvitation("hridoy", "rahim");
