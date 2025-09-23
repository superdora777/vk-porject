import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../api/firebase";

//Запрос в базу даных за карточкой
export const getCard = async (cardId: string) => {
  const ref = doc(db, "cards", cardId);
  const snap = await getDoc(ref);
  return { id: snap.id, ...snap.data() };
  // if (snap.exists()) {
  //   return { id: snap.id, ...snap.data() };
  // } else {
  //   return null;
  // }
};

//Редактируем карточку
export const editCard = async (id: string, data = {}) => {
  return updateDoc(doc(db, "cards", id), {
    data,
  });
};
