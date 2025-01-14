// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Configuration Firebase avec les informations de ton projet
const firebaseConfig = {
  apiKey: "AIzaSyD9U0sM78oc6ZaR5PeIcyInjGclR7VkUwA", // Remplace par ta clé API
  authDomain: "gestion-emplye.firebaseapp.com",  // Utilise ton domaine auth
  projectId: "gestion-emplye",  // Utilise ton ID de projet
  storageBucket: "gestion-emplye.appspot.com",  // Utilise ton bucket de stockage
  messagingSenderId: "22916807553",  // Utilise ton ID de messagerie
  appId: "1:22916807553:web:abc1234xyz"  // Remplace par ton app ID
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Obtenir l'authentification Firebase
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
