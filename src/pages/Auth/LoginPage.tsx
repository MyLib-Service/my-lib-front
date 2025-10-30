import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";

function LoginPage() {
  const { nickname, isLoggedIn, setNickname, login, logout } = useUserStore();
  const navigation = useNavigate();

  const handleLogin = () => {
    login();
    navigation("/home");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">로그인 페이지</h1>

      {isLoggedIn ? (
        <>
          <p>{nickname}님 환영합니다.</p>
          <button onClick={logout}>로그아웃</button>
        </>
      ) : (
        <>
          <input
            className="border p-1 mr-2"
            placeholder="닉네임 입력"
            onChange={(e) => setNickname(e.target.value)}
          />
          <button onClick={login}>로그인</button>
        </>
      )}
    </div>
  );
}

export default LoginPage;
