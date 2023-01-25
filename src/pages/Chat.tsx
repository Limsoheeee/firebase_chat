import { auth,database,db,onAuthStateChanged } from "../services/firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import  sendChat  from "../helpers/database"
import { useState } from "react";

const Chat = () => {
  const user = auth?.currentUser;
  const db = getDatabase();
  console.log("getDatabase===>",db)
  const [msg, setMsg] = useState();

  const handleOnChange = (e: any) => {
    setMsg(e.target.value);
  };
  const handleSumbit = async (e: any ) => {
    e.preventDefault();
    console.log(msg);
    console.log(" auth===>", auth);
    try {     
      await set(ref(db, 'users/' + user ), {
    message: msg,
    timestamp: Date.now(),
    user:user,
  });
}
      // await sendChat({
      //   message: msg,
      //   timestamp: Date.now(),
      //   uid:user,
      // });
    catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="chat-container">
      <div className="chat-top">헤더</div>
      <div className="chat-middle">
        <li className="chat-bubble send">
          <p>
            하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~
            하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~
            하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~
          </p>
          <span>13:30PM</span>
        </li>
        <li className="chat-bubble receive">
          <p>방가방가!!</p>
          <span>13:31PM</span>
        </li>
      </div>
      <div className="chat-bottom">
        <form onSubmit={handleSumbit}>
          <input
            placeholder="내용을 입력하세요."
            value={msg}
            onChange={handleOnChange}
          />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
