<template>
  <div class="signup-with-email">
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <div class="form-group">
        <label for="confirmPassword">비밀번호 확인</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>

      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="phone">휴대폰 번호</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>

      <button type="submit">가입하기</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupWithEmail",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
    };
  },
  methods: {
    signup() {
      if (this.password !== this.confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      alert("회원가입 성공!");
    },
  },
};
</script>

<style scoped>
.signup-with-email {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: center;
  
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #828486;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #828486;
}

</style>

