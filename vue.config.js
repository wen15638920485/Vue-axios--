module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://tingapi.ting.baidu.com', // 对应自己的接口
        changeOrigin: true, // 设置同源 默认false，是否需要改变原始主机头为目标URL
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/ap': {
        target: 'http://www.kuwo.cn', // 对应自己的接口
        changeOrigin: true, // 设置同源 默认false，是否需要改变原始主机头为目标URL
        ws: true,
        pathRewrite: {
          '^/ap': ''
        }
      }
    }
  }
}
