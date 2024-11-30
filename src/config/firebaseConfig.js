
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  
    apiKey: "AIzaSyBkTLSlbIfpII_WIEswHjydzhQLJMsq1vE",
    authDomain: "doorbell-1da42.firebaseapp.com",
    projectId: "doorbell-1da42",
    storageBucket: "doorbell-1da42.appspot.com",
    messagingSenderId: "424229032311",
    appId: "1:424229032311:web:ef4494792a24dc2d1b9172"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta el objeto auth para ser usado en otros archivos
const auth = getAuth(app);

export { auth };
