import { createRouter, createWebHistory } from 'vue-router';
import Main from '../view/Main.vue';
import Mypage from '../view/MyInformation.vue';
import QnaPage from '../view/QnaPage.vue';
import Memories from '../view/Memories.vue';
import Friends from '../view/Friends.vue';
import MyInfo from '../view/MyInformation.vue';
import MySecu from '../view/MySecurity.vue';
import SignUpPage from '../view/SignupPage.vue';

const routes = [
  { path: '/', component: Main, name: 'main' },
  { path: '/mypage', component: Mypage, name: 'mypage' },
  { path: '/qa', component: QnaPage, name: 'qa' },
  { path: '/memories', component: Memories, name: 'memories' },
  { path: '/friends', component: Friends, name: 'friends' },
  { path: '/my-information', component: MyInfo, name: 'myinfo' },
  { path: '/account-security' , component: MySecu, name: 'mysecu' },
  { path: '/signup', component: SignUpPage , name:'SignUpPage'}, 
    // 'mypage' 라는 이름 추가
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
