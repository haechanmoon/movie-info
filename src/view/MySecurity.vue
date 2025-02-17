<template>
  <MyInfoLayout>
    <section style="margin-left: 100px; margin-top: 50px">
      <h1>비밀번호 변경</h1>
      <div class="input-group">
        <label>현재 비밀번호</label>
        <input type="password" placeholder="현재 비밀번호를 입력하세요" />
      </div>
      <div class="input-group">
        <label>변경할 비밀번호</label>
        <input type="password" placeholder="변경할 비밀번호를 입력하세요" />
      </div>
      <div class="input-group">
        <label>비밀번호 확인</label>
        <input type="password" placeholder="비밀번호를 다시 입력하세요" />
      </div>
      <hr/>
      <h1>2단계 인증</h1>
      <p>2단계 인증에 대한 정보를 추가할 수 있습니다.</p>
    </section>
  </MyInfoLayout>
</template>
  
  <script>
  import MyInfoLayout from "@/components/MyInfoLayout.vue";

  export default {
    name: "MyInformation",
    components: {
        MyInfoLayout,
    },
  };
  </script>
  
  <style scoped>
  section h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    font-size: 22px;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 40%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  hr {
    margin: 30px 0;
    border: none;
    border-top: 1px solid #ddd;
  }
  </style>
  