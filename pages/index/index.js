//index.js
//获取应用实例
const app = getApp()//获取全局的属性


//输出全局的属性
console.log(app.globalData.age)

Page({
  data: {
   list:[]
  },

  //获取用户信息
  getUserInfo2:function(event){
   console.log(event)
  },
  //1.监听页面的生命周期函数
  onLoad:function(){
    wx.request({
      url: 'https://www.imooc.com/course/ajaxlist',
      success:(res)=>{
        const data = res.data.list
        console.log(res)
        //将从接口中获取的数据传入list中
        this.setData({
          list: data
        })
      }
    })
  },
  // onLoad: function(){
  //   wx.request({
  //     url: 'https://www.imooc.com/course/ajaxlist',
  //     success:function(res){
  //       const data = res.data.list
  //       console.log(res)
  //       _this.setData({
  //         list: data
  //       })
  //     }
  //   })
  // },

  //监听界面滚动
  onPageScroll: function(obj){
    console.log(obj)
  },
  //页面滚动到底部
  onReachBottom: function(){
  console.log("页面滚动到底部")
}

})
