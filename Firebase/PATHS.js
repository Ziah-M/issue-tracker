// API ENDPOINTS FOR FIREBASE
// to be used with app.database.ref

// *** --- TICKETS --- ***
export const TICKETS = () => "tickets";
export const TICKET = (id) => (id ? `tickets/${id}` : "");

// *** --- PROJECTS --- ***
export const PROJECTS = "projects";
export const PROJECT = (id) => (id ? `projects/${id}` : "");
export const PROJECT_PERSONNEL = (id) => (id ? `projects/${id}/personnel` : "");
export const PROJECT_TICKETS = (id) => (id ? `projects/${id}/tickets` : "");

// *** --- USERS --- ***
export const users = () => "users";
export const user = (id) => `users/${id}`;
