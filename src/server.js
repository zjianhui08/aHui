const Koa = require('koa')
const Router = require('koa-router')//路由
const static = require('koa-static')//静态资源挂载
const views = require('koa-views')//解析模板
const session = require('koa-session')//session
const multer = require('koa-multer')//文件上传
const db = require('./dbmongodb')// 链接数据库的操作
// const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')//获取post请求的数据


//实例化
const app = new Koa()
const router = new Router()

// 设置cookies的密钥
app.keys = ['some secret hurr'];
// session的配置项
const CONFIG = {
  key: 'koa:sess',
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  maxAge: 60* 1000 * 60,//过期时间
  rolling: false,//每次进入设置session页面都会强制重新设置过期时间（默认false）
  renew: false//当session快要过期时从新设置过期时间（默认false）
}

// 中间件
app.use(bodyParser())
    .use(static(__dirname + "/public"))
    .use(views('views',{extension:'ejs'}))
    .use(session(CONFIG, app))
    .use(router.routes())
    .use(router.allowedMethods())
    // .use(session(CONFIG, app))

// 图片上传
//使用磁盘存储引擎
  var storage = multer.diskStorage({
    //文件存储位置
    destination:  (req, file, cb) =>{
      cb(null, "public/uploads")
    },
    //存储文件的名字 不配置filename的话默认系统创建
    // 存储文件的名称
    filename: (req,file,cb) => {
      cb(null,file.originalname)
    }
  })

//磁盘存储的配置
const upload = multer({ storage: storage })
// 文件上传
// router.post('/uploads',upload.single('file'),async ctx => {
//   ctx.redirect("/auto")
//   const imgUrl = ctx.request.header.origin + "/uploads/" + ctx.req.file.originalname
//   const {shopName, price, description} = ctx.req.body

//   await db.insert('join',{shopName,price,description,imgUrl})
  
// })

// 启动服务
app.listen(3000,_=>{
  console.log('running IN port 3000')
})

// 登录
router.get('/login', async ctx => {
    //用户的登录信息 
    const aUserIfo = ctx.query
    // 查询数据库
    const userIfo = await db.find('userIfo',{userName:aUserIfo.userName})
    if(userIfo.length === 1 && userIfo[0].psw === aUserIfo.psw){
      ctx.body = {
        success : 1,
        error: null,
        ifo: '登录成功',
        user :aUserIfo.userName
      }
    }else if (userIfo.length === 1 && userIfo[0].psw !== aUserIfo.psw){
      ctx.body = {
        success : 0,
        error: 1,
        ifo: '密码错误'
      }
    }else if(!userIfo.length){
      ctx.body = {
        success:0,
        data:null,
        error:2,
        ifo: "当前账号不存在"
      }
    }else{
      ctx.body = {
        success:0,
        data:null,
        error:3,
        ifo: "服务端错误"
      }
    }
})

// 注册
router.post('/register', async ctx => {
  const newUser = ctx.request.body
  const isuserIfo = await db.find('userIfo',{userName:newUser.userName})
    if(isuserIfo.length == 1){
      ctx.body = {
        success : 0,
        error: 1,
        ifo:"账户已存在",
        userName:newUser.userName
      }
      
    }else if (!isuserIfo.length == 1){
      await db.insert('userIfo',newUser)
      ctx.body = {
        success : 1,
        error: null,
        ifo:"注册成功",
        userName:newUser.userName
      }
    }else{
      ctx.body = {
        success : 0,
        error: 2,
        ifo:"服务端错误",
      }
    }
})
// 加入购物车

router.post('/shopInf', async ctx => {
  const shopInf = ctx.request.body
  const shopIfo = await db.find('shopInf',{shopId:shopInf.shopId})
  const allShopIfo = await db.find('shopInf')
  if(shopIfo.length === 0){
    await db.insert('shopInf',shopInf)
    ctx.body = {
      success : 1,
      error: null,
      ifo:"加入成功",
      shopInf : allShopIfo
    }
  }else if(shopIfo.length === 1){
    shopIfo.shopNum++
    console.log('已经存在了')
    ctx.body = {
      success : 1,
      error: null,
      ifo:"加入成功",
      shopInf : allShopIfo
    }
    console.log('成功加入了')
  }else{
    ctx.body = {
      success : 0,
      error: 1,
      ifo:"加入失败",
    }
  }
  

})
