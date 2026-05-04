// const userRoles = {
//   admin: "admin",
//   editor: "editor",
//   viewer: "viewer",
// } as const;

const userRoles = {
  admin: "ADMIN",
  editor: "EDITOR",
  viewer: "VIEWER",
} as const;

// const canEdit = (role: keyof typeof userRoles) => {
//   if (role === userRoles.admin || role === userRoles.editor) {
//     return true;
//   } else {
//     return false;
//   }
// };

const canEdit = (role: (typeof userRoles)[keyof typeof userRoles]) => {
  if (role === userRoles.admin || role === userRoles.editor) {
    return true;
  } else {
    return false;
  }
};

console.log(canEdit(userRoles.admin));
