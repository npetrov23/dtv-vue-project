import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzCe3jMZ4GxFpSiG4D8DOnSlRiWv7qQeQ",
  authDomain: "dtv-db.firebaseapp.com",
  projectId: "dtv-db",
  storageBucket: "dtv-db.appspot.com",
  messagingSenderId: "978626359539",
  appId: "1:978626359539:web:6d3065af857def3daa0786"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


// export const db = firebase.firestore()


app.mount('#app')
