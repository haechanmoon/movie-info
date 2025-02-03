import { createRouter, createWebHistory } from 'vue-router';
import Mypage from '../view/Mypage.vue';
import QnaPage from '../view/QnaPage.vue';
import Memories from '../view/Memories.vue';
import Friends from '../view/Friends.vue';

const routes = [
  { path: '/mypage', component: Mypage, name: 'mypage' },
  { path: '/qa', component: QnaPage, name: 'qa' },
  { path: '/memories', component: Memories, name: 'memories' },
  { path: '/friends', component: Friends, name: 'friends' },
    // 'mypage' 라는 이름 추가
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
