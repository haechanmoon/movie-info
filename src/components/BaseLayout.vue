<template>
  <header class="header">
    <!-- 로고 -->
    <div class="logo">
      <button @click="goToPage('main')">LOGO</button>
    </div>

    <!-- 네비게이션 메뉴 -->
    <nav class="nav">
      <button @click="goToPage('memories')">주마등</button>
      <button @click="goToPage('qa')">문답</button>
      <button @click="goToPage('friends')">친구페이지</button>
      <button @click="goToPage('mypage')">마이페이지</button>
    </nav>

    <!-- 회원가입 버튼 -->
    <div class="signup">
      <button @click="goToPage('signup')">로그인</button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goToPage(route) {
      this.$router.push({ name: route });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #ffffff;
  border-bottom: 2px solid #e0e0e0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo button {
  all: unset;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 15px;
  margin-left: auto; /* 우측 정렬 */
}

.nav button,
.signup button {
  all: unset;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.nav button {
  color: #555;
}

.nav button:hover {
  background-color: #f0f0f0;
  color: #222;
}

.signup button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin-left: 50px;
}

.signup button:hover {
  background-color: #0056b3;
}
</style>
