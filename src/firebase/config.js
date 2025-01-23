import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCITmQB3CPQ-VE1iYnHGr-_bTLchuX5ic4",
  authDomain: "brankits-db.firebaseapp.com",
  projectId: "brankits-db",
  storageBucket: "brankits-db.firebasestorage.app",
  messagingSenderId: "991533787672",
  appId: "1:991533787672:web:4b8e71f0e0e6596c7db16d"
}

const app = initializeApp(firebaseConfig)

export { app }