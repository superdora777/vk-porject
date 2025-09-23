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
import { db } from "../../api/firebase";

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
