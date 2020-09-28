const conditions = {
  isAdmin: (authUser) =>
    authUser && authUser.roles && authUser.roles === "ADMIN",
  isSignedIn: (authUser) => !!authUser,
};

export default conditions;
