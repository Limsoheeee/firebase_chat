import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  firebaseAuth,
  signInWithEmailAndPassword,
} from "../services/firebaseConfig";

const Login = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e: any) => {
    const type = e.target.name;
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      try {
        const userData = await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        ).then((userCredential) => {
          const user = userCredential.user;
          alert("로그인 되었습니다.")
          navigate("/")
          console.log("로그인user===>", user);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-container">
      <div className="sign-wrap">
        <h1 className="title">로그인</h1>
        <form className="sign-form" onSubmit={handleOnSubmit}>
          <div>
            <input
              type="email"
              placeholder="이메일을 입력하세요."
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="password"
              value={password}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <button type="submit">로그인</button>
          </div>
        </form>
        <hr></hr>
        <p>
          회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
