import { collection, doc, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getCartItems = async () => {
  const collectionRef = collection(db, "cartItems");
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createCartItem = async (data) => {
  const collectionRef = collection(db, "cartItems");
  const newCartItemRef = await addDoc(collectionRef, data);
  return { id: newCartItemRef, ...data };
};
