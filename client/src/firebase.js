import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9BdrLhLBmD3til-QPQQuRNi07Uu54Npo",
  authDomain: "mern-7fada.firebaseapp.com",
  projectId: "mern-7fada",
  storageBucket: "mern-7fada.appspot.com",
  messagingSenderId: "452050860596",
  appId: "1:452050860596:web:bf06d7878906aa74bae861",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
