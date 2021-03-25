/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmvduajDhL68xQPkVCbPfCF7lVwAzhjLM",
  authDomain: "pvt-h21-fabrizio.firebaseapp.com",
  databaseURL: "https://pvt-h21-fabrizio-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-fabrizio",
  storageBucket: "pvt-h21-fabrizio.appspot.com",
  messagingSenderId: "818019251943",
  appId: "1:818019251943:web:953668fd7a7af1b622d442",
  measurementId: "G-CMHQHR79XP"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";