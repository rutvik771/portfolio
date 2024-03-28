import firebase_app from "../config";
import { getFirestore, doc, setDoc ,getDoc,getDocs,collection} from "firebase/firestore";

const db = getFirestore(firebase_app)

export async function addData(collection, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getDataById(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getAllData(collectionName) {
    const usersCollectionRef = collection(db, collectionName);
    const snapshot = await getDocs(usersCollectionRef);
    const data = [];
    snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}