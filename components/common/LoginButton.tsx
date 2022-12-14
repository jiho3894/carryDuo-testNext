// import { KAKAO_AUTH_URL } from "../../servers/OAuth";
import Image from "next/image";

const KakaoLogin = () => {
  const onClick = () => {
    // window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div onClick={onClick} className="relative">
      <button className=" h-[54px] w-[314px] rounded-lg bg-[#F8E326] font-bold text-black">
        카카오 로그인
      </button>
      <div className="absolute top-[14px] left-[14px]">
        <Image
          alt=""
          src="https://raw.githubusercontent.com/sparta-team6/CO-UP-TEAM-FE/master/src/images/Login/KakaoLogin.png"
          width={28}
          height={28}
        />
      </div>
    </div>
  );
};

export default KakaoLogin;
