import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMY82r-CDnprNaJdCJN44ZtektIQ1v0t8",
  authDomain: "vk-porject.firebaseapp.com",
  projectId: "vk-porject",
  storageBucket: "vk-porject.firebasestorage.app",
  messagingSenderId: "337047664819",
  appId: "1:337047664819:web:02473350a9188f9fd318c6",
  measurementId: "G-8B2Z99E0L3",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

//Создание новой доски
export const createDesk = async (name: string) => {
  const ref = await addDoc(collection(db, "desks"), { name });
  const snap = await getDoc(ref);
  return { ref, snap };
};

//Запрос в базу даных за досками
export const getDesks = async () => {
  const querySnapshot = await getDocs(collection(db, "desks"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
  }));
  return data;
};

//Удаляем доску
export const deleteDesk = async (id: string) => {
  try {
    await deleteDoc(doc(db, "desks", id));
  } catch (error) {
    console.error;
  }
};

//Создание новой колонки
export const createColumn = async (name: string, deskId: string) => {
  try {
    const ref = await addDoc(collection(db, "columns"), { name, deskId });
    const snap = await getDoc(ref);
    return { ref, snap };
  } catch (message) {
    return console.error(message);
  }
};

//Запрос в базу даных за колонками
export const getColumns = async (deskId: string) => {
  const q = query(collection(db, "columns"), where("deskId", "==", deskId));

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => {
    const { deskId, name } = doc.data() as { deskId: string; name: string };
    return {
      id: doc.id,
      deskId,
      name,
    };
  });
  return data;
};

//Удаляем колонку
export const deleteColumn = async (id: string) => {
  try {
    await deleteDoc(doc(db, "columns", id));
  } catch (error) {
    console.error;
  }
};

//Создание новой карточки
export const createCard = async (name: string, columnId: string) => {
  try {
    const ref = await addDoc(collection(db, "cards"), { name, columnId });
    const snap = await getDoc(ref);
    return { ref, snap };
  } catch (message) {
    return console.error(message);
  }
};

//Запрос в базу даных за карточками
export const getCards = async (columnId: string) => {
  const q = query(collection(db, "cards"), where("columnId", "==", columnId));

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => {
    const { columnId, name } = doc.data() as {
      columnId: string;
      name: string;
    };
    return {
      id: doc.id,
      columnId,
      name,
    };
  });
  return data;
  // return data;
};

//Удаляем карточку
export const deleteCard = async (id: string) => {
  try {
    await deleteDoc(doc(db, "cards", id));
  } catch (error) {
    console.error;
  }
};
