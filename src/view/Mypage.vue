<template>
  <section class="my-info" style="margin-left: 100px; margin-top: 50px">
    <h1>내 정보 관리</h1>
    <div class="profile-container">

      <!-- 프로필 사진 변경 -->
      <div class="profile-photo">
        <img
          :src="profilePhoto"
          alt="프로필 사진"
          @click="showProfileOverlay"/>
        <button @click="triggerFileInput">사진 변경</button>
        <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" style="display: none;"/>
      </div>

      <!-- 이름/닉네임 변경 -->
      <div class="info-fields">
        <div class="input-name">
          <label>이름</label>
          <input type="text" v-model="name" placeholder="이름을 입력하세요" />
        </div>
        <div class="input-nickname">
          <label>닉네임</label>
          <input type="text" v-model="nickname" placeholder="닉네임을 입력하세요" />
        </div>
        <button @click="saveInfo">저장</button>
      </div>
    </div>

    <!-- 한 줄 소개 -->
    <div class="intro-container">
      <label>한 줄 소개</label>
      <textarea
        v-model="introduction"
        placeholder="자신을 한 줄로 소개해보세요"
      ></textarea>
    </div>

    <!-- 프로필 확대 -->
     <div v-if="isOverlayVisible" class="overlay" @click="hideProfileOverlay">
      <img :src="profilePhoto" class="overlay-img"/>
     </div>
  </section>
</template>

<script>
export default {
  name: "MyInformation",
  data() {
    return {
      profilePhoto: require("@/assets/me.png"),
      name: "",
      nickname: "",
      introduction: "",
      isOverlayVisible: false,
    };
  },

  // 임시저장~~~~~~
  created() {
    this.loadInfo();
  },

  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },

    // 파일 선택 후 이미지 변경
    handleFileChange(event) {
      const file = event.target.files[0];
      if(file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profilePhoto = e.target.result;

          // 임시저장~~~~
          this.saveToLocalStorage("profilePhoto", e.target.result);
          
        };
        reader.readAsDataURL(file);
      }else {
        alert("이미지 파일을 선택해주세요.");
      }
    },

    showProfileOverlay() {
      this.isOverlayVisible = true;
    },

    hideProfileOverlay() {
      this.isOverlayVisible = false;
    },

    // 임시 저장 부분~~~~~~~~~~~~~~~~삭제
    saveInfo() {
    this.saveToLocalStorage("name", this.name);
    this.saveToLocalStorage("nickname", this.nickname);
    this.saveToLocalStorage("introduction", this.introduction);
    alert("정보가 저장되었습니다!");
    },
    loadInfo() {
    this.profilePhoto = this.getFromLocalStorage("profilePhoto") || this.profilePhoto;
    this.name = this.getFromLocalStorage("name") || "";
    this.nickname = this.getFromLocalStorage("nickname") || "";
    this.introduction = this.getFromLocalStorage("introduction") || "";
    },
    saveToLocalStorage(key, value) {
      localStorage.setItem(key, value);
    },
    getFromLocalStorage(key) {
    return localStorage.getItem(key);
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  }
};
</script>

<style scoped>
.my-info {
  padding: 20px;
}

h1 {
  font-size: 30px;
  margin-bottom: 20px;
}

.profile-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-photo {
  margin-right: 20px;
  text-align: center;
  position: relative;
}

.profile-photo img {
  width: 180px;
  height: 220px;
  border: 1px solid #ddd;
  object-fit: cover;
  cursor: pointer;
}

.profile-photo button {
  position: absolute;
  left: 50%;
  top: 100%;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
}

.info-fields {
  flex: 1;
  position: relative;
}

.input-name {
  margin-bottom: 15px;
}

.input-nickname {
  margin-bottom: 15px;
}

.input-name label {
  display: block;
  font-size: 22px;
  margin-bottom: 5px;
}

.input-nickname label {
  display: block;
  font-size: 22px;
  margin-bottom: 5px;
}

.input-name input {
  width: 200px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-nickname input {
  width: 500px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.info-fields button {
  position: absolute;
  font-size: 16px;
  padding: 5px 10px;
  left: 465px;
}

.intro-container {
  margin-top: 60px;
}

.intro-container label {
  display: block;
  font-size: 22px;
  margin-bottom: 5px;
}

.intro-container textarea {
  width: 100%;
  height: 80px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
}

.overlay-img {
max-width: 60%;
max-height: 90%;
border-radius: 10px;
transition: transform 0.3s ease;
}

.profile-photo img {
width: 180px;
height: 220px;
border: 1px solid #ddd;
object-fit: cover;
cursor: pointer;
}
</style>