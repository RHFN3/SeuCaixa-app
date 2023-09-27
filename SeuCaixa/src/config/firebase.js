
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator  } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyCVla6Qp5tEo-0wlF7PHRAOQisyCYOo-Gk",
  authDomain: "seu-caixa.firebaseapp.com",
  projectId: "seu-caixa",
  storageBucket: "seu-caixa.appspot.com",
  messagingSenderId: "71008187632",
  appId: "1:71008187632:web:dd8503770271d60af3be35",
  measurementId: "G-JQQ77T02FZ"
};


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)/*, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
connectAuthEmulator(auth, "http://127.0.0.1:9099");*/

export { auth };