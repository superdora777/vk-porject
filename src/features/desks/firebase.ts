import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../api/firebase";

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

//Редактирование доски
export const editDesk = async (id: string, name: string) => {
  const trimmed = name.trim();
  if (!trimmed) throw new Error("Имя пустое");
  await updateDoc(doc(db, "desks", id), {
    name: trimmed,
    updatedAt: serverTimestamp(),
  });
};
