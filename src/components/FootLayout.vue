<template>
    <footer class="footer">
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
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FootLayout'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    font-size: 0.9rem;
    border-top: 2px solid #e0e0e0;
  }
  
  .footer p {
    margin: 0;
    color: #666;
  }
  
  .footer-links {
    margin-top: 10px;
  }
  
  .footer-link {
    color: #007bff;
    text-decoration: none;
    margin: 0 10px;
  }
  
  .footer-link:hover {
    text-decoration: underline;
  }
  
  .footer-socials {
    margin-top: 15px;
  }
  
  .footer-social-link {
    color: #007bff;
    text-decoration: none;
    margin: 0 10px;
  }
  
  .footer-social-link:hover {
    text-decoration: underline;
  }
  </style>
  