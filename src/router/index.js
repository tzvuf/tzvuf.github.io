import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index.vue'
import Detail from '@/components/Detail.vue'

Vue.use(Router);

const routes = [
    // 动态路径参数 以冒号开头
    { path: '/detail/:id', component: Detail },
    { path: '/', component: Index }
];


const router = new Router({
    routes
});

// 路由跳转时判断是否需要拦截页面
router.beforeEach((to, from, next) => {
    next();
});

export default router;
