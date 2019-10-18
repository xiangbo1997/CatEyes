const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      //写的时候可以不用写后缀
      extensions: ['.js', '.vue', '.json'],
      alias: {
        //写vue的时候就会自动引入这个路径
        'vue$': 'vue/dist/vue.esm.js',
        //可以配置路径的别名  @就代表了后面的路径
        '@': resolve('src')
      }
    }
  },
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost", 
    port: '8081',
    https: false,
    hotOnly: false, 
    proxy: {
      '/api': {
        target: 'http://localhost:5000', //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {  //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    },
  }
}