import  {onAuthStateChanged,db,auth} from "../services/firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

export default function sendChat(data) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      alert("로그인 정보가 없습니다.")
    }
  });
  
  return db?.ref("chats")?.push({
    message: db.message,
    timestamp: db.timestamp,
    uid: db.uid,
  });
};
