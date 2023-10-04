import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

// TODO: Refactor this to make it less repetitive (including get cart items method)

export const getProducts = async () => {
  const collectionRef = collection(db, "products");
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  return { id: snapshot.id, ...snapshot.data() };
};

export const getVariants = async (id) => {
  const collectionRef = collection(db, "products/" + id + "/variants");
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
