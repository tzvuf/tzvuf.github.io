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
  // chunks: process.env.NODE_ENV === 'production' ? ['vendors', 'umi'] : ['umi'] ,
  // chunks: ['vendors', 'umi'],
  // chainWebpack: function(config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }: { resource: any }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     },
  //   });
  // },
});
