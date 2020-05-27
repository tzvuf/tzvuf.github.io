import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'hash',
  },
  hash: true,
  base: '/q',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
