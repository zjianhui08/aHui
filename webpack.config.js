const path = require('path')//node的核心模块 用来拼接路径 jion resolve
const webpack = require('webpack') //webpack 自身携带的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')//解析.vue语法的loader
const HtmlPlugin = require('html-webpack-plugin')//在打包的过程中创建html文件 output所输出的文件会自动帮我们加入到新生成的文件中
const { CleanWebpackPlugin } = require('clean-webpack-plugin')//帮我们先删除生成的文件

module.exports = {
  // 声明是开发幻境还是生产幻境（线上环境）
  mode:"development",
  //映射 映射文件的错误信息 开发环境 cheap-module-eval-source-map
  devtool: "cheap-module-eval-source-map",
  // 入口文件
  entry : path.resolve(__dirname,"./src/index.js"),
  // 出口文件
  output: {
    // 输出文件的名字
    filename: 'bundle.js',
    // 输出文件的路径
    path: path.resolve(__dirname,"dist"),
    // 公共路径
    publicPath: "/"
  },
  // 解析各种语法的模块
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.styl(us)?/,
        // loader: "style-loader!css-loader!stylus-loader"
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // 避免了混乱
            options: {
              importLoaders: 1
            }
          },
          "stylus-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // 起服务
  devServer: {
    // 以哪个文件起服务
    contentBase: path.resolve(__dirname, "dist"),
    host : "0.0.0.0",
    //热更新 
    hot: true,
    port: 8080,//默认的端口号是8080
    // 去除hash,使用history
    // 如果我们的路由形式是以h5新增的history 做路由跳转的话要以index.html
    historyApiFallback:{
      index: '/index.html'
    },
    // 反向代理的配置
    proxy: {

      '/api': {
        target: 'https://mall.sogou.com/',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,     // 是否跨域
        // secure: false,          // 设置支持https协议的代理
      },
      '/ips': {
        target:  "http://localhost:3000",
        pathRewrite: {'^/ips' : ''},
        changeOrigin: true,     // target是域名的话，需要这个参数，
        // secure: false,          // 设置支持https协议的代理
      },
    }
  },
  plugins: [
    // webpack自身携带的更新插件
    new webpack.HotModuleReplacementPlugin(),
    // 解析vue语法的插件
    new VueLoaderPlugin(),
    new HtmlPlugin({
      // 配置依赖的模板
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $:"jquery", 
      jQuery:"jquery", 
     "windows.jQuery":"jquery"
    }) 
  ],
  

}