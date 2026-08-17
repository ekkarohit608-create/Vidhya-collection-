// ============================================================
// Firebase configuration for Vidhya Collection
// ------------------------------------------------------------
// 1. Go to https://console.firebase.google.com and create a
//    project (or open your existing one).
// 2. In Project Settings > General > "Your apps", register a
//    Web app (</>) and copy the firebaseConfig values below.
// 3. Enable Authentication > Sign-in method > Email/Password.
// 4. Create Firestore Database (Production mode) and
//    Firebase Storage.
// 5. Create your admin user under Authentication > Users, then
//    add that email to ADMIN_EMAILS below.
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js"

// TODO: Replace these placeholder values with your own Firebase web config.
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
}

// Only these email addresses are allowed into the admin dashboard.
// Any other authenticated user is immediately signed out.
export const ADMIN_EMAILS = ["admin@vidhyacollection.com"]

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export const isConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY"
