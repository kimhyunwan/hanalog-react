import { FaArrowLeft, FaTrophy } from 'react-icons/fa';
import './Header.css'; // CSS 파일 import

const Header = () => {
  return (
    <header className="header">
      <div className="leftGroup">
        <button className="iconButton">
          <FaArrowLeft size={24} />
        </button>
        <h1 className="title">여행만렙</h1>
      </div>
      <button className="iconButton">
        <FaTrophy size={24} />
      </button>
    </header>
  );
};

const HanalogHome = () => {
  return (
    <div>
      <Header />
      <h2>여기가 여행만렙 메인 페이지입니다.</h2>
    </div>
  );
};

export default HanalogHome;
