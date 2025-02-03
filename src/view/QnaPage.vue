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
        <ul>
          <li v-for="(question, index) in filteredQuestions" :key="index" class="question-item">
            <div class="question-header">
              <button class="ellipsis-btn" @click="toggleOptions(index)">...</button>
              <span><strong>질문:</strong> {{ question.text }}</span>
              <div v-if="activeOptions === index" class="options-menu">
                <button @click="editQuestion(index)">수정</button>
                <button @click="deleteQuestion(index)">삭제</button>
              </div>
            </div>
            <!-- 저장된 답변 표시 -->
            <div v-if="question.answer" class="answer-display">
              <button class="ellipsis-btn" @click="toggleAnswerOptions(index)">...</button>
              <strong>답변:</strong> {{ question.answer }}
              <div v-if="activeAnswerOptions === index" class="options-menu">
                <button @click="editAnswer(index)">수정</button>
                <button @click="deleteAnswer(index)">삭제</button>
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
          <button v-if="currentPage < totalPages" class="small-btn" @click="changePage(currentPage + 1)">다음</button>
        </div>
      </div>
    </main>

    <!-- 새 질문 추가 -->
    <footer class="footer">
      <form @submit.prevent="addQuestion">
        <label for="newQuestion">새 질문:</label>
        <input type="text" id="newQuestion" v-model="newQuestion" placeholder="새 질문을 입력하세요" />
        <button type="submit">추가</button>
      </form>
    </footer>
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
    const filtered = this.questions.filter((q) =>
      q.text.toLowerCase().includes(query) || (q.answer && q.answer.toLowerCase().includes(query))
    );
    return filtered.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  },
  totalPages() {
    return Math.ceil(this.questions.length / this.itemsPerPage) || 1;
  },
},

  methods: {
  addQuestion() {
    if (this.newQuestion.trim()) {
      const newQuestion = { text: this.newQuestion.trim(), answer: "", newAnswer: "" };
      this.questions.push(newQuestion);
      this.newQuestion = "";
      this.saveToLocalStorage();
    }
  },
  saveAnswer(index) {
    const question = this.filteredQuestions[index];
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
    this.currentPage = page;
  },
  
  // 질문 수정 메서드
  editQuestion(index) {
    const newQuestionText = prompt('수정할 질문을 입력하세요:', this.questions[index].text);
    if (newQuestionText) {
      this.questions[index].text = newQuestionText;
      this.saveToLocalStorage();
    }
  },
  
  // 질문 삭제 메서드
  deleteQuestion(index) {
    if (confirm('정말로 이 질문을 삭제하시겠습니까?')) {
      this.questions.splice(index, 1);
      this.saveToLocalStorage();
    }
  },

  // 답변 수정 메서드 추가
  editAnswer(index) {
    const newAnswerText = prompt('수정할 답변을 입력하세요:', this.filteredQuestions[index].answer);
    if (newAnswerText) {
      this.filteredQuestions[index].answer = newAnswerText;
      this.saveToLocalStorage();
    }
  },

  // 답변 삭제 메서드 추가
  deleteAnswer(index) {
    if (confirm('정말로 이 답변을 삭제하시겠습니까?')) {
      this.filteredQuestions[index].answer = '';
      this.saveToLocalStorage();
    }
  },
}

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
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

/* 검색 입력창 스타일 */
.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* 질문 아이템 스타일 */
.question-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

/* 답변 입력 영역 */
.answer-section {
  display: flex;
  margin-top: 10px;
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
  margin-top: 20px;
}

.pagination button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 5px;
}

.pagination button:hover {
  background-color: #dcdcdc;
  transition: background-color 0.3s ease;
}

/* 새 질문 입력 영역 */
.footer {
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
}

.footer form {
  display: flex;
  width: 80%;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
}

.footer input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.footer button {
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
}

.footer button:hover {
  background-color: #218838;
}
</style>
