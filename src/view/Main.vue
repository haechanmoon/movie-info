<template>
    <div id="mainpage">
      <!-- 상단 -->
      <NavBar/>
      <!-- 중간 -->
      <main class="main">
        <div class="introduction">
          <h1> 주마등은 이런 공간이에요 </h1>
          <p> 주마등은 현실과 죽음의 경계를 넘나드는 공간입니다.</p>
          <p> 당신의 유언을 기록하고, 사후에 사랑하는 이에게 메세지를 나길 수 있는 공간을 제공합니다.</p>  
          <p> 간단한 문답을 통해서 내 삶의 가치와 의미를 되돌아보며, </p>
          <p> 온라인 추모공간을 통해서 내 사랑과 마음을 영원히 전하세요. </p>
          <p> 주마등은 당신의 기억을 남기고, 사라지지 않는 소중한 발자취를 남기는 특별한 공간입니다. </p>
        </div>
        <div class="img"></div>
      </main>
    </div>
    
  </template>
  
  <script>
  
  export default {
    name: 'App_Vue',
    data() {
      return {
        question: "",
      };
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
  .main {
    flex-grow: 1;
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    padding: 20px;
  }
  .img {
  width: 200px; /* 적절한 크기 지정 */
  height: 100px;
  background-image: url('@/assets/logo.png'); /* Vue에서 @는 src 폴더를 의미 */
  background-size: contain; /* 이미지 크기 조정 */
  background-repeat: no-repeat;
  background-position: center;
  
}
  </style>
  