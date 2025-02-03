<template>
  <div id="app" class="signup-page">
    <!-- 회원가입 안내 문구 -->
    <h2 class="signup-title">회원가입을 하고 더 많은 서비스를 누려보세요!</h2>

    <!-- 카카오톡 회원가입 버튼 -->
    <div class="signup-container">
      <button @click="loginWithKakao" class="kakao-button">
        카카오톡으로 가입하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    loginWithKakao() {
      // Kakao SDK 초기화
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("d7801aacb609dfa5a07922fc5dc21796"); // Kakao Developers에서 발급받은 JavaScript 키
      }

      // 로그인 처리
      window.Kakao.Auth.login({
        success: (authObj) => {
          console.log("로그인 성공:", authObj);

          // 사용자 정보 요청
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: (res) => {
              console.log("사용자 정보:", res);
              alert(`환영합니다, ${res.kakao_account.profile.nickname}님!`);
            },
            fail: (error) => {
              console.error("사용자 정보 요청 실패:", error);
            },
          });
        },
        fail: (err) => {
          console.error("로그인 실패:", err);
        },
      });
    },
  },
};
</script>


<style scoped>
/* 전체 페이지 중앙 정렬 */
.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  height: 100vh; /* 화면 전체 높이 */
  text-align: center;
}

/* 회원가입 안내 문구 스타일 */
.signup-title {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
}

/* 카카오톡 회원가입 버튼 스타일 */
.kakao-button {
  background-color: #fee500; /* 카카오 브랜드 색상 */
  color: #3c1e1e; /* 카카오 기본 텍스트 색상 */
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

/* 버튼에 마우스를 올렸을 때 효과 */
.kakao-button:hover {
  background-color: #fada00;
}
</style>
