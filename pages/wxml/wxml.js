// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"wxml的语法格式",
    firstName:"张",
    lastName:"三",
    age:15,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    show:true,
    showbt:"显示",
    score:83,
    movies:['三国','水浒','西游']
  },
  onLoad(){
    //设置每秒钟执行一次
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  changeColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  changeshow(){
    this.setData({

    show:!this.data.show,
    showbt:this.data.showbt=="显示"?"隐藏":"显示"
    })
  }

  
})