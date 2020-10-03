const conditions = {
  isAdmin: (authUser) =>
    authUser && authUser.roles && authUser.role.includes('ADMIN'),
  isSignedIn: (authUser) => !!authUser,
}

export default conditions
