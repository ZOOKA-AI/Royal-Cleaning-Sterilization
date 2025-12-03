import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ⚠️ هام جداً: يجب عليك استبدال هذه البيانات ببيانات مشروعك من Google Firebase Console
// 1. اذهب إلى console.firebase.google.com
// 2. أنشئ مشروع جديد
// 3. أضف تطبيق ويب (Web App)
// 4. انسخ الإعدادات والصقها هنا

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// تهيئة التطبيق
// نستخدم try-catch لتجنب توقف التطبيق إذا لم يتم وضع المفاتيح بعد
let app;
let db: any;
let auth: any;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
} catch (error) {
    console.error("Firebase Initialization Error: تأكد من وضع مفاتيح الربط في ملف services/firebase.ts", error);
}

export { db, auth };
