<template>
  <div id="qna">
    <!-- 상단 -->

    <!-- 문답 페이지 내용 -->
    <main class="main">
      <div class="questions-card">
        <h1>문답</h1>
        <!-- 검색 기능 -->
        <input
          type="text"
          v-model="searchQuery"
          placeholder="질문 + 답변 검색..."
          class="search-input"
        />
        <!--새 질문 추가-->
        <div class="new-question">
        <form @submit.prevent="addQuestion">
        <label for="newQuestion">새 질문:&nbsp;&nbsp;&nbsp; </label>
        <input type="text" id="newQuestion" v-model="newQuestion" placeholder="새 질문을 입력하세요" />
        <button type="submit">추가</button>
          </form>
        </div>
        <ul>
          <li v-for="(question, index) in paginatedQuestions" :key="index" class="question-item">
            <div class="question-header">
              <button class="ellipsis-btn" @click="toggleOptions(index)">&#x22EE;</button>
              <span><strong>질문:</strong> {{ question.text }}</span>
              <div v-if="activeOptions === index" class="options-menu">
                <button @click="editQuestion(index)">✎</button>
                <button @click="deleteQuestion(index)">❌</button>
              </div>
            </div>
            <!-- 저장된 답변 표시 -->
            <div v-if="question.answer" class="answer-display">
              <button class="ellipsis-btn" @click="toggleAnswerOptions(index)">&#x22EE;</button>
              <strong>답변:</strong> {{ question.answer }}
              <div v-if="activeAnswerOptions === index" class="options-menu">
                <button @click="editAnswer(index)">✎</button>
                <button @click="deleteAnswer(index)">❌</button>
              </div>
            </div>
            <!-- 질문에 답변을 추가할 부분 -->
            <div v-if="!question.answer" class="answer-section">
              <input
                type="text"
                v-model="question.newAnswer"
                :placeholder="'답변 입력...'"
                @keyup.enter="saveAnswer(index)"
              />
              <button class="small-btn" @click="saveAnswer(index)">저장</button>
            </div>
          </li>
        </ul>

        <!-- 페이지네이션 버튼 -->
        <div class="pagination">
          <button v-if="currentPage > 1" class="small-btn" @click="changePage(currentPage - 1)">이전</button>
          <span>{{ currentPage }} / {{ totalPages }}</span>
          <button v-show="currentPage < totalPages" class="small-btn" @click="changePage(currentPage + 1)">다음</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'QnA',
  data() {
    return {
      newQuestion: "",
      searchQuery: "",
      questions: JSON.parse(localStorage.getItem("questions")) || [
        { text: "당신의 가장 소중한 기억은 무엇인가요?", answer: "", newAnswer: "" },
        { text: "오늘 하루를 돌아보며 가장 감사했던 순간은?", answer: "", newAnswer: "" },
        { text: "지금 당신에게 가장 중요한 사람은 누구인가요?", answer: "", newAnswer: "" },
        { text: "남기고 싶은 메시지가 있다면 무엇인가요?", answer: "", newAnswer: "" },
        { text: "내일이 마지막 날이라면 무엇을 하고 싶나요?", answer: "", newAnswer: "" },
      ],
      currentPage: 1,
      itemsPerPage: 5,
      activeOptions: null,
      activeAnswerOptions: null,
    };
  },
  computed: {
    filteredQuestions() {
    const query = this.searchQuery.toLowerCase();
    return this.questions.filter((q) =>
      q.text.toLowerCase().includes(query) || (q.answer && q.answer.toLowerCase().includes(query))
    );
  },
  paginatedQuestions() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredQuestions.slice(start, start + this.itemsPerPage);
  },
  totalPages() {
  const total = Math.ceil(this.filteredQuestions.length / this.itemsPerPage);
  return total > 0 ? total : 1; // 최소 1 보장
    },
  },
  watch: {
    // 검색어 변경될 때 페이지를 1페이지로 초기화 
    searchQuery() {
      this.currentPage = 1;
    },
  },
  methods: {
    addQuestion() {
      if (this.newQuestion.trim()) {
        const newQuestion = { text: this.newQuestion.trim(), answer: "", newAnswer: "" };
        this.questions.unshift(newQuestion);
        this.newQuestion = "";
        this.saveToLocalStorage();
      }
    },
    saveAnswer(index) {
      const question = this.paginatedQuestions[index];
      if (question.newAnswer.trim()) {
        question.answer = question.newAnswer.trim();
        question.newAnswer = "";
        this.saveToLocalStorage();
      }
    },
    toggleOptions(index) {
      this.activeOptions = this.activeOptions === index ? null : index;
    },
    toggleAnswerOptions(index) {
      this.activeAnswerOptions = this.activeAnswerOptions === index ? null : index;
    },
    saveToLocalStorage() {
      localStorage.setItem("questions", JSON.stringify(this.questions));
    },
    changePage(page) {
    console.log("요청된 페이지:", page); // 🔥 디버깅 로그 추가
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      console.log("변경된 현재 페이지:", this.currentPage); // 🔥 디버깅 로그 추가
    }
  },
    editQuestion(index) {
      const realIndex = (this.currentPage - 1) * this.itemsPerPage + index; // 전체 리스트에서의 인덱스
      const newQuestionText = prompt('수정할 질문을 입력하세요:', this.questions[realIndex].text);
      if (newQuestionText) {
        this.questions[realIndex].text = newQuestionText;
        this.saveToLocalStorage();
      }
    },
    deleteQuestion(index) {
      const realIndex = (this.currentPage - 1) * this.itemsPerPage + index;
      if (confirm('정말로 이 질문을 삭제하시겠습니까?')) {
        this.questions.splice(realIndex, 1);
        this.saveToLocalStorage();
        // 페이지 수가 줄어들면 마지막 페이지를 조정
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
      }
    },
    editAnswer(index) {
      const question = this.paginatedQuestions[index];
      const newAnswerText = prompt('수정할 답변을 입력하세요:', question.answer);
      if (newAnswerText) {
        question.answer = newAnswerText;
        this.saveToLocalStorage();
      }
    },
    deleteAnswer(index) {
      const question = this.paginatedQuestions[index];
      if (confirm('정말로 이 답변을 삭제하시겠습니까?')) {
        question.answer = '';
        this.saveToLocalStorage();
      }
    },
  },
};
</script>


