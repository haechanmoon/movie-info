<template>
  <div id="app" class="signup-page">
    <!-- 카카오톡 회원가입 버튼 -->
    <div class="signup-container">
      <SignupWithKakao />
    </div>

    <!-- 이메일 회원가입 버튼 (카카오톡 버튼 아래 배치) -->
    <div class="email-signup">
      <button @click="showEmailForm = !showEmailForm" class="toggle-email-btn">
        이메일로 가입하기
      </button>
      <SignupWithEmail v-if="showEmailForm" />
    </div>
  </div>
</template>

<script>
import SignupWithKakao from "@/components/SignupWithKakao.vue";
import SignupWithEmail from "@/components/SignupWithEmail.vue";

export default {
  name: "SignupPage",
  components: {
    SignupWithKakao,
    SignupWithEmail,
  },
  data() {
    return {
      showEmailForm: false,
    };
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
  height: 100vh;
  text-align: center;
}

/* 카카오톡 회원가입 버튼 컨테이너 */
.signup-container {
  margin-bottom: 15px; /* 카카오 버튼 아래 여백 추가 */
}

/* 이메일 회원가입 버튼 컨테이너 */
.email-signup {
  display: flex;
  flex-direction: column;
  align-items: center; /* 버튼을 중앙 정렬 */
  width: 100%;
}

/* 이메일 회원가입 버튼 스타일 */
.toggle-email-btn {
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  margin-top: 10px; /* 버튼 간 간격 조절 */
}

/* 버튼 마우스 오버 효과 */
.toggle-email-btn:hover {
  background-color: #0056b3;
}
</style>
