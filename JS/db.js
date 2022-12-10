// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBTS_4ZpYB_Z33rThsLGR3jIE5MosTB3nk",
    authDomain: "pwas-1670458218420.firebaseapp.com",
    projectId: "pwas-1670458218420",
    storageBucket: "pwas-1670458218420.appspot.com",
    messagingSenderId: "59998870402",
    appId: "1:59998870402:web:59266822cb9b321d020d9b",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getActivities(db) {
    const activityCol = collection(db, "locations");
    const activitiesSnapshot = await getDocs(activityCol);
    const activityList = activitiesSnapshot.docs.map((doc) => doc);
    return activityList;
}

const unsub = onSnapshot(collection(db, "locations"), (doc) => {
    //console.log(doc.docChanges());
    doc.docChanges().forEach((change) => {
        // console.log(change, change.doc.data(), change.doc.id);
        if (change.type === "added") {
            //do something
            //    renderTask(change.doc.data(), change.doc.id);
        }
        if (change.type === "removed") {
            //do something

        }
    });
});