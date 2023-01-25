import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={ () =>  {navigate('/login')}}>로그인하기</h1>
    </div>
  )
}

export default Home
