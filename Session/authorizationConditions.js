const conditions = {
  isAdmin: (authUser) =>
    authUser && authUser.roles && authUser.role === 'ADMIN',
  isSignedIn: (authUser) => !!authUser,
}

export default conditions
