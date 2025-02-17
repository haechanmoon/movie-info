<template>
  <div class="signup-page">
    <h1>회원가입</h1>

    <!-- 카카오 로그인 버튼 -->
    <button @click="loginWithKakao" class="kakao-button">
      <img src="@/assets/kakaologin.png" alt="카카오로 시작하기" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SignUpPage", // 🚨 Vue 규칙에 맞춰 컴포넌트 이름 설정!
  methods: {
    loginWithKakao() {
      if (!window.Kakao) {
        alert("카카오 SDK를 불러오지 못했어요.");
        return;
      }

      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("7f0b3d53d43f38c664d2706c5e883994"); // 🚨 여기에 네 카카오 앱 키 입력!
      }

      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:8080/kakaologin",
      });
    }
  }
};
</script>

<style scoped>
.signup-page {
  text-align: center;
  margin-top: 50px;
}

.kakao-button img {
  width: 180px;
}
</style>
