import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../api/firebase";

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

//Редактируем колонку
export const editColumn = async (id: string, name: string) => {
  const trimmed = name.trim();
  if (!trimmed) throw new Error("Имя пустое");
  await updateDoc(doc(db, "columns", id), {
    name: trimmed,
    updatedAt: serverTimestamp(),
  });
};
