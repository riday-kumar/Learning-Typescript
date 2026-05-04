// set of fixed string leteral

// type TUserRoles = "Admin" | "Editor" | "Viewer";

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

// const canEdit = (role: TUserRoles) => {
//   if (role === "Admin" || role === "Editor") {
//     return true;
//   } else {
//     return false;
//   }
// };

const canEdit = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissable = canEdit(UserRole.Admin);
console.log(isEditPermissable);
