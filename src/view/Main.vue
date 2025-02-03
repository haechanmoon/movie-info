<template>
    <div id="mainpage">
      <!-- 상단 -->
      <NavBar/>
      <!-- 중간 -->
      <main class="main">
        <div class="content">
          <div class="introduction">
            <h1> 주마등, 삶과 죽음이 만나는 공간 </h1>
            <p> 주마등은 삶과 죽음의 경계에서 우리의 기억을 잇는 특별한 공간입니다.</p>
            <p> 당신의 유언을 기록하고,</p>
            <p> 떠난 후에도 사랑하는 이들에게 메시지를 전할 수 있습니다.</p>
            <p> 간단한 문답을 통해 삶의 가치와 의미를 돌아보고, </p>
            <p> 온라인 추모공간을 통해 사랑과 기억을 영원히 남길 수 있습니다.</p>
            <p> 주마등은 당신의 이야기를 담고, 사라지지 않는 발자취를 새기는 곳입니다.</p>
          </div>
          <div class="img"></div>
        </div>
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
  justify-content: center; /* 중앙 정렬 */
  align-items: center;
  padding: 20px;
}
.content {
  display: flex;
  align-items: center;
  gap: 40px; /* 간격 조정 */
  width: 100%;
  max-width: 1200px;
}
.introduction {
  flex: 1;
  text-align: justify;
  max-width: 600px; /* 글이 너무 길어지지 않도록 설정 */
}

.introduction p {
  line-height: 1.6; /* 기존보다 약간 넓게 설정 */
  word-break: keep-all;
}

.img {
  flex: 1;
  height: 300px; /* 크기 증가 */
  background-image: url('@/assets/juma22.webp');
  background-size: cover; /* 이미지를 컨테이너에 맞게 채움 */
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px; /* 모서리를 둥글게 */
}
</style>
