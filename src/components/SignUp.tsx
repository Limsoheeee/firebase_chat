import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from '../services/firebaseConfig';


const SignUp = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e:any) => {
    const type = e.target.name;
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = async (e:any) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
            email, password);
            alert("회원가입이 되었습니다.");
            navigate("/");
            console.log("회원가입user===>",user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
    <div>
      <h1 >회원가입</h1>
      <form onSubmit={handleOnSubmit}>
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
          <button type="submit">회원가입</button>
        </div>
      </form>
      <hr></hr>
      <p>
        이미 회원이신가요? <Link to="/login">로그인</Link>
      </p>
    </div>
  </div>
  )
}

export default SignUp

