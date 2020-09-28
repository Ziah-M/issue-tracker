import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { FIREBASE_CONFIG } from "../private";
const DOMAIN_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "http://zm-portfolio.web.app";

const REACT_APP_CONFIRMATION_EMAIL_REDIRECT = DOMAIN_URL;

class Firebase {
  constructor() {
    app.initializeApp(FIREBASE_CONFIG);
    this.auth = app.auth();
    this.db = app.database();

    this.serverValue = app.database.ServerValue;

    this.emailAuthProvider = app.auth.EmailAuthProvider;
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  /* ------------------------------------------------------------------ */
  /* ---------------------------- AUTH API -------------------------- */
  /* ------------------------------------------------------------------ */

  // Merge db user data into auth user
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val() || {};

            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user

            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: REACT_APP_CONFIRMATION_EMAIL_REDIRECT, //Optional redirect url after email is confirmed
    });

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => {
    this.auth.signOut();
  };

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** --- USERS IN REALTIME DATABASE --- ***
  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

  /* ------------------------------------------------------------------ */
  /* --------------------------- API ENDPOINTS ------------------------- */
  /* ------------------------------------------------------------------ */

  // *** --- TICKETS --- ***
  tickets = () => this.db.ref("tickets");
  ticket = (id) => this.db.ref(`tickets/${id}`);

  // *** --- PROJECTS --- ***
  projects = () => this.db.ref("projects");
  project = (id) => this.db.ref(`projects/${id}`);

  /* ------------------------------------------------------------------ */
  /* --------------------------- CRUD OPERATIONS ------------------------- */
  /* ------------------------------------------------------------------ */

  getTicket = (id) => this.ticket(id).once((ticket) => ticket);
  createTicket = (ticket) => this.tickets().push(ticket);
  deleteTicket = (id) => this.ticket(id).remove();
  updateTicket = (id, ticket) => this.ticket(id).update({ ...ticket });

  getProject = (id) => this.project(id).once((project) => project);
  createProject = (project) => this.projects().push(project);
  updateProject = (id, project) => this.project(id).update({ ...project });
  deleteProject = (id) => this.project(id).remove();
}
export default Firebase;
