// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:""
  },
  choosePhones(){
    wx.chooseImage({
      success: (res)=> {
        //取出路径
        const path = res.tempFilePaths[0]
        //设置路径imgUrl
        this.setData({
          imgUrl: path
        })
      },
    })
  },
  loadImage(){
    console.log("图片加载完成")
  }


})