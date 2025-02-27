import { useNavigate } from "react-router-dom";
import Membership from "./Membership";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <a href="#"><img src={`${process.env.PUBLIC_URL}/images/logo.png` } alt="로고"/> </a>
        <div>
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
          <button onClick={()=>{
            navigate("/Login");
          }}>로그인</button>
        </div>
      </nav>
      <div className="header-content">
        <h2>영화,시리즈 등을 <br/>무제한으로</h2>
        <h4>5,500으로 시작하세요. 멤버쉽은 언제든지 해지 가능합니다.</h4>
        <Membership/>
      </div>
    </header>
  );
};

export default Header;