<template>
  <router-view></router-view>
  <div id="app">
    
    <!-- 상단 -->
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

    <!-- 중간 -->
    <main class="main">
      <div class="introduction">
        <h1> 주마등은 이런 공간이에요 </h1>
        <p> 주마등은 현실과 죽음의 경계를 넘나드는 공간입니다. 
            당신의 유언을 기록하고, 사후에 사랑하는 이에게 메세지를 나길 수 있는 공간을 제공합니다.
            간단한 문답을 통해서 내 삶의 가치와 의미를 되돌아보며,
            온라인 추모공간을 통해서 내 사랑과 마음을 영원히 전하세요.
            주마등은 당신의 기억을 남기고, 사라지지 않는 소중한 발자취를 남기는 특별한 공간입니다.
        </p>
      </div>
    </main>

    <!-- 하단 -->
    <footer class="footer">
      <form @submit.prevent="submitQuestion">
        <label for="question">오늘의 질문:</label>
        <input type="text" id="question" v-model="question" placeholder="질문을 입력하세요" />
        <button type="submit">제출</button>
      </form>
    </footer>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      question: "",
    };
  },
  methods: {
    goToPage(route) {
      // this.$router.push는 vue-router의 메서드로, 페이지를 변경하는 기능을 수행
      this.$router.push({ name: route });
    },
    submitQuestion() {
      if (this.question.trim()) {
        alert(`질문이 제출되었습니다: ${this.question}`);
        this.question = ""; // 입력창 초기화
      } else {
        alert("질문을 입력하세요.");
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}

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

.main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 20px;
}

.footer {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
}

.footer form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer input {
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.footer button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}

.footer button:hover {
  background-color: #eee;
}
</style>
