<template>
  
  <div class="mypage">
    <router-view></router-view>
    <header class="header">
      <div class="logo">LOGO</div>
      <nav class="nav">
        <button @click="goToPage('mypage')">마이페이지</button>
        <button @click="goToPage('qa')">문답</button>
        <button @click="goToPage('memories')">주마등</button>
        <button @click="goToPage('friends')">친구페이지</button>
      </nav>
      <div class="signup">
        <button @click="goToPage('signup')">회원가입</button>
      </div>
    </header>
    <h1>마이페이지</h1>
    <p>여기서는 사용자 정보를 볼 수 있습니다.</p>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.nav button,
.signup button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}

.nav button:hover,
.signup button:hover {
  background-color: #eee;
}
</style>
