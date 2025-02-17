<template>
  <div class="layout">
    <!-- 메인 콘텐츠 -->
    <main class="content">
      <slot></slot>
    </main>

    <!-- 푸터 -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 YourWebsite. All rights reserved.</p>
        <div class="footer-links">
          <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" class="footer-link">Terms of Service</a>
          <a href="/contact-us" class="footer-link">Contact Us</a>
        </div>
        <div class="footer-socials">
          <a href="https://facebook.com" target="_blank" class="footer-social-link">Facebook</a>
          <a href="https://twitter.com" target="_blank" class="footer-social-link">Twitter</a>
          <a href="https://instagram.com" target="_blank" class="footer-social-link">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PageLayout'
};
</script>

<style scoped>
/* 전체 페이지 구조 설정 */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 70vh; /* 최소 높이를 화면 전체로 설정 */
} 

/* 콘텐츠 영역이 푸터를 밀어내도록 설정 */
.content {
  flex-grow: 1; /* 메인 콘텐츠가 푸터를 아래로 밀어냄 */
  padding: 20px;
}

/* 푸터 스타일 */
.footer {
  width: 100%;
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  font-size: 0.9rem;
  border-top: 2px solid #e0e0e0;
  flex-shrink: 0; /* 푸터 크기가 줄어들지 않도록 설정 */
}

/* 푸터 내부 정렬 */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 링크 섹션 */
.footer-links, .footer-socials {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
  flex-wrap: wrap;
}

/* 링크 스타일 */
.footer-link, .footer-social-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.footer-link:hover, .footer-social-link:hover {
  text-decoration: underline;
}

/* 반응형 디자인 */
@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
  }
}
</style>
