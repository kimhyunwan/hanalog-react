import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HanalogHome.css";

enum FEED_HOME_TAB_LIST {
  RECOMMEND = "RECOMMEND",
  RECENT = "RECENT",
  CHALLENGE = "CHALLENGE",
  RANKING = "RANKING",
}

const HanalogHome = () => {
  const [activeTab, setActiveTab] = useState<FEED_HOME_TAB_LIST>(
    FEED_HOME_TAB_LIST.RECOMMEND
  );
  const navigate = useNavigate();

  const changeTab = (tab: FEED_HOME_TAB_LIST) => {
    setActiveTab(tab);
    // 탭 변경에 따른 화면 전환 로직 추가 필요
  };

  const moveToMyHanalog = () => {
    navigate(`/hanalog/${myProfileInfo.profileId}`);
  };

  const myProfileInfo = {
    profileId: 381,
    profileImageURL:
      "https://image.hanatour.com/usr/mypage/profile/2025/01/08/0420a56c-02a8-4061-944a-d86377e1a14b.jpeg",
  };

  return (
    <div className="contents">
      <div className="my_hanalog" onClick={moveToMyHanalog}>
        <img src={myProfileInfo?.profileImageURL} alt="프로필" />
        <span>나의 여행만렙</span>
      </div>
      <div className="js_tabs sticky">
        <button
          className={activeTab === FEED_HOME_TAB_LIST.RECOMMEND ? "active" : ""}
          onClick={() => changeTab(FEED_HOME_TAB_LIST.RECOMMEND)}
        >
          추천
        </button>
        <button
          className={activeTab === FEED_HOME_TAB_LIST.RECENT ? "active" : ""}
          onClick={() => changeTab(FEED_HOME_TAB_LIST.RECENT)}
        >
          최신
        </button>
        <button
          className={activeTab === FEED_HOME_TAB_LIST.CHALLENGE ? "active" : ""}
          onClick={() => changeTab(FEED_HOME_TAB_LIST.CHALLENGE)}
        >
          챌린지
        </button>
        <button
          className={activeTab === FEED_HOME_TAB_LIST.RANKING ? "active" : ""}
          onClick={() => changeTab(FEED_HOME_TAB_LIST.RANKING)}
        >
          랭킹
        </button>
      </div>
    </div>
  );
};

export default HanalogHome;
