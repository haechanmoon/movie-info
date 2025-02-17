// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // Firebase 앱 초기화 함수
import { getAuth } from 'firebase/auth'; // Firebase 인증
import { getFirestore } from 'firebase/firestore'; // Firebase Firestore
// import { getAnalytics } from 'firebase/analytics'; // Firebase Analytics (필요한 경우 사용)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0RRm7Gi6SUmd57jCdSEer9J8eI5NzibI",
  authDomain: "juma-a7eec.firebaseapp.com",
  projectId: "juma-a7eec",
  storageBucket: "juma-a7eec.firebasestorage.app",
  messagingSenderId: "526553882465",
  appId: "1:526553882465:web:438e15cfcb903806026f20",
  measurementId: "G-EC4REBXKWJ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Analytics가 필요하면 이 줄을 활성화

//export const auth = getAuth(app); // Firebase 인증
//export const firestore = getFirestore(app); // Firestore 데이터베이스
//export default app; // Firebase 앱 객체를 기본 내보내기
