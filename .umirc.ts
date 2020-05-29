import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'hash',
  },
  hash: true,
  // base: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [{ path: '/', component: '@/pages/index' }],
});
