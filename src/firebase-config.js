import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: "prezencik-e-shop.firebaseapp.com",
	databaseURL: "https://prezencik-e-shop-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "prezencik-e-shop",
	storageBucket: "prezencik-e-shop.appspot.com",
	messagingSenderId: "529149166969",
	appId: "1:529149166969:web:6445254940fd38fde45ba8",
	measurementId: "G-6H24BXZ5GC",
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init analytics
const analytics = getAnalytics(app);

// init services
export const db = getFirestore(app);
export const auth = getAuth(app);

// collection refs
export const prodRef = collection(db, "products");
export const catRef = collection(db, "categories");
export const upcomingHolidayRef = doc(db, "upcoming_holiday", "upcoming_holiday");

// init storage
export const storage = getStorage(app);