<style scoped>
/* 전체 페이지 스타일 */
#qna {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  background-color: #f9f9f9;
}

/* 네비게이션 바 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

/* 본문 레이아웃 */
.main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  padding: 20px;
  flex-direction: column;
  align-items: center;
}

/* 질문 카드 스타일 */
.questions-card {
  background: white;
  padding: 20px;
  border-radius: 12px; /* 더 부드러운 라운드 모서리 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* 더 깊고 자연스러운 그림자 */
  max-width: 650px; /* 최대 너비를 약간 확대 */
  width: 100%;
  margin-bottom: 20px; /* 카드를 여러 개 배치할 때 마진을 주어 간격을 더 넓힘 */
  box-sizing: border-box; /* 패딩과 경계선을 포함해 사이즈 계산 */
}
/* 검색 입력창 스타일 */
.search-input {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px; /* 검색 입력창 하단에 충분한 여백 추가 */
  border: 1px solid #ccc;
  border-radius: 10px; /* 입력창에 더 부드러운 경계 */
  font-size: 1rem;
  box-sizing: border-box;
}

/* 질문 아이템 스타일 */
.question-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 질문을 상단에 정렬 */
  position: relative;
  margin-bottom: 20px; /* 질문 항목 간의 간격을 넓힘 */
}

.ellipsis-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #666; /* 기본 색상 */
  padding: 5px;
  border-radius: 50%;
  transition: background 0.3s, transform 0.2s;
}

.ellipsis-btn:hover {
  background: rgba(0, 0, 0, 0.1); /* 호버 시 약간의 배경 효과 */
}

.ellipsis-btn:active {
  transform: scale(0.9); /* 클릭 시 약간 축소 */
}

.options-menu.active {
  opacity: 1;
  transform: translateY(0);
}


.options-menu button:hover {
  background: rgba(0, 0, 0, 0.1);
}

/* 답변 입력 영역 */
.answer-section {
  display: flex;
  margin-top: 20px; /* 답변 섹션 위쪽 여백을 늘려서 간격을 더 줌 */
  align-items: center;
}

/* 답변 입력 필드 */
.answer-input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* 페이지 네비게이션 버튼 */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px; /* 페이지 버튼과 질문 카드 간의 여백을 넓힘 */
}

.pagination button {
  padding: 10px 16px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  margin: 0 8px; /* 버튼 간 간격을 넓힘 */
  border-radius: 10px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  opacity: 1 !important;
  pointer-events: auto !important;
  z-index: 3;
}

.pagination button:hover {
  background-color: #f1f1f1;
}

.pagination button:active {
  transform: translateY(1px); /* 눌렸을 때 버튼이 살짝 내려가는 효과 */
}

.new-question form {
  display: flex;
  width: 90%;
  max-width: 700px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 30px; /* 라운드 코너 */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
}

.new-question input {
  flex-grow: 1;
  padding: 12px;
  border: 1px solid #444;
  border-radius: 20px;
  margin-right: 15px;
  font-size: 1rem;
}

.new-question input:focus {
  outline: none;
  border-color: #28a745; /* 초록색 포커스 색상 */
}

.new-question button {
  padding: 12px 18px;
  background-color: #28a745; /* 초록색 버튼 */
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.new-question button:hover {
  background-color: #218838; /* 버튼 호버 시 어두운 초록 */
  transform: translateY(-2px); /* 버튼을 약간 위로 올리는 효과 */
}

.new-question button:active {
  transform: translateY(1px); /* 클릭 시 버튼 살짝 눌리는 효과 */
}
</style>
