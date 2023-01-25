import  {database} from "../services/firebaseConfig";

export default function sendChat(data) {
  return database.ref("chats").push({
    message: data.message,
    timestamp: data.timestamp,
    uid: data.uid,
  });
}