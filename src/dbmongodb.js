const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID 
class Db{
  // 属性
  static run(){
    if(!Db.index){
      Db.index =  new Db()
    }
    return Db.index 
  }
   constructor(){
    this.db = ''
  }
  // 方法
  // 1.链接数据库
  connect() {
    const that = this
      return new Promise ((reslove,reject)=>{
        if(!that.db){
          MongoClient.connect(
            "mongodb://127.0.0.1:27017",
            {useNewUrlParser : true},
            (err,client)=>{
              if(err) {
                reject(err)
                throw new TypeError(err)
              }
                // const db = client.db(库名)
                that.db = client.db('teemo')//链接数据库
                console.log("数据库已经链接")
                reslove(that.db)
            }
          )
        }else{
        reslove(that.db)
        }
      })
    
    
  }
  // 增
  insert(cName,obj){
    const that = this
    return new Promise((reslove,reject)=>{
      that.connect()
        .then(db => {
          // const 集合名 = db.collection(集合名)
          db.collection(cName).insertOne(obj,(err, result) => {
            if (err) {
                reject(err)
                throw new TypeError(err)
            }
            reslove(result)
          })
        })
    })
  }
  // 删
  remove(cName,_id){
    const that = this
    return new Promise((reslove,reject) => {
      that.connect()
        .then(db => {
          db.collection(cName).deleteOne({_id: new ObjectId(_id)},(err,result) => {
            if(err){
              reject(err)
              throw new TypeError (err)
            }
            reslove(result)
          })
        })
    }) 
  }
  // 改
  update(cName,_id,newObj){
    const that = this
    return new Promise((reslove,reject) => {
      that.connect()
        .then(db => {
          db.collection(cName).update({_id: new ObjectId(_id)},{$set:newObj},(err,result) => {
            if(err){
              reject(err)
              throw new TypeError (err)
            }
            reslove(result)
          })
        })
    }) 
  }
  // 多条查询
  // 查
  find(cName,obj, index = 1, size = 10 ){//cName=>集合 obj=>条数据
    const that = this
    return new Promise((reslove,reject)=>{
      that.connect()
        .then(db => {
          // const 集合名 = db.collection(集合名)
         const result =  db.collection(cName).find(obj).limit(size).skip((index-1)*size)
          result.toArray((err,doc) => {
            if(err){
              reject(err)
              throw new TypeError(err)
            }
            reslove(doc)
          })
        })
    })
  }
    // 查询当前库的数据总量
  getCount(cName, obj){
    const that = this
    return new Promise((reslove,reject) => {
      that.connect().then(db => {
        const result = db.collection(cName).count(obj,(err,result) => {
          if(err){
            reject(err)
            throw new TypeError(err)
          }
          reslove(result)
        })
      })
    })
  }
}

module.exports = Db.run()